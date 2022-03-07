import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter } from "react-router-dom";
// material ui
import { createTheme, ThemeProvider } from "@mui/material/styles";

// if (process.env.REACT_APP_ENV != "development") console.log = () => {};

const Theme = createTheme({
    palette: {
        text: {
            secondary: "#FFFFFF",
        },
    },

    typography: {
        useNextVariants: true,

        h6: {
            fontSize: 20,
            fontWeight: "bold",

            // color: "#3A80B2",
            letterSpacing: "0.0075em",
        },
        h4: {
            fontSize: "35px",
            fontWeight: "bold",
        },
        //titles
        h3: {
            fontSize: "18px",
            fontWeight: "bold",
        },
    },

    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: 5,
                    height: "100%",
                    borderRadius: 15,
                },
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
