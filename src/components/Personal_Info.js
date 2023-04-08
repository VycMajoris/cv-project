import React, { useState } from "react";
import AddPersonalForm from "../utils/Edit_Personal_Form";

export default function PersonalInfo(props) {
  const [personalInfoFields, setPersonalInfoFields] = useState({
    adress: "123 Address St City, ST 55555",
    phone: "555-555-55-55",
    email: "info@website.com",
    website: "website.com",
  });

  function handleClick() {
    props.setFormVisibility((prevForm) => ({
      ...prevForm,
      personalFormVisible: true,
    }));
  }

  return (
    <div
      className="personal-info-container"
      onMouseEnter={(e) => {
        e.stopPropagation();
        props.modifyState(true, "editPersonalBtn");
      }}
      onMouseLeave={() => props.modifyState(false, "editPersonalBtn")}
    >
      <div className="adress">
        <h2>ADRESS</h2>
        <p>{personalInfoFields.adress}</p>
      </div>
      <div className="divider-thin"></div>
      <div className="phone">
        <h2>PHONE</h2>
        <p>{personalInfoFields.phone}</p>
      </div>
      <div className="divider-thin"></div>
      <div className="email">
        <h2>EMAIL</h2>
        <p>{personalInfoFields.email}</p>
      </div>
      <div className="divider-thin"></div>
      <div className="online">
        <h2>ONLINE</h2>
        <p>{personalInfoFields.website}</p>
        <p></p>
      </div>
      {props.buttonState.editPersonalBtn && (
        <button onClick={handleClick}>EDIT</button>
      )}
      {props.formVisibility.personalFormVisible && (
        <AddPersonalForm
          setFormVisibility={props.setFormVisibility}
          personalInfoFields={personalInfoFields}
          setPersonalInfoFields={setPersonalInfoFields}
        />
      )}
    </div>
  );
}
