"use client";

import { TYPE_STYLES } from "@/lib/constant";
import { SAMPLE_ALERTS } from "@/Mock";
import { AlertItem, AlertPanelProps } from "@/type";

const AlertRow = ({ alert }: { alert: AlertItem }) => {
  const style = TYPE_STYLES[alert.type];
  return (
    <li className="group px-5 py-3.5 hover:bg-white/[0.02] border-b border-white/[0.04] last:border-0">
      <div className="flex items-start gap-3">
        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${style.dot}`} />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-slate-300 truncate group-hover:text-white">
            {alert.drug}
          </p>
          <p className={`text-[11px] mt-0.5 ${style.text} leading-snug`}>
            {alert.message}
          </p>
        </div>
        <span className="text-[10px] text-slate-600 mt-0.5">{alert.time}</span>
      </div>
    </li>
  );
};

export default function AlertPanel({ 
  title = "Stock Alerts",
  subtitle = "Today · 47 total",
  badge = 12,
  alerts = SAMPLE_ALERTS,
  onViewAll,
  className = ""
}: AlertPanelProps) {
  const criticalCount = alerts.filter(a => a.type === 'critical').length;
  const badgeColor = criticalCount > 0 ? "bg-rose-400/10 text-rose-400" : "bg-amber-400/10 text-amber-400";

  return (
    <div className={`rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden ${className}`}>
      <div className="border-b border-white/[0.06] px-5 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white tracking-wide">{title}</h2>
          {subtitle && <p className="text-[11px] text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <ul className="divide-y divide-white/[0.04]">
        {alerts.map(alert => <AlertRow key={alert.id} alert={alert} />)}
      </ul>
      {onViewAll && (
        <div className="px-5 py-3 border-t border-white/[0.06]">
          <button 
            onClick={onViewAll}
            className="text-[11px] font-medium text-[#00D4FF]/70 hover:text-[#00D4FF] transition-colors"
          >
            View all alerts →
          </button>
        </div>
      )}
    </div>
  );
}
export { SAMPLE_ALERTS, TYPE_STYLES };