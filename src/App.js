import React from "react";
// material ui
// import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@mui/material";
// redux
// import { useDispatch } from "react-redux";
// routes
import { Routes, Route, Navigate } from "react-router-dom";
// files
import DashBoard from "./components/screens/DashBoard";
// import SideBarMenu from "./components/screens/SideBarMenu";
// import Login from "./components/screens/Login";
import Settings from "../src/components/screens/Settings";

//styles
// const useStyles = makeStyles((theme) => ({
//     appMain: {
//         paddingLeft: "320px",
//         width: "100%",
//     },
// }));
// console.log("here is styles:", useStyles);

function PrivateRoute({ Component }) {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken != null && accessToken != undefined ? (
        <Component />
    ) : (
        <Navigate to="/" />
    );
}
function App(props) {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<DashBoard />} />
                <Route exact path="/settings" element={<Settings />} />
                <Route
                    path="/dashboard"
                    element={<PrivateRoute Component={DashBoard} />}
                />
            </Routes>

            <CssBaseline />
        </>
    );
}

export default App;
