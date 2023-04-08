import React, { useState } from "react";
import AddSkillsForm from "../utils/Add_Skills_Form";
import { nanoid } from "nanoid";

export default function Skills(props) {
  const defaultSkillsId = [];

  for (let i = 0; i < 6; i++) {
    defaultSkillsId.push(nanoid());
  }

  const [skillState, setSkillState] = useState([
    {
      skill: "Creative thinking",
      id: defaultSkillsId[0],
    },
    {
      skill: "Communication",
      id: defaultSkillsId[1],
    },
    {
      skill: "Problem Solving",
      id: defaultSkillsId[2],
    },
    {
      skill: "HTML",
      id: defaultSkillsId[3],
    },
    {
      skill: "CSS",
      id: defaultSkillsId[4],
    },
    {
      skill: "Javascript",
      id: defaultSkillsId[5],
    },
    {
      skill: "REACT",
      id: defaultSkillsId[6],
    },
  ]);

  function handleAddSkillClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      skillsFormVisible: true,
    }));
  }

  function removeField(e) {
    const itemToDelete = skillState.find((item) => item.id === e.target.id);

    setSkillState((prevField) => {
      const newArray = prevField.filter((item) => item.id !== itemToDelete.id);
      return newArray;
    });
  }

  const skills = skillState.map((item, index) => {
    return (
      <p key={index} id={item.id} onDoubleClick={(id) => removeField(id)}>
        {item.skill}
      </p>
    );
  });

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
      {skills}

      {props.buttonState.addSkillsBtn && (
        <button onClick={handleAddSkillClick} className="add-skills-btn">
          ADD
        </button>
      )}
      {props.formVisibility.skillsFormVisible && (
        <AddSkillsForm
          setFormVisibility={props.setFormVisibility}
          skillState={skillState}
          setSkillState={setSkillState}
        />
      )}
    </div>
  );
}
