import "./App.css";

import { Route, Routes } from "react-router-dom";

import WelcomePage from "./Components/WelcomePage";

import React from "react";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          <Route path="/welcome" element={<WelcomePage />}></Route>
        </Route>
      </Routes>

      <Header></Header>
      <SignUp></SignUp>
    </React.Fragment>
  );
}

export default App;
