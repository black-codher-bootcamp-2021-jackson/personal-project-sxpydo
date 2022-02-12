import React from "react";

function About(props) {
  return (
    <div className="flexible-layout">
      <div className="image-layout">
      <h2 style={{ marginBottom: "1%" }}>Our mission</h2>
      <p>
        Step Out has you covered, whether you're walking home alone, travelling to 
        an unknown area or just simply commuting around town. 
        Especially when the darker nights approach, many people will be looking for ways to feel safer when they are out and about.
        Step Out was created to ensure no one ever feels unsafe 
        regardless of their race, gender, sexual preference or background.</p><br></br>
      </div>
      <section className="features" style={{textAlign: "center"}}>
      <h2>Features</h2>
      <ul style={{display: "block"}}>
          <li> <img alt="users icon" className="icon" src="icons/user.png"/> Allows users to input upto 6 guardians from your contacts </li> <br/>
          <li> <img alt="calender icon" className="icon" src="icons/calendar.png"/> You can plan your journey days or weeks in advance to meet either with your chosen guardian from their contacts or 
               a qualifed guardian to meet you at a safe meeting point to accompany you to your destination </li> <br/>
          <li> <img alt="now icon" className="icon" src="icons/now.png"/> NOW feature - With one click, a message, live GPS location and touch-activated SOS call will be sent to your 
                selected guardians in an emergency situation</li>  <br/>
          <li> <img alt="location icon" className="icon" src="icons/location.png"/> Our journey feature gives you the confidence to step out safely by allowing you to set a start and end destinations
               in advance, using live GPS location to notify your guardians when you have reached your chosen destination safely.
               The platform will update your actual location in real time based on movement activity to locate where you are once an alert is raised,
               this feature can be used outside from the app using power-saver to prevent low battery on route!
          </li>
      </ul>
      </section>
    </div>
  );
}

export default About;