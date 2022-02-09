import React from "react";
import Header from "./components/Header";

function About(props) {
  return (
    <div className="about">
      <Header/>
      <h2 style={{ marginBottom: "1%" }}>Our mission</h2>
      <p>
      Step Out was created to ensure no one ever feels unsafe 
      regardless of their race, gender, sexual preference or background.
      </p>
    </div>
  );
}

export default About;

// write about the app's purpose and it functionalities (functions = my user stories) and the instructions on the dashboard 