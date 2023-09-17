import React from "react";

const Welcome = (props) => {
  return (
    <div>
      <header
        style={{
          borderStyle: "none",
          borderBottom: "solid",
          borderColor: "lightgrey",
        }}
      >
        <h3>Welcome to Expense Tracker</h3>
        <button
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "20px",
            position: "absolute",
            margin: "2%",

            top: "0",
            right: "0",
            borderStyle: "none",
            backgroundColor: "#ffa280",
          }}
          onClick={props.onShow}
        >
          Your profile inComplete. <i style={{ color: "blue" }}>Complete Now</i>
        </button>
      </header>
    </div>
  );
};

export default Welcome;
