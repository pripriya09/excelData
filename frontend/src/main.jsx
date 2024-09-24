import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import FullPage from './FullPage.jsx'

// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   {/* <FullPage/> */}
  </StrictMode>,
)
