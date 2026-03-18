export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock" | "On Order" | "string";
export type AlertType = "critical" | "warning" | "info";
export interface Drug {
  id: string;
  name: string;
  manufacturer: string;
  stockStatus: StockStatus;
  priceChange: number; // percentage
  lastUpdated: string;
  category: string;
}
export interface AlertPanelProps {
  title?: string;
  subtitle?: string;
  badge?: number;
  alerts?: AlertItem[];
  onViewAll?: () => void;
  className?: string;
}
export interface AlertItem {
  id: string;
  drug: string;
  type: AlertType;
  message: string;
  time: string;
}

export interface KPICard {
  id: string;
  label: string;
  value: string;
  delta?: string;
  deltaType?: "positive" | "negative" | "neutral";
  icon: string;
}

export interface CostSavingDataPoint {
  month: string;
  savings: number;
  target: number;
}

export type SortKey = keyof Drug;
export type SortDirection = "asc" | "desc";

export interface SortState {
  key: SortKey;
  direction: SortDirection;
}

export type StatusType = "online" | "offline" | "warning" | "neutral";

export interface StatusItemType {
  label?: string;
  value: string;
  status?: StatusType;
}

export interface StatusBarProps {
  items: StatusItemType[];
}
