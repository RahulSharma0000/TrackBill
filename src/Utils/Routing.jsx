import React from 'react'
import AddReceipts from '../Pages/AddReceipts'
import Nav from '../Component/Nav'
import DashBoard from '../Pages/DashBoard'
import Receipt from '../Pages/Receipt'
import{Route ,Routes} from "react-router-dom"



const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<><DashBoard/> <Receipt/></>}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/add" element={<AddReceipts/>}></Route>
        <Route path="/receipt" element={<Receipt/>}></Route>
      </Routes>

  )
}

export default Routing


