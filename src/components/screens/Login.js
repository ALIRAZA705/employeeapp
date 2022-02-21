import React from "react";
import {
  Avatar,
  Button,
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
  textField: {
    marginTop: "0.2vh",
    marginBottom: "2vh",
    transition: "0.5s all",
    width: "100% !important",
  },
}));

function Login(props) {
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
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Paper elevation={3} className={classes.paper}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar style={{ backgroundColor: "#53aeea" }}>
                <LockClockIcon color="black" fontSize="md" />
              </Avatar>

              <Typography
                component="div"
                fontSize={20}
                variant="h6"
                fontWeight="bold"
              >
                SIGN IN
              </Typography>
            </Grid>

            <Grid item lg={3} md={3} xs={3}>
              <FormControl variant="outlined" style={{ width: "80%" }}>
                <label className={classes.labelTextField}>
                  <Typography variant="h6" fontSize={15}>
                    UserName
                  </Typography>
                </label>
                <TextField
                  size="small"
                  name="userName"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <FormControl variant="outlined" style={{ width: "80%" }}>
                <label className={classes.labelTextField}>
                  <Typography variant="h6" fontSize={15}>
                    Email
                  </Typography>
                </label>
                <TextField
                  size="small"
                  name="email"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <FormControl variant="outlined" style={{ width: "80%" }}>
                <label className={classes.labelTextField}>
                  <Typography variant="h6" fontSize={15}>
                    Password
                  </Typography>
                </label>
                <TextField
                  size="small"
                  name="password"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <FormControl variant="outlined" style={{ width: "80%" }}>
                <label className={classes.labelTextField}>
                  <Typography variant="h6" fontSize={15}>
                    Mobile
                  </Typography>
                </label>
                <TextField
                  size="small"
                  name="mobile"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item lg={3} md={3} xs={12} textAlign="center">
              <Button variant="outlined" onClick={loginHandler}>
                Submit
              </Button>
            </Grid>

            <Grid item lg={3} md={3} xs={12} textAlign="center">
              <GoogleAuth />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
