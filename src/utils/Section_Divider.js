import React from "react";

export default function SectionDivider(props) {
  const styles = {
    backgroundColor: "#82AFB4",
  };

  return (
    <div className="section-divider">
      <div style={styles} className="divider-thin"></div>
      <h2>{props.sectionName}</h2>
      <div style={styles} className="divider-normal"></div>
    </div>
  );
}
