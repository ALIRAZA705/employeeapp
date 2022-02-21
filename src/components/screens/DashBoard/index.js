import { SentimentVeryDissatisfiedSharp } from "@mui/icons-material";
import React from "react";
import DashBoard from "./DashBoard";
import Header from "./Header";

function index(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1 }}>
        <Header />
      </div>
      <div style={{ flex: 2 }}>
        <DashBoard />
      </div>
    </div>
  );
}

export default index;
