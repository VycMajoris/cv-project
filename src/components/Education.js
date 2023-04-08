import React, { useState } from "react";
import SectionDivider from "../utils/Section_Divider";
import AddEducationForm from "../utils/Add_Education_Form";
import EduFieldContainer from "../utils/Edu_Field_Container";
import { nanoid } from "nanoid";

export default function Education(props) {
  const [educationFields, setEducationFields] = useState([
    {
      school: "... University",
      degree: "Economy",
      startDate: "May 2015",
      endDate: "Aug 2019",
      id: "",
    },
  ]);

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      educationFormVisible: true,
    }));
  }

  const fieldId = [];

  for (let i = 0; i < educationFields.length; i++) {
    fieldId.push(nanoid());
  }

  const fields = educationFields.map((item, index) => {
    const uniqueId = fieldId[index];
    item.id = uniqueId;
    return (
      <EduFieldContainer
        field={item}
        key={nanoid()}
        id={uniqueId}
        educationFields={educationFields}
        setEducationFields={setEducationFields}
      />
    );
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
