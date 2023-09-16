import React, { useRef } from "react";
import "./SignUp.css";

const SignUp = () => {
  const emailInput = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnYM8b_BjsCXLDfxXLw6RU-i_f0pcRn7M",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("User has successfully signed up.");
      } else {
        return res.json().then((data) => {
          let errorMessage = data.error.message;
          alert(errorMessage);
        });
      }
    });
  };
  return (
    <form onSubmit={submitHandler} style={{ width: "500px", margin: "auto" }}>
      <div className="container-fluid ">
        <header>
          <h1>Sign Up</h1>
        </header>
        <div>
          <label></label>
          <input
            type="email"
            ref={emailInput}
            placeholder="Email"
            class="form-control"
          ></input>
        </div>
        <div>
          <label></label>
          <input
            type="password"
            ref={passwordInputRef}
            placeholder="Password"
          ></input>
        </div>
        <div>
          <label></label>
          <input
            type="password"
            ref={confirmPasswordRef}
            placeholder="Confirm Password"
          ></input>
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
