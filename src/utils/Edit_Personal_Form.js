import React from "react";
import { useState } from "react";

export default function AddPersonalForm(props) {
  const [personalForm, setPersonalForm] = useState({
    adress: "",
    phone: "",
    email: "",
    website: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPersonalForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      personalFormVisible: false,
    }));
  }

  return (
    <form className="forms personal-form">
      <label htmlFor="adress">Adress</label>
      <input
        type="text"
        className="form--input"
        name="adress"
        value={personalForm.adress}
        onChange={handleChange}
        id="adress"
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        className="form--input"
        name="phone"
        value={personalForm.phone}
        onChange={handleChange}
        id="phone"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="form--input"
        name="email"
        value={personalForm.email}
        onChange={handleChange}
        id="email"
      />
      <label htmlFor="website">Website</label>
      <input
        type="text"
        className="form--input"
        name="website"
        value={personalForm.website}
        onChange={handleChange}
        id="website"
      />
      <hr></hr>
      <button type="button" onClick={handleClick}>
        CLOSE
      </button>
    </form>
  );
}
