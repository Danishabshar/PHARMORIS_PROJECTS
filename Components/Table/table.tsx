"use client";

import { SortDirection } from "@/type";
import { TableProps } from "@/type/table";
import { useState, useMemo } from "react";

function SortIcon({ direction }: { direction?: SortDirection }) {
  if (!direction) return <span>↕</span>;
  return <span>{direction === "asc" ? "↑" : "↓"}</span>;
}

export default function Table<T>({
  data,
  columns,
  defaultSortKey,
  defaultSortDir = "asc",
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | undefined>(defaultSortKey);
  const [sortDir, setSortDir] = useState<SortDirection>(defaultSortDir);

  const handleSort = (key: keyof T) => {
    if (!key) return;

    if (sortKey === key) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];

      const mul = sortDir === "asc" ? 1 : -1;

      if (typeof av === "number" && typeof bv === "number") {
        return (av - bv) * mul;
      }

      return String(av).localeCompare(String(bv)) * mul;
    });
  }, [data, sortKey, sortDir]);

  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full border-collapse">
    <thead className="bg-white/[0.02] border-b border-white/[0.06]">
  <tr>
    {columns.map((col) => (
      <th
        key={String(col.key)}
        className={`px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-300 ${col.width || ""}`}
      >
        {col.sortable ? (
          <button
            onClick={() => handleSort(col.key)}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            {col.label}
            <SortIcon direction={sortKey === col.key ? sortDir : undefined} />
          </button>
        ) : (
          <span className="text-slate-400">{col.label}</span>
        )}
      </th>
    ))}
  </tr>
</thead>
     
        <tbody>
          {sortedData.map((row, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              {columns.map((col) => {
                const value = row[col.key];

                return (
                  <td key={String(col.key)} className="px-4 py-3">
                    {col.render ? col.render(value, row) : String(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}