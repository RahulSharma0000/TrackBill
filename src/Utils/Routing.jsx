import React from 'react'
import AddReceipts from '../pages/AddReceipts'
import Nav from '../components/Nav'
import DashBoard from '../pages/DashBoard'
import Receipt from '../pages/Receipt'
import{Route ,Routes} from "react-router-dom"



const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<DashBoard/>}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/add" element={<AddReceipts/>}></Route>
        <Route path="/receipt" element={<Receipt/>}></Route>
      </Routes>

  )
}

export default Routing


