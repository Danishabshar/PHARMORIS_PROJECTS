
"use client";

import { useState, useMemo, useCallback } from "react";
import type { Drug, SortKey, SortDirection } from "../../type/index";
import { formatDate, stockStatusColor, priceChangeColor } from "@/lib/utils";

interface DataTableProps {
  data: Drug[];
}

type ColumnDef = {
  key: SortKey | "actions";
  label: string;
  sortable: boolean;
  width?: string;
};

const COLUMNS: ColumnDef[] = [
  { key: "name", label: "Drug Name", sortable: true, width: "w-[28%]" },
  { key: "manufacturer", label: "Manufacturer", sortable: true, width: "w-[20%]" },
  { key: "stockStatus", label: "Stock Status", sortable: true, width: "w-[14%]" },
  { key: "priceChange", label: "Price Δ", sortable: true, width: "w-[11%]" },
  { key: "lastUpdated", label: "Last Updated", sortable: true, width: "w-[13%]" },
];

function SortIcon({ direction }: { direction: SortDirection | null }) {
  if (!direction) {
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" className="text-slate-600">
        <path d="M5 2L8 5H2L5 2z" fill="currentColor" />
        <path d="M5 8L2 5H8L5 8z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="text-[#00D4FF]"
      style={{ transform: direction === "desc" ? "rotate(180deg)" : undefined }}
    >
      <path d="M5 2L8 6H2L5 2z" fill="currentColor" />
    </svg>
  );
}

export default function DataTable({ data }: DataTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("lastUpdated");
  const [sortDir, setSortDir] = useState<SortDirection>("desc");

  const handleSort = useCallback(
    (key: SortKey) => {
      if (sortKey === key) {
        setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      } else {
        setSortKey(key);
        setSortDir("asc");
      }
    },
    [sortKey]
  );

  const sorted = useMemo(() => {
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const mul = sortDir === "asc" ? 1 : -1;
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * mul;
      return String(av).localeCompare(String(bv)) * mul;
    });
  }, [data, sortKey, sortDir]);

  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
      <div className="border-b border-white/[0.06] px-5 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white tracking-wide">Drug Inventory</h2>
          <p className="text-[11px] text-slate-500 mt-0.5">{data.length} drugs monitored</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/50">
            Export
          </button>
          <button className="rounded-md bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-1.5 text-[11px] font-medium text-[#00D4FF] transition-colors hover:bg-[#00D4FF]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/50">
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse" role="table">
          <thead>
            <tr className="border-b border-white/[0.05]">
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`${col.width ?? ""} px-5 py-3 text-left`}
                >
                  {col.sortable && col.key !== "actions" ? (
                    <button
                      onClick={() => handleSort(col.key as SortKey)}
                      className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-300 focus:outline-none group"
                    >
                      {col.label}
                      <SortIcon
                        direction={sortKey === col.key ? sortDir : null}
                      />
                    </button>
                  ) : (
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                      {col.label}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((drug, i) => (
              <TableRow key={drug.id} drug={drug} isLast={i === sorted.length - 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableRow = ({ drug, isLast }: { drug: Drug; isLast: boolean }) => {
  return (
    <tr
      className={`group cursor-default transition-colors duration-150 hover:bg-white/[0.03] ${
        !isLast ? "border-b border-white/[0.04]" : ""
      }`}
    >
      <td className="px-5 py-3.5">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
            {drug.name}
          </span>
          <span className="text-[10px] text-slate-600 mt-0.5">{drug.category}</span>
        </div>
      </td>
      <td className="px-5 py-3.5">
        <span className="text-sm text-slate-400">{drug.manufacturer}</span>
      </td>
      <td className="px-5 py-3.5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${stockStatusColor(
            drug.stockStatus
          )}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
          {drug.stockStatus}
        </span>
      </td>
      <td className="px-5 py-3.5">
        <span
          className={`font-mono text-sm font-medium ${priceChangeColor(drug.priceChange)}`}
        >
          {drug.priceChange > 0 ? "+" : ""}
          {drug.priceChange.toFixed(1)}%
        </span>
      </td>
      <td className="px-5 py-3.5">
        <span className="text-sm text-slate-500">{formatDate(drug.lastUpdated)}</span>
      </td>
    </tr>
  );
};