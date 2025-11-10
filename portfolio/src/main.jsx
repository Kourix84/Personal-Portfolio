// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

// --------- CONFIGURE TIMINGS HERE ----------
const DELAY_BEFORE_FLASH_MS = 1800; // keep loader visible this long before the flash
const FLASH_DURATION_MS = 700;      // white-bloom duration before revealing the app
// ------------------------------------------

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Handle the preloader removal with a white flash effect
function hidePreloaderWithFlash() {
  const preloader = document.getElementById('preloader')
  if (!preloader) return

  // Step 1: trigger the white flash animation
  preloader.classList.add('preloader--flash')

  // Step 2: after flash ends, fade out and remove
  setTimeout(() => {
    // fade out overlay
    preloader.classList.add('preloader--hide')

    // unlock scroll
    document.documentElement.classList.remove('preloader-lock')
    document.body.classList.remove('preloader-lock')

    // remove the preloader node after transition completes
    preloader.addEventListener(
      'transitionend',
      () => {
        if (preloader.parentNode) preloader.parentNode.removeChild(preloader)
      },
      { once: true }
    )
  }, FLASH_DURATION_MS) // wait for the flash animation length
}

// Wait for full page load, then delay, then flash + reveal
window.addEventListener(
  'load',
  () => {
    setTimeout(() => {
      hidePreloaderWithFlash()
    }, DELAY_BEFORE_FLASH_MS)
  },
  { once: true }
)

// If you ever want to skip waiting for assets and reveal faster,
// you could call hidePreloaderWithFlash() immediately after render.
// hidePreloaderWithFlash()
