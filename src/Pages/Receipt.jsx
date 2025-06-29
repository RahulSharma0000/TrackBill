
import React from 'react'
const expenses = [
  {
    iconClass: "ri-shopping-cart-2-line",
    category: "Groceries",
    date: "2025-06-25",
    amount:85.50,
  },
  {
    iconClass: "ri-car-line",
    category: "Transportation",
    date: "2025-06-24",
    amount:45.00,
  },
  {
    iconClass: "ri-movie-2-line",
    category: "Entertainment",
    date: "2025-06-23",
    amount:120.00,
  },
  {
    iconClass: "ri-flashlight-line",
    category: "Utilities",
    date: "2025-06-22",
    amount:95.75,
  },
  {
    iconClass: "ri-hospital-line",
    category: "Healthcare",
    date: "2025-06-21",
    amount:250.00,
  },
  {
    iconClass: "ri-shopping-bag-line",
    category: "Shopping",
    date: "2025-06-20",
    amount:175.25,
  }
];
const Receipt = () => {
  return (
    <div >
      <h2 className='flex items-center justify-center text-3xl font-bold text-blue-500 my-5'>Recent Receipts </h2>
      {expenses.map((expense, index) => (
  <div
    key={index}
    className="flex items-center justify-between gap-4 p-4 shadow rounded bg-white mb-2"
  >
    {/* Icon + Info */}
    <div className="flex items-center gap-4">
      <i className={`${expense.iconClass} text-3xl text-blue-500 bg-blue-100 p-2 rounded-full`}></i>
      <div>
        <div className="font-semibold">{expense.category}</div>
        <div className="text-sm text-gray-500">{expense.date}</div>
      </div>
    </div>

    {/* Amount */}
    <div className="font-bold">${expense.amount.toFixed(2)}</div>

    {/* Buttons */}
    <div className="flex gap-2">
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




