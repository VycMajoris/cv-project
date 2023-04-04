import React from "react";
import { useState } from "react";

export default function AddEducationForm(props) {
  const [form, setForm] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
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
      educationFormVisible: false,
    }));
  }

  return (
    <form className="forms education-form">
      <label htmlFor="your-name">School</label>
      <input
        type="text"
        className="form--input"
        name="school"
        value={form.school}
        onChange={handleChange}
        id="school"
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        className="form--input"
        name="degree"
        value={form.degree}
        onChange={handleChange}
        id="degree"
      />
      <label htmlFor="start-date">Start date</label>
      <input
        type="date"
        className="form--input"
        name="start-date"
        value={form.startDate}
        onChange={handleChange}
        id="start-date"
      />
      <label htmlFor="end-date">End date</label>
      <input
        type="date"
        className="form--input"
        name="end-date"
        value={form.endDate}
        onChange={handleChange}
        id="end-date"
      />
      <div className="form-btn-container">
        <button type="button">ADD</button>
        <button type="button" onClick={handleClick}>
          CLOSE
        </button>
      </div>
    </form>
  );
}
