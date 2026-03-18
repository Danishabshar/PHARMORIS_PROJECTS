
"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { CostSavingDataPoint } from "../../type/index";
import { formatCurrency } from "@/lib/utils";

interface CostSavingsChartProps {
  data: CostSavingDataPoint[];
}

interface TooltipPayload {
  value: number;
  name: string;
  color: string;
}

interface CustomTooltipProps {
  active?: boolean;
  label?: string;
  payload?: TooltipPayload[];
}

function CustomTooltip({ active, label, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-white/10 bg-[#0D1420]/95 px-3.5 py-3 shadow-xl backdrop-blur-sm">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
        {label}
      </p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 text-xs">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: entry.color }}
          />
          <span className="text-slate-400 capitalize">{entry.name}:</span>
          <span className="font-mono font-medium text-white">
            {formatCurrency(entry.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CostSavingsChart({ data }: CostSavingsChartProps) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white tracking-wide">
            Cost Savings Over Time
          </h2>
          <p className="mt-0.5 text-[11px] text-slate-500">
            Actual vs target — last 12 months
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#00D4FF]" />
            <span className="text-[11px] text-slate-500">Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#7B61FF]" />
            <span className="text-[11px] text-slate-500">Target</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#00D4FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7B61FF" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#7B61FF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.04)"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#64748B", fontSize: 11, fontFamily: "inherit" }}
              axisLine={false}
              tickLine={false}
              dy={6}
            />

            <YAxis
              tickFormatter={(v) => formatCurrency(v)}
              tick={{ fill: "#64748B", fontSize: 10, fontFamily: "monospace" }}
              axisLine={false}
              tickLine={false}
              width={52}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "rgba(255,255,255,0.06)", strokeWidth: 1 }}
            />

            <Area
              type="monotone"
              dataKey="target"
              name="target"
              stroke="#7B61FF"
              strokeWidth={1.5}
              strokeDasharray="4 3"
              fill="url(#targetGrad)"
              dot={false}
              activeDot={{ r: 3, fill: "#7B61FF", stroke: "none" }}
              isAnimationActive={true}
              animationDuration={1200}
              animationEasing="ease-out"
            />

            <Area
              type="monotone"
              dataKey="savings"
              name="savings"
              stroke="#00D4FF"
              strokeWidth={2}
              fill="url(#savingsGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#00D4FF", stroke: "rgba(0,212,255,0.3)", strokeWidth: 3 }}
              isAnimationActive={true}
              animationDuration={1400}
              animationEasing="ease-out"
            />

            <ReferenceLine
              x="Mar"
              stroke="rgba(255,255,255,0.08)"
              strokeDasharray="2 2"
              label={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}