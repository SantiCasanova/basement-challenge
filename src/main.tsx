import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../styles/index.scss'
import CartProvider from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <App />
  </CartProvider>
)
