import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__links" aria-label="Primary">
        {/* Home (top of page) */}
        <Link className="navbtn" to="/">
          Home
        </Link>

        {/* Scroll sections on the home page */}
        <a className="navbtn" href="/#projects">
          Projects
        </a>
        <a className="navbtn" href="/#stacks">
          Stacks
        </a>
        <a className="navbtn" href="/#about">
          About
        </a>
        <a className="navbtn" href="/#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
