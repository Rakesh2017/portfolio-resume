import React, { useState } from "react";

export default function Footer() {
  const [showPhone, setShowPhone] = useState(false);
  return <footer id="hire-me" className="footer-con">
    <div className="footer-inner">
      <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
      <h2>Let’s make<br /><span>something great.</span></h2>
      <a className="contact-email" href="mailto:rakesh22717@gmail.com">rakesh22717@gmail.com <span aria-hidden="true">↗</span></a>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/rakesh07/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/Rakesh2017" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="https://read.cv/rakesh7" target="_blank" rel="noopener noreferrer">View CV ↗</a>
        {showPhone ? <a href="tel:+16047730344">+1 (604) 773-0344</a> : <button onClick={() => setShowPhone(true)}>Reveal phone number ↗</button>}
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Rakesh. Made with care.</span><a href="#home">Back to top ↑</a></div>
    </div>
  </footer>;
}
