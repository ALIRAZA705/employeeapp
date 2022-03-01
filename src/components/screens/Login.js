import React from "react";
//material ui
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loggedInUserInfo } from "../../store/actions/LoggedInUserInfo";
//router
import { useNavigate } from "react-router-dom";
// files
import GoogleAuth from "./GoogleAuth";

//constant
const userCredentials = {
    userName: "",
    email: "",
    password: "",
    mobileNumber: "",
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// styles
const useStyles = makeStyles((theme) => ({
    TextField: {
        marginTop: "0.2vh",
        marginBottom: "2vh",
        transition: "0.5s all",
        width: "100% !important",
        background: "white",
        "& .MuiInputLabel-outlined": {
            color: "#73A1C2",
        },
    },

    Checkbox: {
        "&.MuiCheckbox-root": {
            color: "white",
        },
        "&.MuiCheckbox-root.Mui-checked": {
            color: "#186AA5",
        },
    },
}));

function Login(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    let history = useNavigate();

    // component state
    const [userCredential, setUserCredential] = React.useState(userCredentials);
    const [value, setValue] = React.useState(1);

    // redux state
    const loggedInUserData = useSelector(
        (state) => state.LoggedInUserInfo.loggedInUserData
    );

    //functions
    const loginHandler = () => {
        dispatch(
            loggedInUserInfo({
                userCredential,
            })
        );
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setUserCredential({
            ...userCredential,
            [event.target.name]: value,
        });
    };

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    //lifecycle methods
    React.useEffect(() => {
        let accesstoken = localStorage.getItem("accessToken");
        // accesstoken = JSON.stringify(accesstoken);
        console.log("here is the acc", accesstoken);
        if (accesstoken != null && accesstoken != "undefined") {
            history("/dashboard");
        } else {
            history("/");
        }
    }, [loggedInUserData]);

    React.useEffect(() => {
        console.log("here is the user credentials:", userCredential);
    }, [userCredential]);

    return (
        <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh", backgroundColor: "#E8EFF7" }}
        >
            <Grid item>
                <Tabs
                    value={value}
                    onChange={handleTabChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="LOGIN" />

                    <Tab label="SIGNUP" />
                </Tabs>
            </Grid>

            <Grid item xs={4}>
                <Box
                    sx={{
                        width: 300,
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth={true}
                        className={classes.TextField}
                        onChange={handleInputChange}
                    />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box
                    sx={{
                        width: 300,
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        name="password"
                        variant="outlined"
                        fullWidth={true}
                        className={classes.TextField}
                        onChange={handleInputChange}
                    />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box
                    sx={{
                        width: 300,
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Repeat Password"
                        name="repeatPassword"
                        variant="outlined"
                        fullWidth={true}
                        className={classes.TextField}
                        onChange={handleInputChange}
                    />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box
                    sx={{
                        width: 300,
                    }}
                >
                    <Button
                        style={{ background: "#186AA5", color: "white" }}
                        fullWidth={true}
                        onClick={loginHandler}
                    >
                        SIGN UP
                    </Button>
                </Box>
            </Grid>
            <Grid
                item
                xs={4}
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <Checkbox {...label} className={classes.Checkbox} />
                </Grid>
                <Grid item>
                    <Typography color="#B3CBDE">
                        I agree to the terms and conditions
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={4}>
                <Box
                    sx={{
                        width: 300,
                    }}
                >
                    <Typography textAlign="center" color="#186AA5">
                        Or
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={4}>
                <GoogleAuth />
            </Grid>
        </Grid>
    );
}

export default Login;
