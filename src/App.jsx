import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import PageNotFound from './components/common/PageNotFound'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <FullScreenNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route element={<PageNotFound />} path="*" />
    </Routes>
    </>
  )
}

export default App
