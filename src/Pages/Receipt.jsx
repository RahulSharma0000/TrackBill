// src/pages/Receipt.jsx

import React, { useEffect, useState } from "react";
import { getReceipts, deleteReceipt } from "../utils/LocalStorage";
import {
  Utensils,        // 🍕 for food
  Bus,             // 🚗 for transport
  Lightbulb,       // 💡 for utilities
  Gamepad2,        // 🎮 for entertainment
  FileText   ,      // 🧾 for other
  Eye, Trash2 
} from "lucide-react";


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
  food: <Utensils className="w-6 h-6 text-blue-500" />,
  transport: <Bus className="w-6 h-6 text-blue-500" />,
  utilities: <Lightbulb className="w-6 h-6 text-blue-500" />,
  entertainment: <Gamepad2 className="w-6 h-6 text-blue-500" />,
  other: <FileText className="w-6 h-6 text-blue-500" />
};


  return (
    <div>
      <h2 className="flex items-center justify-center text-3xl font-bold text-blue-500 my-5">
        Recent Receipts
      </h2>

      {receipts.length === 0 ? (
        <p className="px-4 sm:px-10 max-w-5xl mx-auto overflow-y-auto max-h-[80vh]">No receipts found.</p>
      ) : (
        receipts.map((receipt) => (
<div
  key={receipt.id}
  className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 shadow rounded-lg bg-white mb-4 mx-4 sm:mx-10 transition-transform hover:scale-[1.01] hover:shadow-md"
>
  {/* 📦 Icon + Info */}
  <div className="flex items-start gap-4 flex-1">
    <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full shrink-0">
      {categoryIcons[receipt.category] || (
        <FileText className="w-6 h-6 text-blue-500" />
      )}
    </div>

    <div className="flex flex-col gap-1">
      <span className="font-bold text-2xl text-gray-800 pb-2">{receipt.title}</span>
      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded w-fit pb-2">
        {receipt.category}
      </span>
      <span className="text-sm text-gray-500">{receipt.date}</span>
    </div>
  </div>

  {/* 💰 Amount — top-right on mobile */}
  <div className="absolute right-4 top-4 sm:static sm:text-right">
    <p className="text-green-600 font-bold text-lg whitespace-nowrap">
      ₹ {receipt.amount.toLocaleString()}
    </p>
  </div>

  {/* 🔘 Buttons */}
  <div className="flex justify-between sm:justify-start gap-4 w-full sm:w-auto pt-2 sm:pt-0">
    <button
      onClick={() => openModal(receipt.image)}
      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
      title="View"
    >
      <Eye className="w-5 h-5 text-blue-600" />
    </button>
    <button
      onClick={() => handleDelete(receipt.id)}
      className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
      title="Delete"
    >
      <Trash2 className="w-5 h-5 text-red-600" />
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
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Receipt;
