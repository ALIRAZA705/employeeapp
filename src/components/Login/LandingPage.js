import React from "react";
//material ui
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// styles
const useStyles = makeStyles((theme) => ({
    loginButton: {
        marginTop: "15px",
        borderRadius: 10,
        color: "white",
        backgroundColor: "#73AAD4",
        cursor: "pointer",
    },
    role: {
        color: "#73AAD4",
        fontWeight: "500",
    },
}));

function LandingPage(props) {
    const { handleChildRole } = props;
    const classes = useStyles();

    //local state
    const [loginRole, setLoginRole] = React.useState("");
    //function
    const handleROleSelect = (role) => {
        console.log("here is role selected", role, loginRole);
        setLoginRole(role);
        handleChildRole(role);
    };

    return (
        <Grid
            style={{ backgroundColor: "#E8EFF7", minHeight: "100vh" }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
        >
            <Grid item xs={12}>
                <Box>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        xs={12}
                    >
                        <Grid item>
                            <Typography variant="h6" className={classes.role}>
                                ADMIN
                            </Typography>
                            <Button
                                variant="outlined"
                                className={classes.loginButton}
                                onClick={() => handleROleSelect("Admin")}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item textAlign="center">
                            <Typography
                                variant="h6"
                                className={classes.role}
                                color="blue"
                            >
                                EDGE
                            </Typography>
                            <Button
                                variant="outlined"
                                className={classes.loginButton}
                                onClick={() => handleROleSelect("Edge")}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" className={classes.role}>
                                CUSTOMER
                            </Typography>
                            <Button
                                variant="outlined"
                                className={classes.loginButton}
                                onClick={() => handleROleSelect("Manager")}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default LandingPage;
