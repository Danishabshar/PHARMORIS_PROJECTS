
import InsightsClient from "./insightClient";

async function getDrugData() {
  const res = await fetch("https://api.fda.gov/drug/label.json?search=openfda.brand_name:*&limit=100", {
    cache: "no-store",
  });

  const json = await res.json();
  return json.results.map((item: any, index: number) => ({
    id: String(index + 1),
    name: item.openfda?.brand_name?.[0] || "Unknown Drug",
    category: item.openfda?.pharm_class_epc?.[0] || "General",
    manufacturer: item.openfda?.manufacturer_name?.[0] || "Unknown",
    stockStatus: ["In Stock", "Low Stock", "Out of Stock"][
      Math.floor(Math.random() * 3)
    ],
    priceChange: Number((Math.random() * 5 - 2.5).toFixed(1)),
    lastUpdated: new Date().toISOString(),
  }));
}

export default async function Page() {
  const data = await getDrugData();

  return <InsightsClient data={data} />;
}