// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn"
//import InputField from "./components/InputField"
import SignUp from "./components/SignUp"
import About from "./components/About"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" id="sign-up" element={<SignUp />} />
      <Route path="/login" id="log-in" element={<LogIn />} />
      <Route path="/about" id="about" element={<About />} />
      <Route path="/dashboard" id="dashboard" element={<Dashboard />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;

/* <>
<div>
      <img
          src="https://blush.design/api/download?shareUri=5nSdU0Szjp&w=800&h=800&fm=png"
          alt=" Illustration by Blush" class="home-img"/>
      <p>"Strut with confidence!"</p>
</div>
</> */