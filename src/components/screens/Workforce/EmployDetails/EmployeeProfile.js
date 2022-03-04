import React from "react";
// material ui
import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
// import Overview from "./Overview";

// styles
const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#568FE1",
        size: "small",
        marginTop: 2,
    },
}));
function EmployeeProfile(props) {
    const classes = useStyles();
    console.log(classes);
    return (
        <Grid container direction="row">
            <Grid item>
                <Typography variant="h5" fontWeight="bold">
                    Oscar Junior
                </Typography>
                <Typography variant="h6" color="gray">
                    ID # 0 1 2 3 1 2 3
                </Typography>
            </Grid>
            <Grid item container driection="row" xs={12} sx={{ mt: 3 }}>
                <Grid item xs={11}>
                    <Paper>
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{ p: 3 }}
                            xs={8}
                        >
                            <Grid item>
                                <Typography variant="v5" fontWeight="bold">
                                    Overview
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="v5" fontWeight="bold">
                                    Salary Details
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="v5" fontWeight="bold">
                                    Experience
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={11}>
                    <Outlet />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default EmployeeProfile;
