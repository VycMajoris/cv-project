import React from "react";
import { useState } from "react";

export default function AddExperienceForm(props) {
  const [experienceForm, setExperienceForm] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setExperienceForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      experienceFormVisible: false,
    }));
  }

  return (
    <form className="forms">
      <label htmlFor="company">Company</label>
      <input
        type="text"
        className="form--input"
        name="company"
        value={experienceForm.company}
        onChange={handleChange}
        id="company"
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        className="form--input"
        name="title"
        value={experienceForm.title}
        onChange={handleChange}
        id="title"
      />
      <label htmlFor="start-date">Start date</label>
      <input
        placeholder="Month & Year (e.g. MAY 2015)"
        type="text"
        className="form--input"
        name="startDate"
        value={experienceForm.startDate}
        onChange={handleChange}
        id="start-date"
      />
      <label htmlFor="end-date">End date</label>
      <input
        placeholder="Month & Year (e.g. MAY 2015)"
        type="text"
        className="form--input"
        name="endDate"
        value={experienceForm.endDate}
        onChange={handleChange}
        id="end-date"
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        className="form--input"
        name="location"
        value={experienceForm.location}
        onChange={handleChange}
        id="location"
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
