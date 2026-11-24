// Used only at build time by scripts/prerender.mjs to turn the app into static HTML.
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
