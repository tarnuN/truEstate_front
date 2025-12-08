import React from "react";

function Card({ title, subtitle }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 min-w-[180px]">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="mt-2 text-lg font-semibold">{subtitle}</div>
    </div>
  );
}

export default function StatCards() {
  return (
    <div className="flex gap-4">
      <Card title="Total units sold" subtitle="10" />
      <Card title="Total Amount" subtitle="₹89,000 (19 SRs)" />
      <Card title="Total Discount" subtitle="₹15,000 (45 SRs)" />
    </div>
  );
}
