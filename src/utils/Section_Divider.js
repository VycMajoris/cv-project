import React from "react";

export default function SectionDivider(props) {
  const styles = {
    backgroundColor: "#82AFB4",
  };

  return (
    <div className="section-divider">
      <div style={styles} className="divider-thin"></div>
      <div className="flex">
        <h2>{props.sectionName}</h2>
        {props.buttonState &&
          (props.buttonState.addEducationBtn ||
            props.buttonState.addExperienceBtn) && <button>ADD</button>}
      </div>

      <div style={styles} className="divider-normal"></div>
    </div>
  );
}
