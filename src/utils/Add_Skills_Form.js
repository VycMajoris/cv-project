import React from "react";
import { useState } from "react";

export default function AddSkillsForm(props) {
  const [skillsForm, setSkillsForm] = useState({
    skill: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSkillsForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      skillsFormVisible: false,
    }));
  }

  return (
    <form className="forms skills-form">
      <label htmlFor="skill">Skill</label>
      <input
        type="text"
        className="form--input"
        name="skill"
        value={skillsForm.skill}
        onChange={handleChange}
        id="skill"
      />
      <hr></hr>
      <div className="form-btn-container">
        <button type="button">ADD</button>
        <button type="button" onClick={handleClick}>
          CLOSE
        </button>
      </div>
    </form>
  );
}
