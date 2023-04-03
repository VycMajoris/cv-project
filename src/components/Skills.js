import React from "react";

export default function Skills(props) {
  return (
    <div
      className="skills-container"
      onMouseEnter={(e) => {
        e.stopPropagation();
        props.modifyState("addSkillsBtn");
      }}
      onMouseLeave={() => props.modifyState("addSkillsBtn")}
    >
      <div className="divider-normal"></div>
      <h2>Skills</h2>
      <div className="divider-thin"></div>
      <p>Skill</p>
      <p>Skill</p>
      <p>Skill</p>
      <p>Skill</p>
      <p>Skill</p>
      <p>Skill</p>
      <p>Skill</p>
      <p>Skill</p>
      <p>Skill</p>

      {props.buttonState.addSkillsBtn && <button>ADD</button>}
    </div>
  );
}
