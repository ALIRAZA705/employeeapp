import React from "react";
// material ui
// import { CssBaseline } from "@mui/material";
// routes
import { useRoutes, Navigate } from "react-router-dom";
// components
import DashBoard from "./components/screens/DashBoard/DashBoard";
import Settings from "../src/components/screens/Settings";
import Login from "./components/screens/Login";
import AppScafolding from "../src/components/screens";
import Workforce from "./components/screens/Workforce";
import EmployeeProfile from "./components/screens/Workforce/EmployDetails/EmployeeProfile";
import SalaryDetails from "./components/screens/Workforce/EmployDetails/SalaryDetails";
import Overview from "./components/screens/Workforce/EmployDetails/Overview";

//functions
function PrivateRoute({ Component }) {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken != null && accessToken != undefined ? (
        <Component />
    ) : (
        <Navigate to="/" />
    );
}

function App(props) {
    let element = useRoutes([
        { path: "/", element: <Login /> },
        {
            path: "main",
            element: <AppScafolding />,
            children: [
                { path: "dashboard", element: <DashBoard /> },
                { path: "workforce", element: <Workforce /> },
                {
                    path: "employeeProfile",
                    element: <EmployeeProfile />,
                    children: [
                        { path: "salaryDetails", element: <SalaryDetails /> },
                        { path: "overview", element: <Overview /> },
                    ],
                },

                {
                    path: "settings",
                    element: <PrivateRoute Component={Settings} />,
                },
            ],
        },
    ]);

    return element;
}

export default App;
