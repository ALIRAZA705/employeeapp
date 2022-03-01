import React from "react";

//files
// import Settings from "./../Settings";
import DashBoard from "./DashBoard";
import SideBarMenu from "./../SideBarMenu";
import Header from "./Header";
// import { useLocation } from "react-router-dom";

function index(props) {
    // const location = useLocation();
    // const currentPath = location.pathname;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#E8EFF7",
            }}
        >
            <div style={{ flex: 1 }}>
                <SideBarMenu />
            </div>
            <div style={{ flex: 4 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ flex: 1 }}>
                        <Header />
                    </div>
                    <div style={{ flex: 4 }}>
                        {/* {currentPath == "dashboard" ? (
                            <DashBoard />
                        ) : (
                            <Settings />
                        )} */}
                        <DashBoard />
                        {/* <Settings /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
