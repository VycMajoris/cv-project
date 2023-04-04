import React from "react";
import AddPersonalForm from "../utils/Edit_Personal_Form";

export default function PersonalInfo(props) {
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
        <p>123 Address St City, ST 55555</p>
      </div>
      <div className="divider-thin"></div>
      <div className="phone">
        <h2>PHONE</h2>
        <p>555-555-55-55</p>
      </div>
      <div className="divider-thin"></div>
      <div className="email">
        <h2>EMAIL</h2>
        <p>info@website.com</p>
      </div>
      <div className="divider-thin"></div>
      <div className="online">
        <h2>ONLINE</h2>
        <p>website.com</p>
        <p>linkedin.com/in/user-name</p>
      </div>
      {props.buttonState.editPersonalBtn && (
        <button onClick={handleClick}>EDIT</button>
      )}
      {props.formVisibility.personalFormVisible && (
        <AddPersonalForm setFormVisibility={props.setFormVisibility} />
      )}
    </div>
  );
}
