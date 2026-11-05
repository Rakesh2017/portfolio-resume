import React from "react";
import image from "../images/accolade.png";

const accolade = () => {
  return (
    <div className="emc-con featured-work-subject-con">
      <div className="image-con">
        <img style={{borderRadius: 20, width: "90%"}} src={image} alt="app-screenshot" />
      </div>
      <div className="info-con">
        <div className='title-con'>
          <h4 className="title-h4">Accolade Inc</h4>
          {/* <p className='date-p'>May 2021 - Current</p> */}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
          <a
            className="website-link-a link-android"
            href="https://play.google.com/store/apps/details?id=com.accolade.mobile.prod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Android Play Store
          </a>
          <a
            className="website-link-a link-ios"
            href="https://apps.apple.com/us/app/accolade-inc/id1203452254"
            target="_blank"
            rel="noopener noreferrer"
          >
            iOS App Store
          </a>
        </div>
        {/* <div className="coming-soon-div">
        <button className="demo-btn">
          <a
            className="link-demo"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Demo&nbsp;&nbsp;
          </a>
          <i className="fas fa-video icon-demo"></i>
        </button>
        </div> */}
        <p className="info-p">
          Personalized Healthcare focused on integrated access to benefits and clinical guidance right from your phone. <br />
          <br />
          <ul>
            <li>Software Developer specializing in Android native development (Kotlin) and Flutter-based MFEs.</li>
            <li>Worked closely with cross-functional teams to gather requirements, clarify specifications, and align on technical implementation.</li>
            <li>Contributed to the development of a large-scale healthcare management and enrolment application built using Android native and Flutter technologies.</li>
            <li>Delivered features and improvements for an app used by over one million users and hundreds of client companies.</li>
            <li>Collaborated across product, design, backend, and QA teams to ensure smooth integration and timely delivery of mobile solutions.</li>
          </ul>
        </p>
        <nav className="tags-nav">
          <ul>
            <li>Kotlin</li>
            <li>Jetpack Compose</li>
            <li>MVVM-manager</li>
            <li>Flutter MFEs</li>
            <li>Retrofit</li>
            <li>Moshi</li>
            <li>RxKotlin</li>
            <li>Room</li>
            <li>Analytics+Crashlytics</li>
            <li>Dagger Hilt</li>
            <li>Reactive Programming</li>
            <li>Coroutines & Flows</li>
            <li>Health Connect</li>
            <li>Server controlled UI/ SDUI</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default accolade;
