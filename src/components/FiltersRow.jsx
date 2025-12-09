import React from "react";
import { LuRotateCw } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";

const chipClass =
  "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-200 cursor-pointer";

export default function FiltersRow({ filters, setFilters }) {
  const openFilter = (type) => {
    const value = prompt(`Enter ${type} (comma separated):`);
    if (!value) return;
    const values = value.split(",").map(v => v.trim());
    setFilters(prev => ({ ...prev, [type]: values }));
  };

  const resetFilters = () => {
    setFilters({
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
  };

  const handleSort = (e) => {
    const option = e.target.value;
    if (option === "name_asc") {
      setFilters(prev => ({ ...prev, sort: "customer_name", sortOrder: "asc" }));
    } else if (option === "name_desc") {
      setFilters(prev => ({ ...prev, sort: "customer_name", sortOrder: "desc" }));
    } else if (option === "date_desc") {
      setFilters(prev => ({ ...prev, sort: "date", sortOrder: "desc" }));
    } else if (option === "date_asc") {
      setFilters(prev => ({ ...prev, sort: "date", sortOrder: "asc" }));
    }
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-3 flex-wrap">
        
        {/* 🔄 Reset Filters */}
        <div className={chipClass} onClick={resetFilters}>
          <LuRotateCw size={18} />
        </div>

        {/* Filters — temporary prompt input method */}
        <div className={chipClass} onClick={() => openFilter("region")}>Customer Region <FiChevronDown /></div>
        <div className={chipClass} onClick={() => openFilter("gender")}>Gender <FiChevronDown /></div>
        <div className={chipClass} onClick={() => openFilter("age")}>Age Range <FiChevronDown /></div>
        <div className={chipClass} onClick={() => openFilter("category")}>Product Category <FiChevronDown /></div>
        <div className={chipClass} onClick={() => openFilter("tags")}>Tags <FiChevronDown /></div>
        <div className={chipClass} onClick={() => openFilter("payment")}>Payment Method <FiChevronDown /></div>
        <div className={chipClass} onClick={() => openFilter("date")}>Date <FiChevronDown /></div>
      </div>

      {/* Sorting */}
      <div className="ml-auto">
        <select
          className="rounded border border-gray-200 py-2 px-3 bg-white text-sm"
          onChange={handleSort}
        >
          <option value="">Sort by...</option>
          <option value="name_asc">Customer Name (A-Z)</option>
          <option value="name_desc">Customer Name (Z-A)</option>
          <option value="date_desc">Date (Newest)</option>
          <option value="date_asc">Date (Oldest)</option>
        </select>
      </div>
    </div>
  );
}
