import  Navbar  from "../Components/Navbar/layout";
import  KPICardComponent  from "../Components/Container/KpiCardSection";
import DataTable  from "../Components/Container/TableSection";
import  CostSavingsChart  from "../Components/Container/ChartSection";
import AlertPanel  from "../Components/Feedback/AlertPanel";
import StatusBar from "../Components/Feedback/StatusPanel"
import {kpiCards, drugData, costSavingsData}  from "../Mock/index";

export default function DashboardPage() {
  return (
    <div className="min-h-dvh bg-[#080C12] bg-grid">
      <Navbar />

      <main className="mx-auto max-w-[1400px] px-6 pb-16 pt-8">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
          <StatusBar />
        </div>

        {/* KPI Cards */}
        <section aria-label="Key Performance Indicators" className="mb-7">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {kpiCards.map((card, i) => (
              <KPICardComponent key={card.id} card={card} index={i} />
            ))}
          </div>
        </section>

        {/* Chart + Alert Panel */}
        <section
          aria-label="Analytics"
          className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_320px]"
        >
          <CostSavingsChart data={costSavingsData} />
          <AlertPanel />
        </section>

        {/* Data Table */}
        <section aria-label="Drug Inventory">
          <DataTable data={drugData} />
        </section>
      </main>
    </div>
  );
}