import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/index'
import "@fontsource-variable/inter";
import "@fontsource-variable/inconsolata";
import "./styles/global.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
