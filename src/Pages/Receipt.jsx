// src/pages/Receipt.jsx

import React, { useEffect, useState } from "react";
import { getReceipts, deleteReceipt } from "../utils/LocalStorage";

const Receipt = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    setReceipts(getReceipts());
  }, []);

  const handleDelete = (id) => {
    deleteReceipt(id);
    setReceipts(getReceipts());
  };

  const categoryIcons = {
    food: "🍕",
    travel: "🚗",
    utilities: "💡",
    entertainment: "🎮",
    other: "🧾"
  };

  return (
    <div className="px-4 md:px-8 lg:px-20">
      <h2 className="flex items-center justify-center text-3xl font-bold text-blue-500 my-5">
        Recent Receipts
      </h2>

      {receipts.length === 0 ? (
        <p className="text-center text-gray-500">No receipts found.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {receipts.map((receipt) => (
            <div
              key={receipt.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 shadow rounded bg-white w-full"
            >
              {/* Icon + Info */}
              <div className="flex items-center gap-4 w-full md:w-1/3">
                <div className="w-12 h-12 bg-blue-100 text-2xl flex items-center justify-center rounded-full">
                  {categoryIcons[receipt.category] || "📄"}
                </div>
                <div>
                  <div className="font-semibold text-lg break-words">{receipt.title}</div>
                  <div className="text-sm text-gray-500">
                    {receipt.category} • {receipt.date}
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div className="font-bold text-green-600 text-lg w-full md:w-1/3 text-left md:text-center">
                ₹ {receipt.amount}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 w-full md:w-1/3 justify-start md:justify-end">
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
                  View
                </button>
                <button
                  onClick={() => handleDelete(receipt.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Receipt;
