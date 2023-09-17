import React, { useRef, useContext, useEffect } from "react";
import { AuthContext } from "./auth-context";

const Profile = (props) => {
  const displaynameInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const photoUrlInputRef = useRef();

  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbgw2oP9cuP_SsnS1MgpRSyKJiYDXYyS8",
      {
        method: "POST",
        idToken: authCtx.token,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
        console.log(res.data.users[0]);

        const displayName = res.data.users[0].displayName;
        const photoUrl = res.data.users[0].photoUrl;

        displaynameInputRef.current.value = displayName;
        photoUrlInputRef.current.value = photoUrl;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const updateHandler = (event) => {
    event.preventdefault();

    const enteredDisplayName = displaynameInputRef.current.value;

    const enteredUrl = photoUrlInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAbgw2oP9cuP_SsnS1MgpRSyKJiYDXYyS8",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          displayName: enteredDisplayName,
          photoUrl: enteredUrl,
          deleteAttribute: null,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("profilephoto update success");
        console.log(res.json());
      } else {
        res.json().then((data) => {
          let errorMessage = "profile photo update Failed";
          console.log(data);
          alert(errorMessage);
        });
      }
    });
  };
  return (
    <div>
      <form
        style={{
          borderStyle: "outset",
          width: "50%",
          margin: "auto",
          position: "absolute",
          top: "10%",
          right: "2%",
          height: "22%",
        }}
        onSubmit={updateHandler}
      >
        <header>
          <h5>Contact Details</h5>
          <button
            onClick={props.onHide}
            style={{
              position: "absolute",
              margin: "10px",
              top: "0",
              right: "0",
            }}
          >
            Cancel
          </button>
        </header>
        <label
          style={{ padding: "1%", marginBottom: "50%", paddingLeft: "3%" }}
        >
          Full Name:
        </label>
        <input
          type="text"
          ref={displaynameInputRef}
          style={{ height: "15cd%" }}
        ></input>
        <i class="fas fa-globe" style={{ fontSize: "24px" }}></i>
        <label style={{ padding: "1%", paddingLeft: "3%", height: "20%" }}>
          Profile Photo URL:
        </label>
        <input
          ref={photoUrlInputRef}
          style={{ height: "15%", margin: "2%" }}
          type="url"
        ></input>
        <button
          style={{
            position: "absolute",
            bottom: "5%",
            left: "2%",
            borderRadius: "4px",
            height: "30px",
            backgroundColor: "#d57676",
            color: "white",
            border: "none",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
