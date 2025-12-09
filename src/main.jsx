import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig.js'

import AppProvider from './hooks/index.jsx'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard.js' 
import { Router } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
