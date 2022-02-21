import React from "react";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@mui/material";
// redux
import { useDispatch } from "react-redux";
// routes
import { Routes, Route, Navigate, Link } from "react-router-dom";
// files
import DashBoard from "./components/screens/DashBoard";
import Login from "./components/screens/Login";

//styles
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
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<PrivateRoute Component={DashBoard} />}
        />
      </Routes>
      <CssBaseline />
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
