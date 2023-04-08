import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddSkillsForm({
  skillState,
  setSkillState,
  setFormVisibility,
}) {
  const [skillsForm, setSkillsForm] = useState({ skill: "", id: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setSkillsForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleClick() {
    setFormVisibility((prevForm) => ({
      ...prevForm,
      skillsFormVisible: false,
    }));
  }

  function addToSkillsField() {
    setSkillState((prevForm) => {
      const newSkillsForm = { ...skillsForm, id: nanoid() };
      return [...prevForm, newSkillsForm];
    });
    setSkillsForm({ skill: "", id: "" });
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
        <button type="button" onClick={addToSkillsField}>
          ADD
        </button>
        <button type="button" onClick={handleClick}>
          CLOSE
        </button>
      </div>
    </form>
  );
}
