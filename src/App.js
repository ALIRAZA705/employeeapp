import React from "react";
// material ui
// import { CssBaseline } from "@mui/material";
// routes
import { useRoutes, Navigate } from "react-router-dom";

// components
import DashBoard from "./components/screens/DashBoard/DashBoard";
import Settings from "../src/components/screens/Settings";
import Login from "./components/Login";
import AppScafolding from "../src/components/screens";
import Workforce from "./components/screens/Workforce";
import EmployeeProfile from "./components/screens/Workforce/EmployDetails/EmployeeProfile";
import SalaryDetails from "./components/screens/Workforce/EmployDetails/SalaryDetails";
import Overview from "./components/screens/Workforce/EmployDetails/Overview";
import EmployeeExperience from "./components/screens/Workforce/EmployDetails/EmployeeExperience";
import Payroll from "./components/screens/Payroll";
import RunPayroll from "./components/screens/Payroll/RunPayroll";
import PayrollHistory from "./components/screens/Payroll/PayrollHistory";
import Profile from "./components/screens/Settings/Profile";
import ManageRoles from "./components/screens/Settings/ManageRoles";
import CompanyProfile from "./components/screens/Settings/CompanyProfile";

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
    // redux state
    // const loggedInUser = localStorage.getItem("loggedInUser");
    let element = useRoutes([
        { path: "/", element: <Login /> },
        {
            path: "main",
            element: <PrivateRoute Component={AppScafolding} />,
            children: [
                {
                    path: "dashboard",
                    element: <DashBoard />,
                },
                { path: "workforce", element: <Workforce /> },
                {
                    path: "employeeProfile",
                    element: <EmployeeProfile />,
                    children: [
                        { path: "salaryDetails", element: <SalaryDetails /> },
                        { path: "overview", element: <Overview /> },
                        { path: "experience", element: <EmployeeExperience /> },
                    ],
                },
                {
                    path: "payroll",
                    element: <Payroll />,
                    children: [
                        { path: "runpayroll", element: <RunPayroll /> },
                        { path: "payrollhistory", element: <PayrollHistory /> },
                    ],
                },
                {
                    path: "settings",
                    element: <Settings />,
                    children: [
                        { path: "profile", element: <Profile /> },
                        { path: "manageroles", element: <ManageRoles /> },
                        { path: "companyprofile", element: <CompanyProfile /> },
                    ],
                },
            ],
        },
    ]);

    return element;
}

export default App;
