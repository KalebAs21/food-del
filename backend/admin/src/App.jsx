import Navbar from './components/Navbar/Navbar.jsx'
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import orders from './pages/Orders/orders.jsx'   // ✅ Capital O

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
