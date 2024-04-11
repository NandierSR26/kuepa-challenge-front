import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthProvider } from './context/auth/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { SocketProvider } from './context/sockets/socketProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <AuthProvider>
        <SocketProvider>
          <App />
          <Toaster />
        </SocketProvider>
      </AuthProvider>
    </BrowserRouter>
)
