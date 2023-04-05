import { nanoid } from "nanoid";
import React, { useState } from "react";

export default function EduFieldContainer(props) {
  function removeField() {
    const itemToDelete = props.educationFields.find(
      (item) => item.id === props.id
    );

    props.setEducationFields((prevField) => {
      const newArray = prevField.filter((item) => item.id !== itemToDelete.id);
      return newArray;
    });
  }

  return (
    <div className="edu-container" onClick={removeField}>
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
