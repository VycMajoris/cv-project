import React from "react";
import PersonalInfo from "./components/Personal_Info";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import picture from "./assets/images/pexels-headshot.jpg";

export default function App() {
  return (
    <div className="App">
      <main>
        <section className="left-section">
          <div className="cv-title">CV Project</div>
          <img
            src={picture}
            className="picture"
            alt="Picture of the applicant"
          ></img>
          <PersonalInfo />
          <Skills />
        </section>

        <section className="right-section">
          <Profile />
          <Education />
          <Experience />
        </section>
      </main>
    </div>
  );
}
