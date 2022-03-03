import React from "react";
// material ui
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

import RecentPayments from "./RecentPayments";
import PayrollSummary from "./PayrollSummary";
import EmployeeSummary from "./EmployeeSummary";
// styles
const useStyles = makeStyles((theme) => ({
    button: {
        "&.MuiButton-root": {
            padding: "0px 5px",
        },
    },
    text: {
        color: "#186AA5",
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
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-end"
            >
                {/* <Grid item>
                <Typography
                    variant="v6"
                    fontWeight="bold"
                    color="#3A80B2"
                    fontSize="32px"
                >
                    WELCOME back, Oscar jr
                </Typography>
            </Grid> */}

                <Grid item xs={4.5} container direction="column">
                    <Typography
                        variant="v6"
                        fontWeight="bold"
                        color="#3A80B2"
                        fontSize="32px"
                    >
                        WELCOME back, Oscar jr
                    </Typography>
                    <Typography variant="v6" color="#A5C4DC" fontSize="20px">
                        Run Payroll 01-01-2022 to 01-01-2022 is pending
                    </Typography>
                </Grid>

                <Grid item xs={1.5}>
                    <Button
                        variant="outlined"
                        fullWidth={true}
                        style={{
                            color: "#8CB4D2",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            borderRadius: 5,
                        }}
                        className={classes.button}
                    >
                        Outlined
                    </Button>
                </Grid>
                <Grid item xs={2.5}>
                    {" "}
                </Grid>
                <Grid item xs={3}>
                    <Paper
                        sx={{
                            height: "100%",
                            padding: 1,
                            borderRadius: "15px",
                        }}
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="space-evenly"
                            xs={12}
                        >
                            <Grid item>
                                <DateRangeIcon
                                    style={{ color: "blue", marginTop: 0 }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography style={{ fontWeight: "bold" }}>
                                    Change Password
                                </Typography>
                                <Typography
                                    style={{ fontSize: "12px", color: "grey" }}
                                >
                                    August 28th-October 28th, 2020
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ArrowDropDownIcon style={{ color: "grey" }} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid
                conatiner
                direction="colummn"
                alignItems="flex-start"
                justifyContent="flex-start"
                sx={{ mt: 3 }}
            >
                <Grid item container>
                    {/* <Grid item xs={1}></Grid> */}
                    <Grid item xs={7} container>
                        <Grid item xs={12} container direction="row">
                            <Grid item xs={12}>
                                <Grid item container>
                                    <Grid item xs={8}>
                                        <Paper
                                            style={{
                                                height: "100%",
                                                borderRadius: "15px",
                                                padding: 5,
                                            }}
                                        >
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
                                                        fontWeight="bold"
                                                        variant="h6"
                                                        // fontFamily="Chilanka"
                                                    >
                                                        Total Payroll
                                                    </Typography>
                                                    <Typography
                                                        className={classes.text}
                                                        fontSize="25px"
                                                        fontWeight="bold"
                                                    >
                                                        $ 21,5567
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography
                                                        className={classes.text}
                                                        fontSize="12px"
                                                    >
                                                        Payment Date
                                                    </Typography>
                                                    <Typography
                                                        className={classes.text}
                                                        fontSize="14px"
                                                        fontWeight="bold"
                                                    >
                                                        31/06/2020
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={3}>
                                        <Paper
                                            style={{
                                                height: "100%",
                                                padding: 5,
                                                borderRadius: "15px",
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                justifyContent="space-around"
                                                alignItems="center"
                                                height="100%"
                                            >
                                                <Grid item>
                                                    {/* <div
                                                        style={{
                                                            height: "35px",
                                                            width: "35px",
                                                            borderRadius:
                                                                "50px",
                                                            backgroundColor:
                                                                "#C8EFF7",
                                                            padding: 5,
                                                        }}
                                                    >
                                                        <PeopleOutlineIcon />
                                                    </div> */}
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
                                                        fontWeight="bold"
                                                        fontSize="15px"
                                                        fontFamily="Chilanka"
                                                    >
                                                        Total Employes
                                                    </Typography>
                                                    <Typography
                                                        className={classes.text}
                                                        fontWeight="bold"
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
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            {" "}
                            <EmployeeSummary />
                        </Grid>
                    </Grid>
                    <Grid item xs={1 / 2}></Grid>

                    <Grid item xs={4} conatiner>
                        {/* <Grid item container direction="row">
                            <Grid item height="100%">
                                aa
                            </Grid>
                            <Grid item>aa</Grid>
                        </Grid> */}
                        {/* <Grid item xs={12} container direction="column"> */}
                        <Grid item container direction="column">
                            <Grid item style={{ height: "100%" }}>
                                <Paper
                                    style={{
                                        height: "100%",
                                        borderRadius: "15px",
                                        padding: 5,
                                    }}
                                >
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
                                                fontWeight="bold"
                                                variant="h6"
                                                // fontFamily="Chilanka"
                                            >
                                                Total Payroll
                                            </Typography>
                                            <Typography
                                                className={classes.text}
                                                fontSize="25px"
                                                fontWeight="bold"
                                            >
                                                $ 21,5567
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                className={classes.text}
                                                fontSize="12px"
                                            >
                                                Payment Date
                                            </Typography>
                                            <Typography
                                                className={classes.text}
                                                fontSize="14px"
                                                fontWeight="bold"
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
                            <Grid item>
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
