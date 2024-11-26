import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppCounter from "./AppCounter.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCounter />
  </StrictMode>,
)
