import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// main.jsx o index.css

import './index.css'
import 'prismjs/themes/prism-tomorrow.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
