import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Stair from './components/common/Stair.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavContext from './context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Stair>
        <NavContext>
          <App />
        </NavContext>
      </Stair>
    </StrictMode>
  </BrowserRouter>
)
