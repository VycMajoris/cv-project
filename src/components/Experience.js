import React from "react";
import SectionDivider from "../utils/Section_Divider";
import AddExperienceForm from "../utils/Add_Experience_Form";

export default function Experience(props) {
  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      experienceFormVisible: true,
    }));
  }

  return (
    <div
      className="experience-container"
      onMouseEnter={(e) => {
        e.stopPropagation();
        props.modifyState(true, "addExperienceBtn");
      }}
      onMouseLeave={() => props.modifyState(false, "addExperienceBtn")}
    >
      <SectionDivider
        sectionName="Experience"
        buttonState={props.buttonState}
      />
      {props.buttonState.addExperienceBtn && (
        <button onClick={handleClick} className="add-experience-btn">
          ADD
        </button>
      )}
      {props.formVisibility.experienceFormVisible && (
        <AddExperienceForm setFormVisibility={props.setFormVisibility} />
      )}
    </div>
  );
}
