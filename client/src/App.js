// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/signup/LogIn";
import SignUp from "./components//signup/SignUp";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Bookings from "./components/Booking";
import Now from "./components/Now";
import Guardian from "./components/Guardian";
import Settings from "./components/Settings";
import Journey from "./components/Journey";



function App() {

  const [user, setUser] = useState({})
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" id="home" element={<Home />} />
      <Route path="/signup" id="sign-up" element={<SignUp setUser={setUser} />} />
      <Route path="/login" id="log-in" element={<LogIn setUser={setUser} />} />
      <Route path="/about" id="about" element={<About />} />
      <Route path="/dashboard" id="dashboard" element={<Dashboard user={user} />} />
      <Route path="/bookings" id="bookings" element={<Bookings />} />
      <Route path="/guardian" id="guardian" element={<Guardian />} />
      <Route path="/now" id="now" element={<Now />} />
      <Route path="/settings" id="settings" element={<Settings />} />
      <Route path="/journey" id="dashboard" element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;