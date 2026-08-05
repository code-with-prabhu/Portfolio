import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

const App = () => {
  return (
    <>
    <Navbar />
    <FullScreenNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/skills' element={<Skills/>} />
    </Routes>
    </>
  )
}

export default App
