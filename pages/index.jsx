import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          MeuSite
        </Link>

        {/* Menu para mle */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>

        {/* Itens do menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}></ul>
      </div>
    </nav>
  );
}
