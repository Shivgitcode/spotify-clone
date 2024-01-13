import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppProviderData from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProviderData>
    <App />
  </AppProviderData>,
)
