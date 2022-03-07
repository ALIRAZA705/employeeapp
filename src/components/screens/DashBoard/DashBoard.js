import React from "react";
// material ui
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
// icons

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// files
import RecentPayments from "./RecentPayments";
import PayrollSummary from "./PayrollSummary";
import EmployeeSummary from "./EmployeeSummary";
import DashBoardHeader from "./DashBoardHeader";
// styles
const useStyles = makeStyles((theme) => ({
    button: {
        "&.MuiButton-root": {
            padding: "0px 5px",
        },
    },
    text: {
        // color: "#186AA5",
        textAlign: "center",
    },
    paper_: {
        height: "100%",
        borderRadius: "15px",
        padding: 5,
    },
}));
// const recentPayments = [1, 2, 3, 4, 5, 6, 7];

function DashBoard(props) {
    const classes = useStyles();
    return (
        <>
            <DashBoardHeader />
            <Grid
                conatiner
                direction="colummn"
                alignItems="flex-start"
                justifyContent="flex-start"
                sx={{ mt: 3 }}
            >
                <Grid item container>
                    <Grid item xs={7} container>
                        <Grid item xs={12} container direction="row">
                            <Grid item xs={12}>
                                <Grid item container>
                                    <Grid item xs={7}>
                                        <Paper>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="space-around"
                                                alignItems="center"
                                                height="100%"
                                            >
                                                <Grid item>
                                                    <Typography
                                                        className={classes.text}
                                                        variant="h6"
                                                    >
                                                        Total Payroll
                                                    </Typography>
                                                    <Typography
                                                        className={classes.text}
                                                        fontSize="22px"
                                                        variant="h6"
                                                    >
                                                        $ 21,5567
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography
                                                        className={classes.text}
                                                        fontSize="15px"
                                                        fontWeight="bold"
                                                    >
                                                        Payment Date
                                                    </Typography>
                                                    <Typography
                                                        className={classes.text}
                                                        fontSize="16px"
                                                        fontWeight="bold"
                                                        color="#F65D6B"
                                                    >
                                                        31/06/2020
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={4}>
                                        <Paper>
                                            <Grid
                                                item
                                                container
                                                justifyContent="space-around"
                                                alignItems="center"
                                                height="100%"
                                            >
                                                <Grid item>
                                                    <IconButton
                                                        size="medium"
                                                        style={{
                                                            backgroundColor:
                                                                "#CCDDF6",
                                                        }}
                                                    >
                                                        <PeopleOutlineIcon
                                                            style={{
                                                                color: "#568FE1",
                                                            }}
                                                            size="medium"
                                                        />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item>
                                                    <Typography
                                                        className={classes.text}
                                                        variant="h6"
                                                    >
                                                        Total Employes
                                                    </Typography>
                                                    <Typography
                                                        className={classes.text}
                                                        variant="h6"
                                                        textAlign="start"
                                                    >
                                                        72
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            {" "}
                            <PayrollSummary />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
                            {" "}
                            <EmployeeSummary />
                        </Grid>
                    </Grid>
                    <Grid item xs={1 / 2}></Grid>

                    <Grid item xs={4} conatiner>
                        <Grid item container direction="column">
                            <Grid item style={{ height: "100%" }}>
                                <Paper style={{ height: "100%" }}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        height="100%"
                                    >
                                        <Grid item>
                                            <Typography
                                                className={classes.text}
                                                variant="h6"
                                            >
                                                Total Payroll
                                            </Typography>
                                            <Typography
                                                className={classes.text}
                                                fontSize="22px"
                                                variant="h6"
                                            >
                                                $ 21,5567
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                className={classes.text}
                                                fontSize="15px"
                                                fontWeight="bold"
                                            >
                                                Payment Date
                                            </Typography>
                                            <Typography
                                                className={classes.text}
                                                fontSize="16px"
                                                fontWeight="bold"
                                                color="#F65D6B"
                                            >
                                                31/06/2020
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        {/* </Grid> */}
                        <Grid
                            item
                            xs={12}
                            sx={{ mt: 3 }}
                            container
                            direction="column"
                        >
                            {" "}
                            <Grid item sx={{ pb: 3, mb: 3 }}>
                                <RecentPayments />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default DashBoard;
