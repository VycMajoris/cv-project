import React, { useState } from "react";
import SectionDivider from "../utils/Section_Divider";
import AddExperienceForm from "../utils/Add_Experience_Form";
import ExpFieldContainer from "../utils/Exp_Field_Container";
import { nanoid } from "nanoid";

export default function Experience(props) {
  const [experienceFields, setExperienceFields] = useState([
    {
      company: "Harvard University",
      title: "Web Dev",
      startDate: "May 2015",
      endDate: "Aug 2019",
      location: "New York",
    },
  ]);

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      experienceFormVisible: true,
    }));
  }

  const fields = experienceFields.map((item) => {
    return <ExpFieldContainer field={item} key={nanoid()} />;
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
