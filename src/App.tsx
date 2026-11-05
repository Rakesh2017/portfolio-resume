import React, {useEffect} from "react";
import "./App.scss";
import SideBar from "../src/components/side-bar";
import Welcome from "../src/components/welcome";
import FeaturedWork from "../src/components/featured-work";
import Footer from "../src/components/footer";
import FullStack from "../src/components/fullStack";
import WorkExperience from "../src/components/work-experience";
import Header from "./components/header";
import AreaOfExperience from "./components/areaExperience";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import MobileStudio from "./components/mobile-studio";
import useReveal from "./hooks/use-reveal";

function App() {
  useReveal();
 
  const firebaseConfig = {
    apiKey: "AIzaSyA1sH3kxCaDIvqQWLRdHB68rRsmElqIjzI",
    authDomain: "portfolio-dcc19.firebaseapp.com",
    databaseURL: "https://portfolio-dcc19.firebaseio.com",
    projectId: "portfolio-dcc19",
    storageBucket: "portfolio-dcc19.appspot.com",
    messagingSenderId: "757199503243",
    appId: "1:757199503243:web:9940527c8dcbb7adb1798e",
    measurementId: "G-GVK28SJHLX"
  };

  useEffect(()=> {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, [])

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SideBar />
      <main id="main-content" tabIndex={-1}>
        <Header />
        <div className="main-con">
          <section id="about"><Welcome /></section>
          <MobileStudio />
          <section aria-label="Selected projects"><FeaturedWork /></section>
          <section aria-label="Career"><WorkExperience /></section>
          <section aria-label="Technologies"><FullStack /></section>
          <section aria-label="Expertise"><AreaOfExperience /></section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
