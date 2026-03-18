"use client";

import React, { useRef, forwardRef } from "react";
import type { KPICard } from "../../type/index";
interface IconProps {
  className?: string;
}
export const PharmacyIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="6" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6 6V4a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9 9.5v4M7 11.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const CapsuleIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="3" y="7" width="12" height="4" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M9 7v4" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const SavingsIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 13l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 7h3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AlertIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2L16 14H2L9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M9 8v3M9 12.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
interface DeltaBadgeProps {
  delta: string;
  deltaType?: 'positive' | 'negative' | 'neutral';
}

export const DeltaBadge = ({ delta, deltaType = 'neutral' }: DeltaBadgeProps) => {
  const styles = {
    positive: "text-emerald-400 bg-emerald-400/8 border-emerald-400/20",
    negative: "text-rose-400 bg-rose-400/8 border-rose-400/20",
    neutral: "text-slate-400 bg-white/5 border-white/10"
  };

  return (
    <span className={`text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full border ${styles[deltaType]}`}>
      {delta}
    </span>
  );
};

interface KpiValueProps {
  value: string;
  className?: string;
}

export const KpiValue = ({ value, className = '' }: KpiValueProps) => (
  <div className="mb-1">
    <span className={`font-mono text-2xl font-semibold tracking-tight text-white ${className}`}>
      {value}
    </span>
  </div>
);

interface KpiLabelProps {
  label: string;
  className?: string;
}

export const KpiLabel = ({ label, className = '' }: KpiLabelProps) => (
  <p className={`text-xs font-medium tracking-wide text-slate-500 ${className}`}>
    {label}
  </p>
);

interface IconWrapperProps {
  children: React.ReactNode;
  accent: string;
  className?: string;
}

export const IconWrapper = ({ children, accent, className = '' }: IconWrapperProps) => (
  <div
    className={`flex h-9 w-9 items-center justify-center rounded-lg ${className}`}
    style={{
      background: `${accent}12`,
      color: accent,
      border: `1px solid ${accent}25`,
    }}
  >
    {children}
  </div>
);

interface GlowEffectProps {
  accent: string;
  className?: string;
}

export const GlowEffect = ({ accent, className = '' }: GlowEffectProps) => (
  <div
    className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${className}`}
    style={{ background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)` }}
  />
);

interface BottomBarProps {
  accent: string;
}

export const BottomBar = ({ accent }: BottomBarProps) => (
  <div
    className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
    style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }}
  />
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', style }, ref) => (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.055] hover:shadow-lg ${className}`}
      style={style}
    >
      {children}
    </div>
  )
);

Card.displayName = 'Card';

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: string;
  className?: string;
}

export const KpiGrid = ({ 
  children, 
  cols = 4, 
  gap = 'gap-4', 
  className = '' 
}: GridProps) => {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section aria-label="Key Performance Indicators" className="mb-7">
      <div className={`grid ${colsMap[cols]} ${gap} ${className}`}>
        {children}
      </div>
    </section>
  );
};

const ICON_MAP = {
  pharmacy: PharmacyIcon,
  capsule: CapsuleIcon,
  savings: SavingsIcon,
  alert: AlertIcon,
};

const ACCENT_COLORS = {
  pharmacy: "#00D4FF",
  capsule: "#7B61FF",
  savings: "#00E096",
  alert: "#FF6B6B",
};

export const getKpiAccentColor = (icon: string): string => {
  return ACCENT_COLORS[icon as keyof typeof ACCENT_COLORS] || "#00D4FF";
};

export const getKpiIcon = (icon: string): React.FC<IconProps> => {
  return ICON_MAP[icon as keyof typeof ICON_MAP] || PharmacyIcon;
};

interface KpiCardProps {
  card: KPICard;
  index: number;
}

export const KpiCard = ({ card, index }: KpiCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = getKpiIcon(card.icon);
  const accent = getKpiAccentColor(card.icon);


  return (
    <Card ref={ref}>
      <GlowEffect accent={accent} />
      
      <div className="mb-4 flex items-start justify-between">
        <IconWrapper accent={accent}>
          <Icon />
        </IconWrapper>
        
        {card.delta && (
          <DeltaBadge 
            delta={card.delta} 
            deltaType={card.deltaType as 'positive' | 'negative' | 'neutral'} 
          />
        )}
      </div>
      
      <KpiValue value={card.value} />
      <KpiLabel label={card.label} />
      <BottomBar accent={accent} />
    </Card>
  );
};

interface KpiCardSectionProps {
  cards: KPICard[];
  cols?: 1 | 2 | 3 | 4;
}

const KpiCardSection = ({ cards, cols = 4 }: KpiCardSectionProps) => {
  return (
    <KpiGrid cols={cols}>
      {cards.map((card, i) => (
        <KpiCard key={card.id} card={card} index={i} />
      ))}
    </KpiGrid>
  );
};

export default KpiCardSection;