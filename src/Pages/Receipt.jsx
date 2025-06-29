// src/pages/Receipt.jsx

import React, { useEffect, useState } from "react";
import { getReceipts, deleteReceipt } from "../utils/LocalStorage";

const Receipt = () => {
  const [receipts, setReceipts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setReceipts(getReceipts());
  }, []);

  const handleDelete = (id) => {
    deleteReceipt(id);
    setReceipts(getReceipts());
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const categoryIcons = {
    food: "🍕",
    transport: "🚗",
    utilities: "💡",
    entertainment: "🎮",
    other: "🧾"
  };

  return (
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
              <button
                onClick={() => openModal(receipt.image)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
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

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md relative w-[90%] max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-600"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Receipt"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Receipt;
