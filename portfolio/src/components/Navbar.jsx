import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__links" aria-label="Primary">
        <a className="navbtn" href="/">Home</a>
        <a className="navbtn" href="/projects.html">Projects</a>
        <a className="navbtn" href="/about.html">About</a>
        <a className="navbtn" href="/contact.html">Contact</a>
      </nav>
    </header>
  );
}
