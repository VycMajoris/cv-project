import React from "react";
import { useState } from "react";

export default function AddEducationForm(props) {
  const [educationForm, setEducationForm] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEducationForm((prevForm) => ({
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
        value={educationForm.school}
        onChange={handleChange}
        id="school"
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        className="form--input"
        name="degree"
        value={educationForm.degree}
        onChange={handleChange}
        id="degree"
      />
      <label htmlFor="start-date">Start date</label>
      <input
        type="date"
        className="form--input"
        name="start-date"
        value={educationForm.startDate}
        onChange={handleChange}
        id="start-date"
      />
      <label htmlFor="end-date">End date</label>
      <input
        type="date"
        className="form--input"
        name="end-date"
        value={educationForm.endDate}
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
