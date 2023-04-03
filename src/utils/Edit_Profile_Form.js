import React from "react";
import { useState } from "react";

export default function EditProfileForm(props) {
  const [form, setForm] = useState({
    yourNameText: "",
    yourTitleText: "",
    aboutYouText: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({
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

  return (
    <form className="edit-profile-form">
      <label htmlFor="your-name">Your name</label>
      <input
        type="text"
        className="form--input"
        name="yourNameText"
        value={form.yourNameText}
        onChange={handleChange}
        id="your-name"
      />
      <label htmlFor="your-title">Your title</label>
      <input
        type="text"
        className="form--input"
        name="yourTitleText"
        value={form.yourTitleText}
        onChange={handleChange}
        id="your-title"
      />
      <label htmlFor="about-you">About you</label>
      <textarea
        className="form--input text-area"
        name="aboutYouText"
        value={form.aboutYouText}
        onChange={handleChange}
        id="about-you"
      />
      <button type="button" onClick={handleClick}>
        CLOSE
      </button>
    </form>
  );
}
