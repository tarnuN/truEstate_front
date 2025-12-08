import React from "react";

export default function Pagination({ page = 1, totalPages = 1, setPage }) {
  const pages = [];
  const maxButtons = 7;
  const half = Math.floor(maxButtons / 2);
  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, start + maxButtons - 1);
  if (end - start < maxButtons - 1) start = Math.max(1, end - maxButtons + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex items-center justify-center gap-2 py-3">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        className="px-3 py-1 border rounded bg-white hover:bg-gray-50"
        disabled={page === 1}
      >
        Prev
      </button>

      {start > 1 && (
        <>
          <button onClick={() => setPage(1)} className="px-3 py-1 border rounded bg-white">1</button>
          {start > 2 && <div className="px-2">…</div>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 border rounded ${p === page ? "bg-gray-800 text-white" : "bg-white hover:bg-gray-50"}`}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <div className="px-2">…</div>}
          <button onClick={() => setPage(totalPages)} className="px-3 py-1 border rounded bg-white">
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        className="px-3 py-1 border rounded bg-white hover:bg-gray-50"
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
