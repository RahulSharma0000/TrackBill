import React from 'react'
import AddReceipts from './Pages/AddReceipts'
import Nav from './Component/Nav'
import DashBoard from './Pages/DashBoard'
import Receipt from './Pages/Receipt'
import{Route ,Routes} from "react-router-dom"

import Routing from './Utils/Routing'
const App = () => {
  return (
    <div className=' px-20 py-8'>
      <Nav/> 
      <Routing/>
    </div>
  )
}

export default App