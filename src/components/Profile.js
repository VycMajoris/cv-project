import React, { useState } from "react";
import EditProfileForm from "../utils/Edit_Profile_Form";

export default function Profile(props) {
  const [personalState, setPersonalState] = useState({
    yourNameText: "Your name",
    yourTitleText: "Your title",
    aboutYouText: "About you",
  });

  const formVisibility = props.formVisibilityState;

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      profileFormVisible: true,
    }));
  }

  console.log(personalState);

  return (
    <div
      className="profile-container"
      onMouseEnter={(e) => {
        props.modifyState(true, "editProfileBtn");
      }}
      onMouseLeave={(e) => {
        props.modifyState(false, "editProfileBtn");
      }}
    >
      <div className="flex">
        <h1 className="your-name">{personalState.yourNameText}</h1>
        {props.buttonState.editProfileBtn && (
          <button onClick={handleClick} className="edit-profile-btn">
            EDIT
          </button>
        )}
      </div>
      <p className="your-title">{personalState.yourTitleText}</p>
      <p>About you</p>
      <h2 className="about-you">{personalState.aboutYouText}</h2>

      <p className="about-para"></p>
      {props.formVisibility.profileFormVisible && (
        <EditProfileForm
          setFormVisibility={props.setFormVisibility}
          setPersonalState={setPersonalState}
          personalState={personalState}
        />
      )}
    </div>
  );
}
