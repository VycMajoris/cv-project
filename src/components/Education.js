import React from "react";
import SectionDivider from "../utils/Section_Divider";
import AddEducationForm from "../utils/Add_Education_Form";

export default function Education(props) {
  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      educationFormVisible: true,
    }));
  }

  return (
    <div
      className="education-container"
      onMouseEnter={(e) => {
        e.stopPropagation();
        props.modifyState(true, "addEducationBtn");
      }}
      onMouseLeave={() => props.modifyState(false, "addEducationBtn")}
    >
      <SectionDivider sectionName="Education" buttonState={props.buttonState} />
      {props.buttonState.addEducationBtn && (
        <button onClick={handleClick} className="add-education-btn">
          ADD
        </button>
      )}
      {props.formVisibility.educationFormVisible && (
        <AddEducationForm setFormVisibility={props.setFormVisibility} />
      )}
    </div>
  );
}
