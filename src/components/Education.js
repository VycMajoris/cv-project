import React from "react";
import SectionDivider from "../utils/Section_Divider";

export default function Education(props) {
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
        <button className="add-education-btn">ADD</button>
      )}
      <p>asdslkdafjlksj</p>
    </div>
  );
}
