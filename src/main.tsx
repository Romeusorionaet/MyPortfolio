import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import {Gear} from './pages/Gear'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Gear />
  </React.StrictMode>,
)