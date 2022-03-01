import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@mui/material";
import Areachart from "./Graphs/Areachart";
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
}));
function PayrollSummary(props) {
    const classes = useStyles();
    return (
        <Paper>
            <Grid
                item
                container
                xs={11}
                justifyContent="space-between"
                sx={{ py: 2, my: 2, mx: 2 }}
            >
                <Typography variant="v6" className={classes.text}>
                    Payroll Summary
                </Typography>

                <Typography
                    variant="v6"
                    style={{ color: "grey", fontSize: "12px" }}
                >
                    This Year
                </Typography>
            </Grid>

            <Grid item>
                <Areachart />
            </Grid>
        </Paper>
    );
}

export default PayrollSummary;
