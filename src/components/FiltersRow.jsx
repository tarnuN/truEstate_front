import React from "react";
import { LuRotateCw } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";

const chipClass =
  "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-200 cursor-pointer";

export default function FiltersRow() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 flex-wrap">
        
        {/* Reload Icon (thin circular arrow like your image) */}
        <div className={chipClass}>
          <LuRotateCw size={18} />
        </div>

        <div className={chipClass}>Customer Region <FiChevronDown /></div>
        <div className={chipClass}>Gender <FiChevronDown /></div>
        <div className={chipClass}>Age Range <FiChevronDown /></div>
        <div className={chipClass}>Product Category <FiChevronDown /></div>
        <div className={chipClass}>Tags <FiChevronDown /></div>
        <div className={chipClass}>Payment Method <FiChevronDown /></div>
        <div className={chipClass}>Date <FiChevronDown /></div>
      </div>

      <div className="ml-auto">
        <select className="rounded border border-gray-200 py-2 px-3 bg-white text-sm">
          <option>Sort by: Customer Name (A-Z)</option>
          <option>Sort by: Date (Newest)</option>
        </select>
      </div>
    </div>
  );
}
