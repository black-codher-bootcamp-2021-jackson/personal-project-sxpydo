// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Mainpage from "./components/Mainpage";

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>

        <Route
          exact
          path="/help"
          element={
            <>
              <Help />
            </>
          }
        ></Route>

        <Route
          exact
          path="/Guardian"
          element={
            <>
              <Guardian />
            </>
          }
        ></Route>

        <Route
          exact
          path="/now"
          element={
            <>
              <Now />
            </>
          }
        ></Route>

        <Route
          exact
          path="/Settings"
          element={
            <>
              <Settings />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;