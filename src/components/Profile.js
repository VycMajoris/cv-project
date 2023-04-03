import React from "react";

export default function Profile(props) {
  console.log(props.buttonState);
  return (
    <div
      className="profile-container"
      onMouseEnter={(e) => {
        props.modifyState("editProfileBtn");
      }}
      onMouseLeave={(e) => {
        props.modifyState("editProfileBtn");
      }}
    >
      <div className="flex">
        <h1 className="your-name">Your Name</h1>
        {props.buttonState.editProfileBtn && <button>EDIT</button>}
      </div>
      <p className="your-title">Your Title</p>
      <h2 className="about-you">About You</h2>
      <p className="about-para"></p>
    </div>
  );
}
