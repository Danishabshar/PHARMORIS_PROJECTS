This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Pharma Insights Dashboard
<!-- 
A production-grade dashboard built with Next.js App Router, focused on data-driven UI architecture, reusable component systems, and type-safe design patterns. The application visualizes pharmaceutical data from the OpenFDA API using a structured approach to server/client separation, generic abstractions, and scalable UI composition.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Table of Contents
- [Overview](#-overview)
- [Architectural Patterns](#-architectural-patterns)
- [Component Architecture](#-component-architecture)
- [Data Flow](#-data-flow)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Scalability](#-scalability)
- [Future Improvements](#-future-improvements)

## 📌 Overview

This project demonstrates how to architect a modern frontend system that is:

- **Composable** – built using reusable, isolated components
- **Type-safe** – leveraging TypeScript generics and strict typing
- **Data-driven** – UI derived from structured configuration (columns, cards)
- **Scalable** – follows patterns suitable for large applications

## 🧱 Architectural Patterns Used

### 1. Separation of Concerns (Server vs Client)

The application follows Next.js App Router architecture with clear separation:

**Server Components**
- Responsible for data fetching
- API integration (OpenFDA)
- Data transformation layer

**Client Components**
- UI rendering
- Interactivity (sorting, hover states)
- State management


This ensures:
- Decoupling from API inconsistencies
- Predictable UI contracts
- Easier extensibility

### 3. Generic Component Pattern (Reusable Table)

A generic table abstraction is implemented:

```typescript
interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

Design Token Pattern
UI styling is abstracted using token-based mapping:

typescript
const STOCK_STATUS_STYLES = {
  IN_STOCK: 'text-green-400 bg-green-500/10',
  LOW_STOCK: 'text-yellow-400 bg-yellow-500/10',
  OUT_OF_STOCK: 'text-red-400 bg-red-500/10'
} as const;
This provides:

Centralized styling logic

Consistency across components

Easy theming/extensibility

6. Compound Component Pattern (KPI System)
KPI cards are built using composable sub-components:

tsx
<KpiCard>
  <KpiCard.Icon icon={trendingUp} />
  <KpiCard.Content>
    <KpiCard.Value>{value}</KpiCard.Value>
    <KpiCard.Label>{label}</KpiCard.Label>
    <KpiCard.Delta value={delta} />
  </KpiCard.Content>
</KpiCard>
This allows:

Flexible composition

Independent testing

Reusability of primitives  

Controlled Rendering via Props
All components are pure and declarative:

tsx
<Table data={data} columns={columns} />
<KpiCardSection cards={cards} />
No hidden dependencies, ensuring:

Predictable rendering

Easier debugging

Better maintainability

 Controlled Rendering via Props
All components are pure and declarative:

tsx
<Table data={data} columns={columns} />
<KpiCardSection cards={cards} />
No hidden dependencies, ensuring:

Predictable rendering

Easier debugging

Better maintainability

8. Type-Driven Development
TypeScript is used as a first-class design tool:

Domain models (Drug, StockStatus)

Generic abstractions (Table<T>)

Key-safe mappings (as const, keyof typeof)

This enforces:

Compile-time safety

Self-documenting code

Reduced runtime errors


State Management Approach
Minimal client state

Derived state from props

Sorting handled locally in table

No global state required

This aligns with: "Server-first data, client-only interaction"

🎨 UI System
Tailwind CSS utility-first styling

Tokenized colors and spacing

Dark theme dashboard layout

Consistent typography hierarchy

📂 Project Structure
text
pharma-insights-dashboard/
├── app/
│   └── insights/
│       ├── page.tsx            // Server entry (data fetching)
│       ├── InsightsClient.tsx  // Client UI composition
│       └── InsightsTable.tsx   // Table integration
├── components/
│   ├── Table.tsx               // Generic table system
│   ├── KpiCards.tsx            // KPI component system
│   └── Navbar.tsx              // Navigation system
├── lib/
│   └── utils.ts                // UI utilities & tokens
├── types/
│   └── index.ts                // Domain models & types
└── public/                     // Static assets 


This README provides:
1. **Professional branding** with badges and clear structure
2. **Comprehensive documentation** of all architectural patterns
3. **Code examples** showing key implementations
4. **Project structure** for easy navigation
5. **Setup instructions** for new developers
6. **Future roadmap** for scalability discussions
7. **Learning resources** for team onboarding

The document effectively communicates both what you built and why you built it that way, which is crucial for team collaboration and project maintenance. -->