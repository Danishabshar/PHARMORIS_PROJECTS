"use client";

import { useEffect, useRef } from "react";
import type { KPICard } from "../../type/index";

interface KPICardProps {
  card: KPICard;
  index: number;
}

function PharmacyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="6" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 6V4a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 9.5v4M7 11.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CapsuleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="7" width="12" height="4" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 7v4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SavingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 13l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 7h3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L16 14H2L9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 8v3M9 12.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const ICONS: Record<string, React.FC> = {
  pharmacy: PharmacyIcon,
  capsule: CapsuleIcon,
  savings: SavingsIcon,
  alert: AlertIcon,
};

const ACCENT_COLORS: Record<string, string> = {
  pharmacy: "#00D4FF",
  capsule: "#7B61FF",
  savings: "#00E096",
  alert: "#FF6B6B",
};

export default function KPICardComponent({ card, index }: KPICardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = ICONS[card.icon];
  const accent = ACCENT_COLORS[card.icon];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100 + index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.055] hover:shadow-lg"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)` }}
      />
      <div className="mb-4 flex items-start justify-between">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{
            background: `${accent}12`,
            color: accent,
            border: `1px solid ${accent}25`,
          }}
        >
          <Icon />
        </div>
        {card.delta && (
          <span
            className={`text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full border ${
              card.deltaType === "positive"
                ? "text-emerald-400 bg-emerald-400/8 border-emerald-400/20"
                : card.deltaType === "negative"
                ? "text-rose-400 bg-rose-400/8 border-rose-400/20"
                : "text-slate-400 bg-white/5 border-white/10"
            }`}
          >
            {card.delta}
          </span>
        )}
      </div>
      <div className="mb-1">
        <span className="font-mono text-2xl font-semibold tracking-tight text-white">
          {card.value}
        </span>
      </div>
      <p className="text-xs font-medium tracking-wide text-slate-500">{card.label}</p>
      <div
        className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
        style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }}
      />
    </div>
  );
}