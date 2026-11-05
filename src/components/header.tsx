import React from "react";
import portrait from "../images/profile-pic.jpg";

export default function Header() {
  return <section id="home" className="hero">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> MOBILE ENGINEER · CREATIVE PROBLEM SOLVER</p>
      <h1>Thoughtful code.<br /> <span>Meaningful</span><br /> mobile experiences.</h1>
      <p className="hero-intro">Hi, I’m Rakesh. A senior mobile application developer turning complex challenges into intuitive Android, Flutter, and React Native apps.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
        <a className="button button-secondary" href="https://drive.google.com/file/d/1Hh2UFWo6I2GBC-yRJn9_Quzvmil8JBs3/view?usp=sharing" target="_blank" rel="noopener noreferrer">View résumé <span aria-hidden="true">↗</span></a>
      </div>
      <div className="social-links">
        <a href="https://github.com/Rakesh2017" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="https://linkedin.com/in/rakesh-aa3135117" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="https://stackoverflow.com/users/7872344/rakesh-kumar" target="_blank" rel="noopener noreferrer">Stack Overflow ↗</a>
      </div>
    </div>
    <div className="hero-visual">
      <div className="portrait-frame"><img src={portrait} alt="Rakesh" /></div>
      <div className="craft-note"><span aria-hidden="true">✳</span><div>Built with intention.<small>From the first idea to the final interaction.</small></div></div>
    </div>
    <div className="hero-bottom"><span>ANDROID NATIVE</span><span>FLUTTER</span><span>REACT NATIVE</span><a href="#about">Get to know me ↓</a></div>
  </section>;
}
