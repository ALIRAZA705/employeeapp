import React from "react";
//google auth
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
// material ui
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
//router
import { useNavigate } from "react-router-dom";
//icons
import GoogleIcon from "@mui/icons-material/Google";

function GoogleAuth() {
    let history = useNavigate();

    //functions
    const onLoginSuccess = async (googleData) => {
        console.log("here is googleData", googleData);
        const res = await fetch("http://localhost:3001/auth/google", {
            method: "POST",
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.status == 200) {
            localStorage.setItem("accessToken", JSON.stringify(googleData));
            history("/dashboard");
        } else {
            localStorage.removeItem("accessToken");
            history("/");
        }
    };

    const onLoginFailure = (response) => {
        localStorage.removeItem("accessToken");
        history("/");
    };

    const handlelogout = (response) => {
        const auth2 = gapi.auth2.getAuthInstance();

        if (auth2 != null) {
            auth2
                .signOut()
                .then(
                    auth2
                        .disconnect()
                        .then(localStorage.removeItem("accessToken"))
                );
        } else {
            console.log("here is failure");
        }
    };

    return (
        <>
            <GoogleLogin
                clientId="953999418916-g6ht104mq1rdooi3iickb4olava8qj3k.apps.googleusercontent.com"
                accessType="offline"
                approvalPrompt="force"
                prompt="consent"
                responseType="code"
                render={(renderProps) => (
                    <Box
                        sx={{
                            width: 300,
                        }}
                    >
                        <Button
                            style={{ background: "#D1E4F3", color: "#186AA5" }}
                            fullWidth={true}
                            onClick={renderProps.onClick}
                        >
                            <GoogleIcon />
                        </Button>
                    </Box>
                )}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
            />
            <button type="button" onClick={handlelogout}>
                Logout
            </button>
        </>
    );
}
export default GoogleAuth;
