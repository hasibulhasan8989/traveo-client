import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Routes/Router'
import { AuthProviders } from './Providers/AuthProviders'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
         <Router></Router>
    </AuthProviders>
     
  </StrictMode>,
)
