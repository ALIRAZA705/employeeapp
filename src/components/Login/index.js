import React from "react";
import LandingPage from "./LandingPage";
import Login from "./Login";
//material ui

function index(props) {
    const [loginRole, setLoginRole] = React.useState("");
    const handleChildRole = (role) => {
        console.log("roles selected in child", role, setLoginRole);
        setLoginRole(role);
    };
    return loginRole != "" ? (
        <Login loginRole={loginRole} handleChildRole={handleChildRole} />
    ) : (
        <LandingPage handleChildRole={handleChildRole} />
    );
}

export default index;
