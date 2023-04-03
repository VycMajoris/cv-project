import React from "react";
import { useState } from "react";

export default function EditProfileForm() {
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

  return (
    <div className="edit-profile-form">
      <label htmlFor="your-name"></label>
      <input
        type="text"
        className="form--input"
        name="yourNameText"
        value={form.yourNameText}
        onChange={handleChange}
        id="your-name"
      />
      <label htmlFor="your-title"></label>
      <input
        type="text"
        className="form--input"
        name="yourTitleText"
        value={form.yourTitleText}
        onChange={handleChange}
        id="your-title"
      />
      <label htmlFor="about-you"></label>
      <input
        type="text"
        className="form--input"
        name="aboutYouText"
        value={form.aboutYouText}
        onChange={handleChange}
        id="about-you"
      />
    </div>
  );
}
