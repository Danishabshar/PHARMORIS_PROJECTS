"use client";
import {
  Navbar,
  NavbarLogo,
  NavbarMenu,
  NavbarItem,
  NavbarActions,
} from "../Components/Navbar/layout";
import  { KpiCard, KpiGrid }  from "../Components/Container/KpiCardSection";
import  CostSavingsChart  from "../Components/Container/ChartSection";
import AlertPanel  from "../Components/Feedback/AlertPanel";
import StatusBar from "../Components/Feedback/StatusPanel"
import {kpiCards, costSavingsData, statusData, mockTableData}  from "../Mock/index";
import { formatDate, priceChangeColor, stockStatusColor } from "@/lib/utils";
import { ColumnDef } from "@/type/table";
import { Drug } from "@/type";
import Table from "@/Components/Table/table";


export default function DashboardPage() {

const columns: ColumnDef<Drug>[] = [
  {
    key: "name",
    label: "Drug Name",
    sortable: true,
    render: (_, drug) => (
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-200">
          {drug.name}
        </span>
        <span className="text-[10px] text-slate-600 mt-0.5">
          {drug.category}
        </span>
      </div>
    ),
  },
  {
    key: "manufacturer",
    label: "Manufacturer",
    sortable: true,
    render: (value) => (
      <span className="text-sm text-slate-400">{value}</span>
    ),
  },
  {
    key: "stockStatus",
    label: "Stock Status",
    sortable: true,
    render: (value) => (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${stockStatusColor(
          value
        )}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
        {value}
      </span>
    ),
  },
  {
    key: "priceChange",
    label: "Price Δ",
    sortable: true,
    render: (value: number) => (
      <span
        className={`font-mono text-sm font-medium ${priceChangeColor(value)}`}
      >
        {value > 0 ? "+" : ""}
        {value.toFixed(1)}%
      </span>
    ),
  },
  {
    key: "lastUpdated",
    label: "Last Updated",
    sortable: true,
    render: (value) => (
      <span className="text-sm text-slate-500">
        {formatDate(value)}
      </span>
    ),
  },
];
  return (
    <div className="min-h-dvh bg-[#080C12] bg-grid">
       <Navbar>
        <NavbarLogo />
        <NavbarMenu>
          <NavbarItem label="Dashboard" />
          <NavbarItem label="Insights" />
          <NavbarItem label="Supply" />
          <NavbarItem label="Settings" />
        </NavbarMenu>
        <NavbarActions />
      </Navbar>
      <main className="mx-auto max-w-[1400px] px-6 pb-16 pt-8">
       <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-px w-5 bg-[#00D4FF]/40" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#00D4FF]/60">
                Overview
              </span>
            </div>
            <h1 className="text-xl font-semibold text-white tracking-tight">
              Dashboard
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Monday, 17 March 2026 · NHS England Region
            </p>
          </div>
         <div>
          <StatusBar items={statusData} />;
         </div>
        </div>

       <KpiGrid cols={4}>
        {kpiCards.map((card, i) => (
          <KpiCard key={card.id} card={card} index={i} />
        ))}
      </KpiGrid>

        <section
          aria-label="Analytics"
          className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_320px]"
        >
          <CostSavingsChart data={costSavingsData} />
          <AlertPanel />
        </section>
        <section aria-label="Drug Inventory">
<Table<Drug>
  data={mockTableData}
  columns={columns}
  defaultSortKey="lastUpdated"
  defaultSortDir="desc"
/>
        </section>
      </main>
    </div>
  );
}