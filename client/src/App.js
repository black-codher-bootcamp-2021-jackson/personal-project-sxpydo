// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" id="home" element={<Home />} />
      <Route path="/signup" id="sign-up" element={<SignUp />} />
      <Route path="/login" id="log-in" element={<LogIn />} />
      <Route path="/about" id="about" element={<About />} />
      <Route path="/dashboard" id="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;