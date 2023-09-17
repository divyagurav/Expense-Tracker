import "./App.css";
import React, { useState, useContext } from "react";

import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Welcome from "./Components/Welcome";
import { AuthContext } from "./Components/auth-context";

function App() {
  const [profileShow, setProfileShow] = useState(false);
  const authCtx = useContext(AuthContext);

  const showProfileHandler = () => {
    setProfileShow(true);
  };

  const hideProfileHandler = () => {
    setProfileShow(false);
  };

  return (
    <React.Fragment>
      <Routes>
        <Route>
          <Route
            path="/welcome"
            element={<Welcome onShow={showProfileHandler} />}
          ></Route>
        </Route>
      </Routes>

      <Header></Header>
      <SignUp></SignUp>
      {profileShow && <Profile onHide={hideProfileHandler}></Profile>}
    </React.Fragment>
  );
}

export default App;
