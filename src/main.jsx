import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SDKProvider } from '@telegram-apps/sdk-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <SDKProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </SDKProvider>
)
