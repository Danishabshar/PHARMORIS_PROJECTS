
export default function StatusBar() {
  return (
    <div className="flex items-center gap-6 rounded-lg border border-white/[0.05] bg-white/[0.02] px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[11px] font-medium text-slate-400">All systems operational</span>
      </div>
      <div className="h-3 w-px bg-white/10" />
      <span className="text-[11px] text-slate-600">
        Last sync: <span className="text-slate-500">2 min ago</span>
      </span>
      <div className="h-3 w-px bg-white/10" />
      <span className="text-[11px] text-slate-600">
        NHS API: <span className="text-emerald-400">Connected</span>
      </span>
    </div>
  );
}