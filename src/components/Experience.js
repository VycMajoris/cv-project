import React, { useState } from "react";
import SectionDivider from "../utils/Section_Divider";
import AddExperienceForm from "../utils/Add_Experience_Form";
import ExpFieldContainer from "../utils/Exp_Field_Container";
import { nanoid } from "nanoid";

export default function Experience(props) {
  const [experienceFields, setExperienceFields] = useState([
    {
      company: "... Company",
      title: "Web Dev",
      startDate: "May 2015",
      endDate: "Aug 2019",
      location: "New York",
      id: "",
    },
  ]);

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      experienceFormVisible: true,
    }));
  }

  const fieldId = [];

  for (let i = 0; i < experienceFields.length; i++) {
    fieldId.push(nanoid());
  }

  const fields = experienceFields.map((item, index) => {
    const uniqueId = fieldId[index];
    item.id = uniqueId;
    return (
      <ExpFieldContainer
        field={item}
        key={nanoid()}
        id={uniqueId}
        experienceFields={experienceFields}
        setExperienceFields={setExperienceFields}
      />
    );
  });

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
      {fields}
      {props.buttonState.addExperienceBtn && (
        <button onClick={handleClick} className="add-experience-btn">
          ADD
        </button>
      )}
      {props.formVisibility.experienceFormVisible && (
        <AddExperienceForm
          setFormVisibility={props.setFormVisibility}
          experienceFields={experienceFields}
          setExperienceFields={setExperienceFields}
        />
      )}
    </div>
  );
}
