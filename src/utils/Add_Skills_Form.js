import React from "react";
import { useState } from "react";

export default function AddSkillsForm(props) {
  const [form, setForm] = useState({
    skill: "",
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
        value={form.skill}
        onChange={handleChange}
        id="skill"
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
