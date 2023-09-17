import React, { useContext } from "react";
import { AuthContext } from "./auth-context";
const Emailverify = () => {
  const authCtx = useContext(AuthContext);
  const EmailHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAbgw2oP9cuP_SsnS1MgpRSyKJiYDXYyS8",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          requestType: "VERIFY_EMAIL",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.ok) {
            console.log(res);
          }
        }),
      }
    );
  };
  return (
    <div>
      <button onClick={EmailHandler}>Verify Email</button>
    </div>
  );
};

export default Emailverify;
