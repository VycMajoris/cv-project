import React from "react";
import SectionDivider from "../utils/Section_Divider";

export default function Experience(props) {
  return (
    <div
      className="experience-container"
      onMouseEnter={(e) => {
        e.stopPropagation();
        props.modifyState("addExperienceBtn");
      }}
      onMouseLeave={() => props.modifyState("addExperienceBtn")}
    >
      <SectionDivider
        sectionName="Experience"
        buttonState={props.buttonState}
      />
    </div>
  );
}
