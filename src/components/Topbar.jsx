import React from "react";
import { FiSearch } from "react-icons/fi";

export default function TopBar({ value, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-xl font-semibold">Sales Management System</h2>
      <div className="flex items-center gap-3 w-1/3">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <FiSearch />
          </span>
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Name, Phone no."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 shadow-sm bg-white"
          />
        </div>
      </div>
    </div>
  );
}
