import React from "react";
//material ui
import { Grid, Typography, Paper, Box, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
//router
import { useNavigate, Outlet } from "react-router-dom";

// styles
const useStyles = makeStyles((theme) => ({
    text: {
        color: "#186AA5",
        textAlign: "center",
    },
}));

function Index(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    console.log("here is navigate", classes, navigate);

    // local state
    const [option, selectedOption] = React.useState("runpayroll");

    // functions

    const handleSelectOption = (opt) => {
        selectedOption(opt);
        navigate(`${opt.toLowerCase()}`);
    };

    return (
        <Grid container direction="row" sx={{ mt: 3 }}>
            <Grid item container direction="row">
                <Grid item>
                    <Typography variant="h4">Payroll</Typography>
                    <Typography variant="h6" sx={{ color: "#232323" }}>
                        {" "}
                        Run Payroll 01-01-2022 to 01-01-2022 is pending{" "}
                    </Typography>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
            <Grid item container direction="row" xs={12} sx={{ mt: 3 }}>
                <Grid item xs={11.5}>
                    <Paper>
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ pt: 3, pb: 1 }}
                        >
                            <Grid item xs={7}>
                                <Box>
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                    >
                                        <Grid item>
                                            <Typography
                                                variant="h6"
                                                color="gray"
                                                onClick={() => {
                                                    handleSelectOption(
                                                        "runpayroll"
                                                    );
                                                }}
                                            >
                                                Run Payroll
                                            </Typography>
                                            {option == "runpayroll" && (
                                                <Divider
                                                    sx={{
                                                        mt: 1,
                                                        borderBottomWidth: 3,
                                                    }}
                                                    color="#6B9CE3"
                                                />
                                            )}
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="h6"
                                                color="gray"
                                                onClick={() => {
                                                    handleSelectOption(
                                                        "payrollhistory"
                                                    );
                                                }}
                                            >
                                                Payroll History
                                            </Typography>
                                            {option == "payrollhistory" && (
                                                <Divider
                                                    sx={{
                                                        mt: 1,
                                                        borderBottomWidth: 3,
                                                    }}
                                                    color="#6B9CE3"
                                                />
                                            )}
                                        </Grid>
                                        <Grid item>
                                            {/* <Typography>Run Payroll</Typography> */}
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Box>
                            </Grid>
                            <Divider />
                            {/* <Grid item xs={4}>
                                <Box></Box>
                            </Grid> */}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Outlet />
        </Grid>
    );
}

export default Index;
