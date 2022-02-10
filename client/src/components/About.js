import React from "react";
import Header from "./components/Header";

function About(props) {
  return (
    <div className="about">
      <Header/>
      <h2 style={{ marginBottom: "1%" }}>Our mission</h2>
      <p>
        Step Out has you covered, whether you're walking home alone, travelling to 
        an unknown area or just simply commuting around town. 
        Especially when the darker nights approach, many people will be looking for ways to feel safer when they are out and about.
        Step Out was created to ensure no one ever feels unsafe 
        regardless of their race, gender, sexual preference or background.</p><br></br>
      <h3>Features</h3>
      <ul>
          <li> *icon* Allows users to input upto 6 guardians from their contacts </li>
          <li> *icon* You can plan your journey days or weeks in advance to meet either with your chosen guardian from their contacts or 
               a qualifed guardian to meet you at a safe meeting point to accompany you to your destination </li>
          <li> *icon* NOW feature - With one click, a message, live GPS location and touch-activated SOS call will be sent to your 
                selected guardians in an emergency situation.</li>  
          <li> *icon* Our journey feature gives you the confidence to step out safely by allowing you to set a start and end destinations
               in advance, using live GPS location to notify your guardians when you have reached your chosen destination safely.
               The platform will update your actual location in real time based on movement activity to locate where you are once an alert is raised,
               this feature can be used outside from the app using power-saver to prevent low battery on route!
          </li>
      </ul>
    </div>
  );
}

export default About;

// write about the app's purpose and it functionalities (functions = my user stories) and the instructions on the dashboard 