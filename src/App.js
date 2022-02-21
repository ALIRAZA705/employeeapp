import "./App.css";
import React from "react";
import SideBarMenu from "./components/screens/SideBarMenu";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import DashBoard from "./components/screens/DashBoard";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./components/screens/Login";
import GoogleAuth from "./components/screens/GoogleAuth";
import LoginDemo from "./components/screens/LoginDemo";

const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
}));

function PrivateRoute({ Component }) {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken != null && accessToken != undefined ? (
    <Component />
  ) : (
    <Navigate to="/" />
  );
}
function App(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginDemo />} />

        <Route
          path="/dashboard"
          element={<PrivateRoute Component={DashBoard} />}
        />
      </Routes>
      {/* <CssBaseline /> */}
    </>
    // <div style={{ display: "flex", flexDirection: "row" }}>
    //   <div style={{ flex: 1 }}>
    //     <SideBarMenu />
    //   </div>
    //   <div style={{ flex: 4, background: "#E8EFF7" }}>
    //     <DashBoard />
    //   </div>
    //   <CssBaseline />
    // </div>
  );
}

export default App;
