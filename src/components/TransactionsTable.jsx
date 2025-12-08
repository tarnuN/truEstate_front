import React from "react";

/**
 * TransactionsTable
 * - wrapper uses fixed height and overflow-y so table body scrolls internally
 * - table uses a large min-width so right-side columns are visible (horizontal scroll if needed)
 */

export default function TransactionsTable({ rows = [], loading = false }) {
  if (loading) return <div className="py-8 text-center">Loading...</div>;
  if (!rows.length) return <div className="py-8 text-center text-gray-500">No transactions</div>;

  return (
    <div className="border border-gray-100 rounded-md overflow-hidden">
      {/* fixed table header + scrollable body */}
      <div className="overflow-x-auto">
        <div className="max-h-[60vh] overflow-y-auto">
          <table className="min-w-[1400px] w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Transaction ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Customer ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Customer name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Phone Number</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Gender</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Age</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Product Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Quantity</th>

                {/* right side columns */}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Total Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Customer region</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Product ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Employee name</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {rows.map((r, idx) => (
                <tr key={r.id ?? idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">{r.transactionId}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.customerId}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.customerName}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.gender}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.age}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.quantity}</td>

                  {/* right side columns */}
                  <td className="px-4 py-3 text-sm text-gray-700">₹ {r.totalAmount ?? "1,000"}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.region ?? "South"}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.productId ?? "PROD0001"}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{r.employeeName ?? "Harsh Agrawal"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
