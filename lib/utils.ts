
import type { StockStatus } from "../type/index";

export function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `£${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `£${(value / 1_000).toFixed(0)}K`;
  return `£${value}`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHrs = Math.floor(diffMins / 60);
  if (diffHrs < 24) return `${diffHrs}h ago`;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export function stockStatusColor(status: StockStatus): string {
  switch (status) {
    case "In Stock":
      return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    case "Low Stock":
      return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    case "Out of Stock":
      return "text-rose-400 bg-rose-400/10 border-rose-400/20";
    case "On Order":
      return "text-sky-400 bg-sky-400/10 border-sky-400/20";
  }
}

export function priceChangeColor(change: number): string {
  if (change > 0) return "text-rose-400";
  if (change < 0) return "text-emerald-400";
  return "text-slate-400";
}