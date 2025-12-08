import { useEffect, useState } from "react";
import { getSales } from "../services/api";

export default function useSales(filters) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    totalPages: 1
  });

  const fetch = async () => {
    setLoading(true);

    const params = {
      q: filters.search || "",
      sortBy: filters.sort || "date",
      sortOrder: filters.sortOrder || "desc",
      page: pageInfo.page,
    };

    const resp = await getSales(params);
    setData(resp.data);
    setPageInfo({
      page: resp.page,
      totalPages: resp.totalPages
    });
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [filters, pageInfo.page]);

  return { data, loading, pageInfo, setPageInfo };
}
