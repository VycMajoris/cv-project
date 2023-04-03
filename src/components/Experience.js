import React from "react";
import SectionDivider from "../utils/Section_Divider";

export default function Experience(props) {
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
        <button className="add-experience-btn">ADD</button>
      )}
    </div>
  );
}
