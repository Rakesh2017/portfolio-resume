import React from "react";

const Transcarent = () => (
  <article id="transcarent" className="transcarent-con featured-work-subject-con" aria-labelledby="transcarent-title">
    <div className="image-con transcarent-visual">
      <div className="transcarent-summary">
        <span className="eyebrow">ENTERPRISE HEALTHCARE</span>
        <div className="transcarent-symbol" aria-hidden="true"><i className="fas fa-heartbeat" /></div>
        <p className="transcarent-name">Transcarent</p>
        <p>Connecting people to better care.</p>
        <div className="transcarent-scale"><strong>20M+</strong><span>members across the combined<br />Transcarent–Accolade organization</span></div>
        <span className="transcarent-stack">Flutter · Dart · GetX</span>
      </div>
    </div>
    <div className="info-con">
      <div className="title-con"><h4 id="transcarent-title" className="title-h4">Transcarent</h4></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
        <a className="website-link-a link-ios" href="https://apps.apple.com/us/app/transcarent/id1563769390" target="_blank" rel="noopener noreferrer">iOS App Store ↗</a>
        <a className="website-link-a link-android" href="https://play.google.com/store/apps/details?id=com.transcarent.prod&amp;hl=en_CA" target="_blank" rel="noopener noreferrer">Android Play Store ↗</a>
      </div>
      <div className="info-p">
        <p>An enterprise healthcare platform connecting members with care, benefits, and personalized guidance through a single mobile experience. Its B2B model supports employers and health plans in making healthcare easier to navigate.</p>
        <ul>
          <li>Contributed to a mobile application built entirely with Flutter and Dart, using GetX for state management.</li>
          <li>The product brings together virtual care, personal health guides, provider discovery, and access to health benefits.</li>
          <li>Transcarent’s AI-powered WayFinding experience helps members understand their coverage and navigate care options with personalized guidance.</li>
          <li>Part of the combined Transcarent–Accolade organization, reaching more than 20 million members through employer and health plan relationships.</li>
        </ul>
      </div>
      <nav className="tags-nav" aria-label="Transcarent technologies and product focus"><ul>
        <li>Flutter</li><li>Dart</li><li>GetX</li><li>State Management</li><li>Enterprise Healthcare</li><li>B2B</li><li>AI-Powered Care Navigation</li>
      </ul></nav>
      <a className="transcarent-context" href="https://transcarent.com/blog/leading-the-way-a-new-era-of-innovation-in-health-and-care" target="_blank" rel="noopener noreferrer">About the combined platform ↗</a>
    </div>
  </article>
);

export default Transcarent;
