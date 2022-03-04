import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter } from "react-router-dom";
// material ui
// import { ThemeProvider } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { createTheme } from "@material-ui/core/styles";

// if (process.env.REACT_APP_ENV != "development") console.log = () => {};

const Theme = createTheme({
    palette: {
        text: {
            secondary: "#FFFFFF",
        },
    },

    typography: {
        useNextVariants: true,
        fontFamily: ["Chilanka", "Roboto"].join(","),
        h6: {
            fontSize: 33,

            fontWeight: 300,
            color: "#3A80B2",
            letterSpacing: "0.0075em",
        },
    },
    MUIDataTable: {
        responsiveBase: {
            padding: "10px",
        },
    },
});
const store = configureStore();
ReactDOM.render(
    <MuiThemeProvider theme={Theme}>
        <Provider store={store}>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
