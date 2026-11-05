import React, { useState } from "react";
import servers from "../images/servers.svg";
import smartphone from "../images/smartphone.svg";
import web from "../images/web.svg";

const AreaOfExperience = () => {

  return (
    <div className="welcome-con">
      {/* experience */}
      <div id="experience" className="expertise-con">
        <div>
          <p className="eyebrow">05 / WHAT I DO</p><h2>Mobile first. Detail always.</h2>
        </div>

        <div className="expertise-main-con">
          {/* 1 */}
          <div className="expertise-two-con info-con">
            <div className="image-con">
              <img src={smartphone} alt="icon 2" />
            </div>
            <h5 className="title-h5">Mobile Applications<br></br><span className="muted">(Android Native, Flutter & React Native)</span></h5>
            <p className="info-p" style={{fontSize:'0.9rem'}}>
            Over 6+ years of experience building high-performing mobile apps using Native Android and React Native. I possess a strong understanding of Android architecture patterns (MVVM-UseCases, MVC, MVP) and leverage both Kotlin and Java for development. 
            In React Native, I'm proficient in component-based architecture, Redux-Saga for state management, and integrating third-party libraries to enhance functionality.
            <br></br>
            <br></br>
            I'm passionate about staying up-to-date and have experience working with the latest technologies including Jetpack Compose, Kotlin Coroutines, RxJava, LiveData, Flows, Retrofit/OkHTTP, Dagger Hilt, Room, Material Design, Moshi/Gson, Analytics, Firebase Push Notifications, 
            {/* Committedly engaged in a variety of <a href="#work" style={{ textDecoration: 'none', color:"#54b689" }}>projects</a> that harnessed latest tech-stack including Jetpack Compose, Kotlin Coroutines, RxKotlin, LiveData, Flows, Retrofit, Hilt, and Room. */}
            </p>
          </div>
          {/* 2 */}
          <div className="expertise-one-con info-con">
            <div className="image-con">
              <img src={web} alt="icon 1" />
            </div>
            <h5 className="title-h5">Web Applications<br></br><span className="muted">(ReactJS)</span></h5>
            <p className="info-p" style={{fontSize:'0.9rem'}}>
            Over a year of experience has equipped me with the skills to build dynamic and user-friendly web applications using React.  I've developed a strong understanding of the React library through extensive use in real-world project.  My passion for building intuitive interfaces and user experiences fuels my dedication to mastering React's capabilities.

            In the past year, I've actively contributed to the success of two live web applications built with React. These projects leveraged Node.js for robust backend development, ensuring seamless communication between the frontend and the server. 
            </p>
          </div>

        </div>
      </div>
      {/* experience [ENDS] */}
    </div>
  );
};

export default AreaOfExperience;