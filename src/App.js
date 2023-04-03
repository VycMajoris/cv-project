import React from "react";
import PersonalInfo from "./components/Personal_Info";

export default function App() {
  return (
    <div className="App">
      <main>
        <section className="left-section">
          <div>CV Application</div>
          <img alt="Picture of the applicant"></img>
          <PersonalInfo />
          {/* <Skills /> */}
        </section>

        <section className="right-section">
          {/*           <Profile />
          <Education />
          <Experience /> */}
        </section>
      </main>
    </div>
  );
}
