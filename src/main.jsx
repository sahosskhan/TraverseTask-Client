import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Auth/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <HelmetProvider>
       <QueryClientProvider client={queryClient}>

 <RouterProvider router={router} />
 </QueryClientProvider>
 </HelmetProvider>
 </AuthProvider>
  </React.StrictMode>,
)