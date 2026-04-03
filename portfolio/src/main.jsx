import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

const DELAY_BEFORE_FLASH_MS = 1800;
const FLASH_DURATION_MS = 700;

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

function hidePreloaderWithFlash() {
  const preloader = document.getElementById('preloader')
  if (!preloader) return

  preloader.classList.add('preloader--flash')

  setTimeout(() => {
    preloader.classList.add('preloader--hide')

    document.documentElement.classList.remove('preloader-lock')
    document.body.classList.remove('preloader-lock')

    preloader.addEventListener(
      'transitionend',
      () => {
        if (preloader.parentNode) preloader.parentNode.removeChild(preloader)
      },
      { once: true }
    )
  }, FLASH_DURATION_MS) 
}

window.addEventListener(
  'load',
  () => {
    setTimeout(() => {
      hidePreloaderWithFlash()
    }, DELAY_BEFORE_FLASH_MS)
  },
  { once: true }
)