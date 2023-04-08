import React, { useState } from "react";

export default function ExpFieldContainer(props) {
  function removeField() {
    const itemToDelete = props.experienceFields.find(
      (item) => item.id === props.id
    );

    props.setExperienceFields((prevField) => {
      const newArray = prevField.filter((item) => item.id !== itemToDelete.id);
      return newArray;
    });
  }

  return (
    <div className="exp-container" onDoubleClick={removeField}>
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
