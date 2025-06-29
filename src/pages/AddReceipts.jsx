import React, { useState } from "react";
import { addReceipt } from "../utils/LocalStorage";

const AddReceipts = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [image, setImage] = useState("https://via.placeholder.com/150");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReceipt = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
      note,
      image
    };

    addReceipt(newReceipt);

    // Clear form
    setTitle("");
    setAmount("");
    setCategory("food");
    setDate("");
    setNote("");
    setImage("https://via.placeholder.com/150");
    alert("Receipt added!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-5 shadow-md bg-white rounded w-[90%] max-w-md"
      >
        <h2 className="text-2xl text-center font-bold text-blue-600 mb-4">
          Add Receipt
        </h2>

        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <textarea
          placeholder="Note"
          className="border p-2 rounded"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows="3"
        />

        {/* 📷 File Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 rounded"
        />

        {/* 🖼️ Preview */}
        {image && (
          <img
            src={image}
            alt="Preview"
            className="mt-2 h-32 w-full object-contain rounded border"
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 rounded mt-4"
        >
          Add Receipt
        </button>
      </form>
    </div>
  );
};

export default AddReceipts;
