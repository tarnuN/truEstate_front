import { useState, useEffect } from "react";
import useSales from "../hooks/useSales";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/Topbar";
import FiltersRow from "../components/FiltersRow";
import StatCards from "../components/StatCards";
import TransactionsTable from "../components/TransactionsTable";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  const [filters, setFilters] = useState({
    search: "",
    region: [],
    category: [],
    gender: [],
    payment: [],
    tags: [],
    date: "",
    sort: "",
    sortOrder: "",
  });

  const { data, loading, pageInfo, setPageInfo } = useSales(filters);

  // 🟢 Reset to page 1 whenever filters change
  useEffect(() => {
    setPageInfo((prev) => ({ ...prev, page: 1 }));
  }, [filters]);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        {/* 🔍 Search input */}
        <TopBar
          value={filters.search}
          onChange={(v) => setFilters((prev) => ({ ...prev, search: v }))}
        />

        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          {/* 🧩 Filters row */}
          <FiltersRow filters={filters} setFilters={setFilters} />

          {/* 📊 Stats update based on filtered results */}
          <StatCards rows={data} loading={loading} />

          {/* 📄 Table */}
          <TransactionsTable rows={data} loading={loading} />

          {/* 🔽 Pagination */}
          <Pagination pageInfo={pageInfo} setPageInfo={setPageInfo} />
        </div>
      </div>
    </div>
  );
}
