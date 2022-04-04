import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Reviews from './components/Reviews/Reviews'
import About from './components/About/About'
import Dashboard from './components/Dashboard/Dashboard'
import Blogs from './components/Blogs/Blogs'
const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>



      </Routes>
    </div>
  )
}

export default App
