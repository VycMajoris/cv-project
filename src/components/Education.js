import React from "react";
import SectionDivider from "../utils/Section_Divider";

export default function Education(props) {
  return (
    <div
      className="education-container"
      onMouseEnter={(e) => {
        e.stopPropagation();
        props.modifyState("addEducationBtn");
      }}
      onMouseLeave={() => props.modifyState("addEducationBtn")}
    >
      <SectionDivider sectionName="Education" buttonState={props.buttonState} />
      <p>asdslkdafjlksj</p>
    </div>
  );
}
