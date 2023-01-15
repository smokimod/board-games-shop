import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const clientId =
  "434607980919-1l11g0ij8onhnsfth53dh45ifoh9ubrt.apps.googleusercontent.com";

export const GoogleAuth = () => {
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  console.log(user);
  function handleCallBackResponse(response) {
    let userObject = jwt_decode(response.credential);
    setUser(userObject);
  }

  function handleSignOut() {
    setUser({});
  }
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallBackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      type: "standard",
      shape: "pill",
      theme: "filled_black",
      text: "signin_with",
      size: "medium",
      locale: "en",
      logo_alignment: "left",
      max_width: "300px",
    });
  }, [user]);
  return (
    <div>
      {Object.keys(user).length === 0 ? (
        <div id="signInDiv"></div>
      ) : (
        <div
          color="inherit"
          id="signout_button"
          onClick={(e) => handleSignOut(e)}
          size="large"
          style={{ fontSize: "18px", cursor: "pointer" }}
        >
          LogOut
        </div>
      )}
    </div>
  );
};
