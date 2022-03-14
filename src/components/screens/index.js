import React from "react";

//files
// import Settings from "./../Settings";
// import DashBoard from "./DashBoard/DashBoard";
// import Settings from "./Settings";
import SideBarMenu from "./SideBarMenu";
import Header from "./DashBoard/Header";
import { Outlet } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "./Scroll.css";

function index(props) {
    // const location = useLocation();
    // const currentPath = location.pathname;

    return (
        <div
            // className="scrollbar-hidden"
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
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <Header />
                    </div>
                    <div
                        style={{
                            flex: 4,
                            overflowY: "scroll",
                            position: "relative",
                            maxHeight: "90vh",
                        }}
                    >
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
