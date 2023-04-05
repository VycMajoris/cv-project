import React, { useState } from "react";
import SectionDivider from "../utils/Section_Divider";
import AddEducationForm from "../utils/Add_Education_Form";
import EduFieldContainer from "../utils/Edu_Field_Container";
import { nanoid } from "nanoid";

export default function Education(props) {
  const [educationFields, setEducationFields] = useState([
    {
      school: "Harvard University",
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

  console.log(educationFields);

  const fields = educationFields.map((item) => {
    const uniqueId = nanoid();
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
