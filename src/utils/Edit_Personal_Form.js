import React from "react";
import { useState } from "react";

export default function AddPersonalForm(props) {
  const [form, setForm] = useState({
    adress: "",
    phone: "",
    email: "",
    website: "",
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
        value={form.adress}
        onChange={handleChange}
        id="adress"
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        className="form--input"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        id="phone"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="form--input"
        name="email"
        value={form.email}
        onChange={handleChange}
        id="email"
      />
      <label htmlFor="website">Website</label>
      <input
        type="text"
        className="form--input"
        name="website"
        value={form.website}
        onChange={handleChange}
        id="website"
      />
      <button type="button" onClick={handleClick}>
        CLOSE
      </button>
    </form>
  );
}
