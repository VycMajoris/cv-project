import React, { useState } from "react";
import SectionDivider from "../utils/Section_Divider";
import AddEducationForm from "../utils/Add_Education_Form";
import EduFieldContainer from "../utils/Edu_Field_Container";

export default function Education(props) {
  const [educationFields, setEducationFields] = useState([
    {
      school: "Harvard",
      degree: "Economy",
      startDate: "May 2015",
      endDate: "Aug 2019",
    },
    {
      school: "Harvard",
      degree: "Economy",
      startDate: "May 2015",
      endDate: "Aug 2019",
    },
  ]);

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      educationFormVisible: true,
    }));
  }

  const fields = educationFields.map((item) => {
    return <EduFieldContainer field={item} />;
  });

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
      {fields}
      {props.buttonState.addEducationBtn && (
        <button onClick={handleClick} className="add-education-btn">
          ADD
        </button>
      )}
      {props.formVisibility.educationFormVisible && (
        <AddEducationForm
          setFormVisibility={props.setFormVisibility}
          educationFields={educationFields}
          setEducationFields={setEducationFields}
        />
      )}
    </div>
  );
}
