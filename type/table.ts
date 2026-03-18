export type SortDirection = "asc" | "desc";

export type ColumnDef<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
};

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  defaultSortKey?: keyof T;
  defaultSortDir?: SortDirection;
}