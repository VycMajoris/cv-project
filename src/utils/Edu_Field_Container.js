import React, { useState } from "react";

export default function EduFieldContainer(props) {
  return (
    <div className="edu-container">
      <div className="edu-container-left">
        <div className="start-date-container">{props.field.startDate}</div>
        <div> - </div>
        <div className="end-date-container">{props.field.endDate}</div>
      </div>
      <div className="edu-container-right">
        <div className="school-container">{props.field.school}</div>
        <div className="degree-container">{props.field.degree}</div>
      </div>
    </div>
  );
}
