import React from 'react'
import AddReceipts from '../pages/AddReceipts'
import Nav from '../components/Nav'
import DashBoard from '../pages/Dashboard'
import Receipt from '../pages/Receipt'
import{Route ,Routes,Navigate} from "react-router-dom"



const Routing = () => {
  return (
    
      <Routes >
        <Route path="/" element={<Navigate to="/dashboard" replace />}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/add" element={<AddReceipts/>}></Route>
        <Route path="/receipt" element={<Receipt/>}></Route>
      </Routes>

  )
}

export default Routing


