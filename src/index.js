import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter } from "react-router-dom";
// material ui
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

// if (process.env.REACT_APP_ENV != "development") console.log = () => {};

const Theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: "#ff4400",
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        typography: {
            // fontFamily: ["Chilanka", "cursive"].join(","),
            h5: {
                fontFamily: ["Chilanka", "cursive"].join(","),
            },
            h6: {
                fontFamily: ["Chilanka", "cursive"].join(","),
            },
        },
    },
});
const store = configureStore();
ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <Provider store={store}>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
