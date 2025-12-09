import { useEffect, useState } from "react";
import { getSales } from "../services/api";

export default function useSales(filters) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  const fetch = async () => {
    setLoading(true);

    const params = {
      q: filters.search || "",
      sortBy: filters.sort || "date",
      sortOrder: filters.sortOrder || "desc",
      page: pageInfo.page,
      limit: pageInfo.pageSize,
      customer_region: filters.region?.join(",") || "",
      product_category: filters.category?.join(",") || "",
      gender: filters.gender?.join(",") || "",
      payment_method: filters.payment?.join(",") || "",
      tags: filters.tags?.join(",") || "",
      date: filters.date || "",
    };

    const resp = await getSales(params);

    setData(resp.data || []);
    setPageInfo((prev) => ({
      ...prev,
      page: resp.page,
      total: resp.total,        // total rows in DB after applying filters
    }));

    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [
    filters,            // run when filters change
    pageInfo.page       // run when page changes
  ]);

  return { data, loading, pageInfo, setPageInfo };
}
