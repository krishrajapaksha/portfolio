/**
 * @copyright Krishan Rajapaksha
 * @license Apache-2.0
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Css link
 */
import './index.css';

/**
 * Components
 */
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
