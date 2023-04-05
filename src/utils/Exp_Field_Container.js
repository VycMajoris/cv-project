import React, { useState } from "react";

export default function ExpFieldContainer(props) {
  return (
    <div className="exp-container">
      <div className="exp-container-left">
        <div className="exp-dates-container">
          <div className="start-date-container">{props.field.startDate}</div>
          <div> - </div>
          <div className="end-date-container">{props.field.endDate}</div>
        </div>

        <div className="title-container">{props.field.title}</div>
      </div>
      <div className="exp-container-right">
        <div className="company-container">{props.field.company}</div>
        <div className="location-container">{props.field.location}</div>
      </div>
    </div>
  );
}
