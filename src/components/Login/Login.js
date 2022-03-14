import React from "react";
//material ui
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
//redux
import { useSelector, useDispatch } from "react-redux";
// redux actions
import { AuthUser } from "../../store/actions/AuthUser";
//router
import { useNavigate } from "react-router-dom";
// files
import GoogleAuth from "../screens/GoogleAuth";
//icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//constant
const userCredentials = {
    email: "",
    password: "",
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
            color: "black",
        },
        "&.MuiCheckbox-root.Mui-checked": {
            color: "#186AA5",
        },
    },
}));

function Login(props) {
    //props
    const { loginRole, handleChildRole } = props;
    //constants
    const classes = useStyles();
    let history = useNavigate();
    //redux
    const dispatch = useDispatch();
    // redux state
    const authUserData = useSelector((state) => state.AuthUser.authUserData);
    // component state
    const [userCredential, setUserCredential] = React.useState(userCredentials);

    //functions
    const loginHandler = () => {
        dispatch(
            AuthUser({
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
    //lifecycle methods
    React.useEffect(() => {
        console.log("here is auth in login", authUserData, history);
        let accesstoken = localStorage.getItem("accessToken");
        if (accesstoken != null && accesstoken != "undefined") {
            history("/main/dashboard");
        } else {
            history("/");
        }
    }, [authUserData]);

    React.useEffect(() => {
        console.log("here is the user credentials:", userCredential);
    }, [userCredential]);

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#E8EFF7" }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item xs={1} textAlign="center" sx={{ mt: 3 }}>
                    <ArrowBackIcon
                        onClick={() => {
                            handleChildRole("");
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <Typography
                        variant="h1"
                        style={{ color: "#73AAD4", fontWeight: "500" }}
                    >
                        {loginRole} Login
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 300,
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="User Name"
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
                        <Button
                            style={{ background: "#186AA5", color: "white" }}
                            fullWidth={true}
                            onClick={loginHandler}
                        >
                            SIGN IN
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
        </div>
    );
}

export default Login;
