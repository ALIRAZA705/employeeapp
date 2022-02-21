import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockClockIcon from "@mui/icons-material/LockClock";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loggedInUserInfo } from "../../store/actions/LoggedInUserInfo";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import GoogleAuth from "./GoogleAuth";
const userCredentials = {
  userName: "",
  email: "",
  password: "",
  mobileNumber: "",
};
const useStyles = makeStyles((theme) => ({
  paper: {
    width: "350px",
    // height: "80vh",
    margin: "30px auto",
    padding: "15px",
  },

  labelTextField: {
    textAlign: "left",
  },
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LoginDemo(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useNavigate();

  const [userCredential, setUserCredential] = React.useState(userCredentials);
  const loggedInUserData = useSelector(
    (state) => state.LoggedInUserInfo.loggedInUserData
  );

  const loginHandler = () => {
    dispatch(
      loggedInUserInfo({
        userCredential,
      })
    );
  };
  React.useEffect(() => {
    let accesstoken = localStorage.getItem("accessToken");
    // accesstoken = JSON.stringify(accesstoken);
    console.log("here is the acc", accesstoken);
    if (accesstoken != null && accesstoken != "undefined") {
      console.log("if check true");
      history("/dashboard");
    } else {
      history("/");
    }
  }, [loggedInUserData]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUserCredential({
      ...userCredential,
      [event.target.name]: value,
    });
  };

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
            textAlign="center"
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

export default LoginDemo;
