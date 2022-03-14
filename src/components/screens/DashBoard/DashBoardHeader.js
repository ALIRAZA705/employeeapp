import React from "react";
//material ui
import { Grid, Paper, Typography } from "@mui/material";
//styles
import { makeStyles } from "@material-ui/core/styles";
//files
import ProfleWithIcon from "../../widgets/ProfileWithIcon";

// styles
const useStyles = makeStyles((theme) => ({
    button: {
        "&.MuiButton-root": {
            padding: "0px 5px",
        },
    },
}));
//constants
const employeeDetails = {
    name: "Account manager",
    role: "aliraza30028@gmail.com",
};
function DashBoardHeader(props) {
    const classes = useStyles();
    console.log(classes);
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            sx={{ mt: 3 }}
        >
            <Grid item xs={5} container direction="column">
                <Typography variant="h1">Welcome back, Oscar jr</Typography>
                <Typography variant="h6" sx={{ color: "#232323" }}>
                    Run Payroll 01-01-2022 to 01-01-2022 is pending
                </Typography>
            </Grid>

            {/* <Grid item xs={1}>
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
            </Grid> */}
            <Grid item xs>
                {" "}
            </Grid>
            <Grid item xs={2.5}>
                <Paper
                    sx={{ pl: 2, py: 1 }}
                    // sx={{
                    //     padding: 1,
                    // }}
                >
                    {/* <Grid
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
                    </Grid> */}
                    <ProfleWithIcon data={employeeDetails} shape={"circle"} />
                </Paper>
            </Grid>
            <Grid item xs={1 / 2}></Grid>
        </Grid>
    );
}

export default DashBoardHeader;
