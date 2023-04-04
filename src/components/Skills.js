import React from "react";
import AddSkillsForm from "../utils/Add_Skills_Form";

export default function Skills(props) {
  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      skillsFormVisible: true,
    }));
  }

  return (
    <div
      className="skills-container"
      onMouseEnter={(e) => {
        e.stopPropagation();
        props.modifyState(true, "addSkillsBtn");
      }}
      onMouseLeave={() => props.modifyState(false, "addSkillsBtn")}
    >
      <div className="divider-normal"></div>
      <h2>Skills</h2>
      <div className="divider-thin"></div>
      <p>Skill</p>
      <p>Skill</p>

      {props.buttonState.addSkillsBtn && (
        <button onClick={handleClick} className="add-skills-btn">
          ADD
        </button>
      )}
      {props.formVisibility.skillsFormVisible && (
        <AddSkillsForm setFormVisibility={props.setFormVisibility} />
      )}
    </div>
  );
}
