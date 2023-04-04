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

  console.log(buttonState);

  const [formVisibility, setFormVisibility] = useState({
    profileFormVisible: false,
    educationFormVisible: false,
    experienceFormVisible: false,
    skillsFormVisible: false,
    personalFormVisible: false,
  });

  /*   console.log(formVisibility); */

  function editButtonState(boolValue, buttonType) {
    setButtonState((prevState) => {
      return { ...prevState, [buttonType]: boolValue };
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
            modifyState={(boolValue, buttonType) =>
              editButtonState(boolValue, buttonType)
            }
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
          />
          <Skills
            buttonState={buttonState}
            modifyState={(boolValue, buttonType) =>
              editButtonState(boolValue, buttonType)
            }
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
          />
        </section>

        <section className="right-section">
          <Profile
            buttonState={buttonState}
            modifyState={(button, buttonType) =>
              editButtonState(button, buttonType)
            }
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
          />
          <Education
            buttonState={buttonState}
            modifyState={(button, buttonType) =>
              editButtonState(button, buttonType)
            }
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
          />
          <Experience
            buttonState={buttonState}
            modifyState={(button, buttonType) =>
              editButtonState(button, buttonType)
            }
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
          />
        </section>
      </main>
    </div>
  );
}
