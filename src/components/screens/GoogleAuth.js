import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import GoogleLogout from "react-google-login";
import { gapi } from "gapi-script";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";

const responseGoogle = (response) => {
  console.log(response);
  localStorage.setItem("googleauthtoken", JSON.stringify(response));
};
const responseLogoutGoogle = (response) => {
  console.log("gere", response);
  localStorage.removeItem("googleauthtoken");
};

const responseFailureGoogle = (response) => {
  console.log("logout failure", response);
};

const logout = (response) => {
  const auth2 = gapi.auth2.getAuthInstance();

  if (auth2 != null) {
    auth2
      .signOut()
      .then(
        auth2.disconnect().then(localStorage.removeItem("googleauthtoken"))
      );
  } else {
    console.log("here is failure");
  }
};

function GoogleAuth() {
  return (
    <>
      <GoogleLogin
        clientId="953999418916-g6ht104mq1rdooi3iickb4olava8qj3k.apps.googleusercontent.com"
        render={(renderProps) => (
          <Box
            sx={{
              width: 300,
            }}
          >
            <Button
              style={{ background: "#D1E4F3", color: "#186AA5" }}
              textAlign="center"
              fullWidth={true}
              onClick={renderProps.onClick}
            >
              <GoogleIcon />
            </Button>
          </Box>
          // <Button onClick={renderProps.onClick}>Login With Google</Button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <button type="button" class="btn btn-danger btn-sm" onClick={logout}>
        Logout
      </button>
    </>
  );
}
export default GoogleAuth;
