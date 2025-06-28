import React from 'react'
import DragDropImage from '../components/DragDropImage'

const AddReciepts = () => {
  return (
  <div className='flex items-center justify-center h-screen border-2 border-red-800'>
   <form action="submit" className='flex flex-col  justify-center border-2 border-blue-300 p-5'>
    
    <h2 className='text-2xl text-center font-bold text-blue-500 m-8'>Add Reciepts</h2>
    
    <h3 className='text-'>Title</h3>
    <input type="text" placeholder='Enter the Receipt Title' />
    <h3>Amount</h3>
    <input type="number" placeholder='Enter the Amount' />
    <h3>Category</h3>
    <select name="category" id="category">
      <option value="food">Food</option>
      <option value="transport">Transport</option>
      <option value="utilities">Utilities</option>
      <option value="entertainment">Entertainment</option>
      <option value="other">Other</option>
    </select>
    <h3>Date</h3>
    <input type="date" />
    <h3>Note</h3>
    <textarea name="note" id="note" cols="30" rows="10" placeholder='Enter any additional notes'></textarea>
   <DragDropImage />
   <button>Add</button>

   </form>
   </div>
  )
}

export default AddReciepts

