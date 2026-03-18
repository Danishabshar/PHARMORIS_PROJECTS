
"use client";


import Table from "@/Components/Table/table";
import { formatDate, priceChangeColor } from "@/lib/utils";
import { ColumnDef } from "@/type/table";

type Drug = {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  stockStatus: string;
  priceChange: number;
  lastUpdated: string;
};

const columns: ColumnDef<Drug>[] = [
  {
    key: "name",
    label: "Drug Name",
    sortable: true,
    width: "w-[28%]",
    render: (_, drug) => (
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-200">
          {drug.name}
        </span>
        <span className="text-[10px] text-slate-600 mt-0.5">
          {drug.category}
        </span>
      </div>
    ),
  },
  {
    key: "manufacturer",
    label: "Manufacturer",
    sortable: true,
    width: "w-[20%]",
    render: (value: string) => (
      <span className="text-sm text-slate-400">
        {value || "Unknown"}
      </span>
    ),
  },
  {
    key: "stockStatus",
    label: "Stock Status",
    sortable: true,
    width: "w-[14%]",
    render: (value) => (
      <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium text-slate-300 bg-white/5 border-white/10">
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
        {value}
      </span>
    ),
  },
  {
    key: "priceChange",
    label: "Price Δ",
    sortable: true,
    width: "w-[11%]",
    render: (value: number) => (
      <span
        className={`font-mono text-sm font-medium ${priceChangeColor(value)}`}
      >
        {value > 0 ? "+" : ""}
        {value.toFixed(1)}%
      </span>
    ),
  },
  {
    key: "lastUpdated",
    label: "Last Updated",
    sortable: true,
    width: "w-[13%]",
    render: (value: string) => (
      <span className="text-sm text-slate-500">
        {formatDate(value)}
      </span>
    ),
  },
];

export default function InsightsClient({ data }: { data: Drug[] }) {

  return (
    <div className="min-h-dvh bg-[#080C12] bg-grid p-6 space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white">Insights</h1>
        <p className="text-sm text-slate-400">
          Real-time pharmaceutical analytics dashboard
        </p>
      </div>


      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">Inventory Overview</h2>

        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-slate-400 hover:text-white">
            Export
          </button>
          <button className="px-3 py-1.5 text-xs rounded-md bg-[#00D4FF]/10 text-[#00D4FF]">
            Filter
          </button>
        </div>
      </div>

      <Table columns={columns} data={data} />
    </div>
  );
}