export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock" | "On Order";

export interface Drug {
  id: string;
  name: string;
  manufacturer: string;
  stockStatus: StockStatus;
  priceChange: number; // percentage
  lastUpdated: string;
  category: string;
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