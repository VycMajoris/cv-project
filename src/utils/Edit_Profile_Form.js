import React from "react";
import { useState } from "react";

export default function EditProfileForm(props) {
  const [profileForm, setProfileForm] = useState({
    yourNameText: props.personalState.yourNameText,
    yourTitleText: props.personalState.yourTitleText,
    aboutYouText: props.personalState.aboutYouText,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setProfileForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      profileFormVisible: false,
    }));
  }

  props.setPersonalState(profileForm);

  return (
    <form className="forms">
      <label htmlFor="your-name">Your name</label>
      <input
        type="text"
        className="form--input"
        name="yourNameText"
        value={profileForm.yourNameText}
        onChange={handleChange}
        id="your-name"
        maxLength={24}
      />
      <label htmlFor="your-title">Your title</label>
      <input
        type="text"
        className="form--input"
        name="yourTitleText"
        value={profileForm.yourTitleText}
        onChange={handleChange}
        id="your-title"
        maxLength={48}
      />
      <label htmlFor="about-you">About you</label>
      <textarea
        className="form--input text-area"
        name="aboutYouText"
        value={profileForm.aboutYouText}
        onChange={handleChange}
        id="about-you"
        maxLength={500}
      />
      <hr></hr>
      <button type="button" onClick={handleClick}>
        CLOSE
      </button>
    </form>
  );
}
