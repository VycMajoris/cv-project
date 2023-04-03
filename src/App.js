import React from "react";
import { useState } from "react";
import PersonalInfo from "./components/Personal_Info";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import picture from "./assets/images/pexels-headshot.jpg";

export default function App() {
  const [buttonState, setButtonState] = useState({
    editPersonalBtn: false,
    addSkillsBtn: false,
    editProfileBtn: false,
    addEducationBtn: false,
    addExperienceBtn: false,
  });

  function editButtonState(buttonType) {
    setButtonState((prevState) => {
      return { ...prevState, [buttonType]: !prevState[buttonType] };
    });
  }

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
          <PersonalInfo
            buttonState={buttonState}
            modifyState={(button) => editButtonState(button)}
          />
          <Skills
            buttonState={buttonState}
            modifyState={(button) => editButtonState(button)}
          />
        </section>

        <section className="right-section">
          <Profile
            buttonState={buttonState}
            modifyState={(button) => editButtonState(button)}
          />
          <Education
            buttonState={buttonState}
            modifyState={(button) => editButtonState(button)}
          />
          <Experience
            buttonState={buttonState}
            modifyState={(button) => editButtonState(button)}
          />
        </section>
      </main>
    </div>
  );
}
