import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GamesProvider } from './context/gamesContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <GamesProvider >
         <App />
      </GamesProvider>
   </React.StrictMode>
)
