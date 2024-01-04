import React from 'react'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMaximize,
  faMinimize,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons'
import App from './App.tsx'

import './index.css'
import './styles/tailwind.css' // Import Tailwind CSS styles

library.add(faMaximize, faMinimize, faPlay, faPause)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
