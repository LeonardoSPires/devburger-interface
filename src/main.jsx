import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks/index.jsx'

import { router } from './routes/index.jsx'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="colored" />
    </AppProvider>
  </React.StrictMode>,
)
