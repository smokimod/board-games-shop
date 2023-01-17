import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../../Redux/reducers/authReducer";
import { cartClear } from "../../Redux/reducers/cartReducers";
import { GoogleLogin } from "@react-oauth/google";

export const GoogleAuth = () => {
  const authInfo = useSelector((state) => state.auth.userId);
  const isAuth = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut(null));
  };

  useEffect(() => {
    function clearAfterLogout() {
      return isAuth ? null : dispatch(cartClear([]));
    }
    clearAfterLogout();
    localStorage.setItem("user", JSON.stringify(authInfo));
  }, [authInfo, isAuth, dispatch]);

  return (
    <div>
      {authInfo ? (
        <div
          color="inherit"
          id="signout_button"
          onClick={(e) => handleSignOut(e)}
          size="large"
          style={{ fontSize: "18px", cursor: "pointer" }}
        >
          LogOut
        </div>
      ) : (
        <GoogleLogin
          theme={"filled_black"}
          size="large"
          text="Sign in with Google"
          shape="pill"
          locale="en"
          width="150px"
          onSuccess={(credentialResponse) => {
            let userObject = jwt_decode(credentialResponse.credential);
            dispatch(signIn(userObject));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      )}
    </div>
  );
};
