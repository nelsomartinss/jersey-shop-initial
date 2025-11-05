import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // importação do componente
import './index.css' // estilos globais

// é isso que renderiza tudo no navegador:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* componente react, todos começam com letra maiuscula */}
  </React.StrictMode>,
)
