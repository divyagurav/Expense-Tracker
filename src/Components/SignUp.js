import React, { useState, useRef, useContext } from "react";
import { AuthContext } from "./auth-context";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailInput = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbgw2oP9cuP_SsnS1MgpRSyKJiYDXYyS8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbgw2oP9cuP_SsnS1MgpRSyKJiYDXYyS8";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("signup success");
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        console.log(data);
        navigate("/welcome");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{
          width: "300px",
          margin: "auto",
          borderStyle: "outset",
          height: "300px",
          marginTop: "100px",
          marginRight: "30%",
        }}
      >
        <div>
          <header>
            <h1 style={{ textAlign: "center" }}>
              {isLogin ? "Login" : "Sign Up"}
            </h1>
          </header>
          <div>
            <label></label>
            <input
              type="email"
              ref={emailInput}
              placeholder="Email"
              style={{
                width: "80%",
                marginBottom: "10px",
                padding: "10px",
                borderColor: "lightgray",
                borderStyle: "ridge",
                marginLeft: "10px",
              }}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="password"
              ref={passwordInputRef}
              placeholder="Password"
              style={{
                width: "80%",
                marginBottom: "10px",
                padding: "10px",
                borderColor: "lightgray",
                borderStyle: "ridge",
                marginLeft: "10px",
              }}
            ></input>
          </div>
          {!isLogin ? (
            <div>
              <label></label>
              <input
                type="password"
                ref={confirmPasswordRef}
                placeholder="Confirm Password"
                style={{
                  width: "80%",
                  marginBottom: "20px",
                  padding: "10px",
                  borderColor: "lightgray",
                  borderStyle: "ridge",
                  marginLeft: "10px",
                }}
              ></input>
            </div>
          ) : (
            ""
          )}
          <div>
            <button
              style={{
                width: "90%",
                marginBottom: "10px",
                borderRadius: "30px",
                height: "30px",
                borderStyle: "none",
                backgroundColor: "#5e90ed",
                marginLeft: "10px",
              }}
            >
              {isLogin ? "Login" : "Sign up"}
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            {isLogin ? <a href="#">Forgot Password</a> : ""}
          </div>
        </div>
      </form>
      <button
        onClick={switchAuthModeHandler}
        style={{
          width: "310px",
          marginTop: "10px",
          height: "50px",
          backgroundColor: "#bdf5bd",
          borderStyle: "hidden",
          marginLeft: "50%",
          borderRadius: "6px",
        }}
      >
        {isLogin ? "Don't have an account? Sign up" : "Have an account? Login"}
      </button>
    </div>
  );
};

export default SignUp;

// if (isLogin) {
//   url =
//     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnYM8b_BjsCXLDfxXLw6RU-i_f0pcRn7M";
// } else {
//   url =
//     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnYM8b_BjsCXLDfxXLw6RU-i_f0pcRn7M";
// }
