import React, { useState } from 'react';

const platforms = [
  { name: 'Android', icon: 'fab fa-android', stack: 'Kotlin · Jetpack Compose', detail: 'Native interactions, considered from the first tap.' },
  { name: 'Flutter', icon: 'fas fa-layer-group', stack: 'Dart · Flutter', detail: 'One thoughtful experience, across different screens.' },
  { name: 'React Native', icon: 'fab fa-react', stack: 'TypeScript · React Native', detail: 'Familiar patterns. Fluid, responsive interactions.' }
];

export default function MobileStudio() {
  const [selected, setSelected] = useState(0);
  const [completed, setCompleted] = useState(false);
  const platform = platforms[selected];
  return <section className="mobile-studio" aria-labelledby="studio-title">
    <div className="studio-copy">
      <p className="eyebrow">A FEEL FOR THE DETAILS</p>
      <h2>Small screen.<br /><span>Thoughtful interactions.</span></h2>
      <p>Great mobile experiences don’t just look good. They respond, guide, and make every tap feel natural.</p>
      <div className="platform-options" role="group" aria-label="Choose a mobile technology">
        {platforms.map((item, index) => <button key={item.name} aria-pressed={selected === index} onClick={() => { setSelected(index); setCompleted(false); }}>
          <i className={item.icon} aria-hidden="true" /> {item.name}
        </button>)}
      </div>
      <p className="platform-caption" aria-live="polite">{platform.detail}</p>
      <small className="studio-disclaimer">Interactive UI concept · a little web demo of my approach.</small>
    </div>
    <div className={`device-stage platform-${selected}`}>
      <div className="device-orbit" aria-hidden="true" />
      <div className="demo-device" aria-label={`${platform.name} inspired app preview`}>
        <div className="device-hardware" aria-hidden="true"><span>9:41</span><span className="camera-pill" /><span>▮▮▮ ▰</span></div>
        <div className="device-screen" key={platform.name}>
          <div className="demo-app-heading"><span>daylight<span className="app-dot">.</span></span><span className="app-avatar" aria-hidden="true">R</span></div>
          <p className="demo-greeting">A little progress, every day.</p>
          <div className="demo-progress-card">
            <span>TODAY’S FOCUS</span>
            <strong>Make room<br />for good things.</strong>
            <div className="demo-progress-track" role="progressbar" aria-label="Daily tasks completed" aria-valuemin={0} aria-valuemax={3} aria-valuenow={completed ? 3 : 2}><span style={{ transform: `scaleX(${completed ? 1 : 2 / 3})` }} /></div>
            <small>{completed ? '3 of 3 complete. Nicely done.' : '2 of 3 complete. You’re doing great.'}</small>
          </div>
          <div className="demo-task"><span className="task-check" aria-hidden="true">✓</span><span>A moment to recharge<small>Step outside. Take a breath.</small></span></div>
          <button className={`demo-task task-interactive ${completed ? 'task-complete' : ''}`} aria-pressed={completed} onClick={() => setCompleted(!completed)} aria-label={completed ? 'Mark Make something meaningful incomplete' : 'Complete Make something meaningful'}>
            <span className="task-check" aria-hidden="true">{completed ? '✓' : '+'}</span><span>Make something meaningful<small>{completed ? 'That’s a good day.' : 'One small step is all it takes.'}</small></span>
          </button>
          <div className="demo-feedback" role="status">{completed ? '✦ A little win. A lovely feeling.' : '↑ Tap the task. Try the interaction.'}</div>
          <div className="demo-bottom-nav" aria-hidden="true"><span>◉</span><span>▦</span><span>○</span></div>
        </div>
        <div className="home-indicator" aria-hidden="true" />
      </div>
      <div className="device-stack-label"><i className={platform.icon} aria-hidden="true" /><span>{platform.stack}</span></div>
    </div>
  </section>;
}
