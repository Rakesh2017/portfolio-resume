import React, { useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  return <header className="site-nav">
    <div className="nav-inner">
      <a href="#home" className="wordmark" aria-label="Rakesh home">rakesh<span>.</span></a>
      <nav id="site-links" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
        <a href="#work" onClick={() => setOpen(false)}>Work</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#work-experience" onClick={() => setOpen(false)}>Experience</a>
        <a href="#hire-me" onClick={() => setOpen(false)}>Contact <span aria-hidden="true">↗</span></a>
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <button className="menu-toggle" aria-expanded={open} aria-controls="site-links" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
    </div>
  </header>;
}
