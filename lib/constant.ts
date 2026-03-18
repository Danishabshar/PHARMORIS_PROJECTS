import { StatusType } from "@/type";

 export const TYPE_STYLES = {
  critical: { dot: "bg-rose-400", text: "text-rose-400/80", bg: "bg-rose-400/5" },
  warning: { dot: "bg-amber-400", text: "text-amber-400/80", bg: "bg-amber-400/5" },
  info: { dot: "bg-sky-400", text: "text-sky-400/80", bg: "bg-sky-400/5" },
};

export const STATUS_COLOR: Record<StatusType, string> = {
  online: "bg-emerald-400",
  offline: "bg-rose-400",
  warning: "bg-yellow-400",
  neutral: "bg-slate-400",
};