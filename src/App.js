import React from "react";
import { useState, useEffect } from "react";
import PersonalInfo from "./components/Personal_Info";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import picture from "./assets/images/pexels-headshot.jpg";

export default function App() {
  const [imageSrc, setImageSrc] = useState(picture);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
  };

  const [pictureInputState, setPictureInputState] = useState(false);

  const [buttonState, setButtonState] = useState({
    editPersonalBtn: false,
    addSkillsBtn: false,
    editProfileBtn: false,
    addEducationBtn: false,
    addExperienceBtn: false,
  });

  const [welcomeModal, setWelcomeModal] = useState(true);

  const handleModalCloseClick = () => {
    setWelcomeModal(false);
  };

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

  console.log(pictureInputState);

  return (
    <div className="App">
      <main>
        {welcomeModal && (
          <div className="welcome-modal">
            <div className="modal-content">
              <hr></hr>
              <h3>Instructions</h3>
              <hr></hr>
              <ol>
                <li>
                  Hover over the areas of the resume to find Edit and Add
                  buttons
                </li>
                <li>
                  Edit your information in the form fields and submit your edits
                </li>
                <li>
                  Add your Education and Experience or <u>double click</u> on
                  entries to remove them
                </li>
                <li>
                  Once you are done editing, use CTRL + P (CMND + P on a Mac) to
                  print your resume as pdf
                </li>
              </ol>
              <hr className="hr-half"></hr>
              <button id="close-modal-btn" onClick={handleModalCloseClick}>
                GET STARTED
              </button>
            </div>
          </div>
        )}

        <section className="left-section">
          <div className="cv-title">CV Project</div>
          <div className="picture-section">
            {pictureInputState && (
              <input
                type="file"
                className="picture-input"
                onChange={handleImageUpload}
                onMouseEnter={() => {
                  setPictureInputState(true);
                }}
                onMouseLeave={() => {
                  setPictureInputState(false);
                }}
              />
            )}
            {imageSrc && (
              <img
                className="picture"
                src={imageSrc}
                alt="Uploaded Image"
                onMouseEnter={() => {
                  setPictureInputState(true);
                }}
                onMouseLeave={() => {
                  setPictureInputState(false);
                }}
              />
            )}
          </div>

          {/*           <img
            src={picture}
            className="picture"
            alt="Picture of the applicant"
          ></img> */}
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
