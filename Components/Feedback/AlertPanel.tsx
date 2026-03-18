"use client";

interface AlertItem {
  id: string;
  drug: string;
  type: "critical" | "warning" | "info";
  message: string;
  time: string;
}

const ALERTS: AlertItem[] = [
  { id: "1", drug: "Amoxicillin 250mg", type: "critical", message: "Stock depleted — reorder urgent", time: "4m" },
  { id: "2", drug: "Ramipril 5mg", type: "critical", message: "Out of stock — 3 pharmacies affected", time: "18m" },
  { id: "3", drug: "Atorvastatin 20mg", type: "warning", message: "Low stock threshold reached", time: "32m" },
  { id: "4", drug: "Sertraline 50mg", type: "warning", message: "Price increase detected +3.7%", time: "1h" },
  { id: "5", drug: "Omeprazole 20mg", type: "info", message: "Delivery scheduled for tomorrow", time: "2h" },
];

const TYPE_STYLES = {
  critical: { dot: "bg-rose-400", text: "text-rose-400/80", bg: "bg-rose-400/5 border-rose-400/10" },
  warning: { dot: "bg-amber-400", text: "text-amber-400/80", bg: "bg-amber-400/5 border-amber-400/10" },
  info: { dot: "bg-sky-400", text: "text-sky-400/80", bg: "bg-sky-400/5 border-sky-400/10" },
};

export default function AlertPanel() {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
      <div className="border-b border-white/[0.06] px-5 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white tracking-wide">Stock Alerts</h2>
          <p className="text-[11px] text-slate-500 mt-0.5">Today · 47 total</p>
        </div>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-400/10 text-[10px] font-bold text-rose-400">
          12
        </span>
      </div>

      <ul className="divide-y divide-white/[0.04]">
        {ALERTS.map((alert) => {
          const s = TYPE_STYLES[alert.type];
          return (
            <li
              key={alert.id}
              className="group px-5 py-3.5 transition-colors duration-150 hover:bg-white/[0.02] cursor-default"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0">
                  <span className={`block h-1.5 w-1.5 rounded-full ${s.dot}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-300 truncate group-hover:text-white transition-colors">
                    {alert.drug}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${s.text} leading-snug`}>
                    {alert.message}
                  </p>
                </div>
                <span className="text-[10px] text-slate-600 flex-shrink-0 mt-0.5">
                  {alert.time}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="px-5 py-3 border-t border-white/[0.06]">
        <button className="text-[11px] font-medium text-[#00D4FF]/70 hover:text-[#00D4FF] transition-colors focus:outline-none">
          View all alerts →
        </button>
      </div>
    </div>
  );
}