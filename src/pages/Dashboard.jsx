import useSales from "../hooks/useSales";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/Topbar";
import FiltersRow from "../components/FiltersRow";
import StatCards from "../components/StatCards";
import TransactionsTable from "../components/TransactionsTable";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  const [filters, setFilters] = useState({ search: "" });
  const { data, loading, pageInfo, setPageInfo } = useSales(filters);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <TopBar
          value={filters.search}
          onChange={(v) => setFilters({ ...filters, search: v })}
        />

        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <FiltersRow />
          <StatCards />

          <TransactionsTable rows={data} loading={loading} />

          <Pagination
            page={pageInfo.page}
            totalPages={pageInfo.totalPages}
            setPage={(p) => setPageInfo({ ...pageInfo, page: p })}
          />
        </div>
      </div>
    </div>
  );
}
