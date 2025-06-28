import React from 'react'
import AddReciepts from './pages/AddReceipts'
import Nav from './components/Nav'
import DashBoard from './pages/Dashboard'

const App = () => {
  return (
    <div className=' px-20'>
      <Nav/>
      <DashBoard/>
      {/* <DragDropImage/> */}
      <AddReciepts/>

    </div>
  )
}

export default App