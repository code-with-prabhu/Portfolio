import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import PageNotFound from './components/common/PageNotFound'
import Contact from './pages/Contact'
import Loader from './components/common/Loader'

const App = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if the document is already completely loaded (happens on fast refreshes/cache)
    if (document.readyState === 'complete') {
      setIsAppLoaded(true);
    } else {
      // Wait for all assets (images, fonts, etc.) to fully load
      const handleLoad = () => setIsAppLoaded(true);
      window.addEventListener('load', handleLoad);
      
      // Cleanup listener
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {/* The Loader sits on top. It removes itself from the DOM when finished. */}
      {showLoader && (
        <Loader 
          isLoaded={isAppLoaded} 
          onComplete={() => setShowLoader(false)} 
        />
      )}

      {/* Your actual app components load perfectly in the background */}
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