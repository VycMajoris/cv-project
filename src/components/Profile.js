import React from "react";
import EditProfileForm from "../utils/Edit_Profile_Form";

export default function Profile(props) {
  const formVisibility = props.formVisibilityState;

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      profileFormVisible: true,
    }));
  }

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
        <h1 className="your-name">Your Name</h1>
        {props.buttonState.editProfileBtn && (
          <button onClick={handleClick} className="edit-profile-btn">
            EDIT
          </button>
        )}
      </div>
      <p className="your-title">Your Title</p>
      <h2 className="about-you">About You</h2>
      <p className="about-para"></p>
      {props.formVisibility.profileFormVisible && (
        <EditProfileForm setFormVisibility={props.setFormVisibility} />
      )}
    </div>
  );
}
