import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

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

  function addToEducationField() {
    props.setEducationFields((prevForm) => {
      const newEducationForm = { ...educationForm, id: nanoid() };
      return [...prevForm, newEducationForm];
    });
  }

  return (
    <form className="forms education-form">
      <label htmlFor="school">School</label>
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
        placeholder="Month & Year (e.g. MAY 2015)"
        type="text"
        className="form--input"
        name="startDate"
        value={educationForm.startDate}
        onChange={handleChange}
        id="start-date"
      />
      <label htmlFor="end-date">End date</label>
      <input
        placeholder="Month & Year (e.g. MAY 2015)"
        type="text"
        className="form--input"
        name="endDate"
        value={educationForm.endDate}
        onChange={handleChange}
        id="end-date"
      />
      <hr></hr>

      <div className="form-btn-container">
        <button type="button" onClick={addToEducationField}>
          ADD
        </button>
        <button type="button" onClick={handleClick}>
          CLOSE
        </button>
      </div>
    </form>
  );
}
