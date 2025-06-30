import React, { useState } from "react";
import { addReceipt } from "../utils/LocalStorage";

const AddReceipts = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFile(file);

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

    // Reset form
    setTitle("");
    setAmount("");
    setCategory("food");
    setDate("");
    setNote("");
    setImage("https://via.placeholder.com/150");
    setFile(null);
    setIsSubmitted(true);
setTimeout(() => setIsSubmitted(false), 2500); // Back to normal after 2.5s
  };

return (
  <div className="w-full min-h-[80vh] px-4 sm:px-10 py-8 bg-gray-50">
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl max-w-xl mx-auto p-6 sm:p-10 flex flex-col gap-4"
    >
      <h2 className="text-2xl text-center font-bold text-blue-600 mb-4">
        Add Receipt
      </h2>

      <input autoFocus
        type="text"
        placeholder="Title"
        className="border border-gray-300 rounded-md px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"


        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        className="border border-gray-300 rounded-md px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"

        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select
        className="border border-gray-300 rounded-md px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"

        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>

     <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  required
  className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
/>


      <textarea
        placeholder="Note"
        className="border border-gray-300 rounded-md px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"

        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows="3"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="border border-gray-300 rounded-md px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"

      />
<button
  type="submit"
  disabled={!title || !amount || !date}
  className={`${
    isSubmitted ? "bg-green-800" : "bg-blue-600 hover:bg-blue-700"
  } text-white font-bold py-2 rounded mt-2 transition duration-300 ${
    (!title || !amount || !date) ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {isSubmitted ? "Added ✅" : "Add Receipt"}
</button>

    </form>
  </div>
);

};

export default AddReceipts;
