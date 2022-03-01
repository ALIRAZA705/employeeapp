import React from "react";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@mui/material";
import Profile from "./Profile";
import ManageUser from "./ManageUser";

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#E8EFF7",
    },
    headings: {
        color: "#186AA5",
        fontSize: 20,
        // fontWeight: "bold",
    },
    title: {
        color: "#8DB5D3",
    },
    selectedTitle: {
        height: 4,
        backgroundColor: "#518EBB",
        border: "none",
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
}));

function index(props) {
    const classes = useStyles();
    // component state
    const [selectedTitle, setSelectedTitle] = React.useState("Profile");
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <Typography
                        className={classes.headings}
                        variant="h4"
                        // sx={{ mx: 4 }}
                    >
                        Settings
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                xs={7}
                sx={{ mt: 5 }}
            >
                {/* <Grid item xs={1}></Grid> */}
                <Grid item>
                    <Typography
                        className={classes.title}
                        variant="h6"
                        onClick={() => setSelectedTitle("Profile")}
                    >
                        Profile
                    </Typography>
                    {selectedTitle == "Profile" && (
                        <hr className={classes.selectedTitle} />
                    )}
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.title}
                        variant="h6"
                        onClick={() => setSelectedTitle("Manage Roles")}
                    >
                        Manage Roles
                    </Typography>
                    {selectedTitle == "Manage Roles" && (
                        <hr className={classes.selectedTitle} />
                    )}
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.title}
                        variant="h6"
                        onClick={() => setSelectedTitle("Company Profile")}
                    >
                        Company Profile
                    </Typography>
                    {selectedTitle == "Company Profile" && (
                        <hr className={classes.selectedTitle} />
                    )}
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                xs={11}
                md={11}
                lg={11}
                sx={{ height: "70vh", overflow: "scroll" }}
            >
                <Paper sx={{ width: "100%" }}>
                    {selectedTitle == "Profile" ? (
                        <Grid
                            item
                            container
                            xs={12}
                            md={12}
                            lg={12}
                            direction="row"
                        >
                            <Profile />
                        </Grid>
                    ) : selectedTitle == "Manage Roles" ? (
                        <Grid item>
                            <ManageUser />
                        </Grid>
                    ) : null}
                </Paper>
            </Grid>
        </>
    );
}

export default index;
