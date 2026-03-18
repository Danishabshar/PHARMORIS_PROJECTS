Getting Started

Follow these steps to run the project locally:

1️⃣ Clone the Repository
git clone https://github.com/your-username/pharmoris-dashboard.git
cd pharmoris-dashboard
2️⃣ Install Dependencies

Using npm:

npm install

Or using yarn / pnpm:

yarn install
# or
pnpm install
3️⃣ Run the Development Server
npm run dev
4️⃣ Open in Browser

Visit:

http://localhost:3000
🛠️ Build for Production
npm run build
npm start


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
Pharma Insights Dashboard

A production-grade dashboard built using Next.js (App Router), focused on scalable frontend architecture, reusable component systems, and type-safe development.

The application visualizes pharmaceutical data from external APIs using a structured, data-driven UI approach.

📌 Overview

This project demonstrates how to build a modern frontend system that is:

Composable → Built using reusable, isolated components

Type-safe → Powered by TypeScript generics and strict typing

Data-driven → UI derived from structured configurations

Scalable → Designed with production-level architecture in mind

⚙️ Tech Stack

Next.js (App Router)

React

TypeScript

Tailwind CSS

🏗️ Architecture
1. Server vs Client Separation

Server Components

Data fetching

API integration

Data transformation

Client Components

UI rendering

Interactions (sorting, hover states)

Local state handling

This ensures:

Better performance

Clear separation of concerns

Predictable UI contracts

🧩 Design Patterns Used
1. Compound Component Pattern

The UI uses the compound component pattern to build flexible and composable components.

Example (KPI Cards):

<KpiCard>
  <KpiCard.Icon />
  <KpiCard.Content>
    <KpiCard.Value />
    <KpiCard.Label />
    <KpiCard.Delta />
  </KpiCard.Content>
</KpiCard>

Benefits:

Flexible composition

Reusable sub-components

Clean and readable API

2. Atomic Design Approach

The UI is structured using atomic design principles:

Atoms → Buttons, text, icons

Molecules → Card sections, table rows

Organisms → KPI sections, tables

Pages → Complete dashboard screens

Why this matters:

Improves scalability

Encourages reuse

Makes refactoring easier

3. Generic Component Pattern

Reusable abstractions like a generic table:

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

Benefits:

Strong typing

Reusability across modules

Decoupled UI logic

4. Controlled Rendering via Props

All components are pure and declarative:

<Table data={data} columns={columns} />
<KpiCardSection cards={cards} />

No hidden dependencies → easier debugging and maintainability.

5. Design Token Pattern

Centralized styling via tokens:

const STOCK_STATUS_STYLES = {
  IN_STOCK: 'text-green-400 bg-green-500/10',
  LOW_STOCK: 'text-yellow-400 bg-yellow-500/10',
  OUT_OF_STOCK: 'text-red-400 bg-red-500/10'
} as const;

Benefits:

Consistency

Easy theming

Centralized styling control

📂 Project Structure
pharma-insights-dashboard/
├── app/
│   └── insights/
│       ├── page.tsx
│       ├── InsightsClient.tsx
│       └── InsightsTable.tsx
├── components/
│   ├── Table.tsx
│   ├── KpiCards.tsx
│   └── Navbar.tsx
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
🛠️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/pharmoris-dashboard.git
cd pharmoris-dashboard
2️⃣ Install Dependencies
npm install
# or
yarn install
# or
pnpm install
3️⃣ Run Development Server
npm run dev
4️⃣ Open in Browser
http://localhost:3000