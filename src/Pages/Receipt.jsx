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
    transport: "🚗",
    utilities: "💡",
    entertainment: "🎮",
    other: "🧾"
  };

  return (
<<<<<<< HEAD
    <div >
      <h2 className='flex items-center justify-center text-3xl font-bold text-blue-500 my-5'>Recent Receipts </h2>
      {expenses.map((expense, index) => (
  <div
    key={index}
    className="flex items-center justify-between gap-4 p-4 shadow rounded bg-white mb-2"
  >
    {/* Icon + Info */}
    <div className="flex items-center gap-4 w-1/5">
      <i className={`${expense.iconClass} text-3xl text-blue-500 bg-blue-100 p-2 rounded-full`}></i>
      <div>
        <div className="font-semibold">{expense.category}</div>
        <div className="text-sm text-gray-500">{expense.date}</div>
      </div>
=======
    <div>
      <h2 className="flex items-center justify-center text-3xl font-bold text-blue-500 my-5">
        Recent Receipts
      </h2>

      {receipts.length === 0 ? (
        <p className="text-center text-gray-500">No receipts found.</p>
      ) : (
        receipts.map((receipt) => (
          <div
            key={receipt.id}
            className="flex items-center justify-between gap-4 p-4 shadow rounded bg-white mx-6 my-3"
          >
            {/* Icon + Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-2xl flex items-center justify-center rounded-full">
                {categoryIcons[receipt.category] || "📄"}
              </div>
              <div>
                <div className="font-semibold text-lg">{receipt.title}</div>
                <div className="text-sm text-gray-500">
                  {receipt.category} • {receipt.date}
                </div>
              </div>
            </div>

            {/* Amount */}
            <div className="font-bold text-green-600 text-lg">₹ {receipt.amount}</div>

            {/* Buttons */}
            <div className="flex gap-2">
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
        ))
      )}
>>>>>>> dbf9423f1f30011b17569b08b43cf588f3ad6edf
    </div>
  );
};

<<<<<<< HEAD
    {/* Amount */}
    <div className="font-bold w-1/10">${expense.amount.toFixed(2)}</div>

    {/* Buttons */}
    <div className="flex gap-2 ">
      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
        View
      </button>
      <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
        Delete
      </button>
    </div>
  </div>
))}

    </div>
  )
}

export default Receipt




=======
export default Receipt;
>>>>>>> dbf9423f1f30011b17569b08b43cf588f3ad6edf
