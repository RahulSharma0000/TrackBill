import React from "react";
import DragDropImage from "../components/DragDropImage";

const AddReciepts = () => {
  return (
    <div className="flex items-center justify-center h-screen w-auto ">
      <form
        action="submit"
        className="flex flex-col  justify-center  my-10 p-5 shadow-md bg-[#fff] rounded"
      >
        <h2 className="text-3xl text-center font-bold text-blue-500 m-4">
          Add Reciepts
        </h2>

        <h3 className="text-lg text-bold mb-1">Title</h3>
        <input
          className="border-1 border-black rounded p-1 text-sm mb-2"
          type="text"
          placeholder="Enter the Receipt Title"
        />
        <h3 className="text-lg text-bold mb-1">Amount</h3>
        <input
          className="border-1 border-black rounded p-1 text-sm mb-2"
          type="number"
          placeholder="₹"
        />
        <h3 className="text-lg text-bold mb-1">Category</h3>
        <select
          className="border-1 rounded p-1 text-sm font-semibold mb-2"
          name="category"
          id="category"
        >
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
        <h3 className="text-lg text-bold mb-1">Date</h3>
        <input
          className="border-1 rounded p-1 text-sm mb-2"
          type="date"
        />
        <h3 className="text-xl text-bold mb-1">Note</h3>
        <textarea
          className="border-1 border-black rounded p-1 text-sm font-semibold mb-3"
          name="note"
          id="note"
          cols="10"
          rows="5"
          placeholder="Enter any additional notes"
        ></textarea>
        <DragDropImage />
        <button className="bg-blue-500 p-2 rounded-full mt-1 text-xl font-bold text-white
        ">Add</button>
      </form>
    </div>
  );
};

export default AddReciepts;
