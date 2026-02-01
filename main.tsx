import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SalonLP from './page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SalonLP />
  </StrictMode>,
)
