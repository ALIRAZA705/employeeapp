import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@material-ui/core/styles";
import AvatarIcon from "../../Icons/AvatarIcon";
import ProfleWithIcon from "../../widgets/ProfileWithIcon";
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
}));

//constants
const employeeDetails = {
    name: "Ali Raza",
    role: "Developer",
};
const recentPayments = [1, 2, 3, 4, 5, 6, 7];

// employee summary grid function
function EmployeSummaryGrid(props) {
    const { data } = props;
    return (
        <Grid
            key={data}
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ py: 2 }}
            xs={12}
        >
            <Grid item xs={3}>
                <ProfleWithIcon
                    data={employeeDetails}
                    icon={<AvatarIcon shape={"circle"} />}
                />
            </Grid>
            {/* amount next */}
            <Grid item xs={4}>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <IconButton
                        size="small"
                        style={{ backgroundColor: "#CCDDF6" }}
                    >
                        <EmailIcon style={{ color: "#568FE1" }} size="small" />
                    </IconButton>
                    <Typography
                        variant="paragraph"
                        style={{
                            color: "black",

                            marginLeft: "10px",
                        }}
                    >
                        ali.raza30028@services.com
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={3} sx={{ pl: 3 }}>
                <Typography
                    variant="paragraph"
                    style={{
                        color: "#568FE1",

                        // marginLeft: "10px",
                        fontWeight: "bold",
                    }}
                >
                    $ 650,456
                </Typography>
            </Grid>

            <Grid item xs={2} sx={{ pl: 1 }}>
                <Typography
                    variant="paragraph"
                    style={{
                        color: "grey",

                        // marginLeft: "10px",
                    }}
                >
                    See All
                </Typography>
            </Grid>
        </Grid>
    );
}

//main function
function EmployeeSummary(props) {
    const classes = useStyles();
    return (
        <Paper>
            <Grid
                item
                container
                xs={11}
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{ mx: 2, mt: 2 }}
            >
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="h6" className={classes.text}>
                                Employee Summary
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="paragraph"
                                className={classes.text}
                                // fontSize="12px"
                                color="gray"
                            >
                                you have 72 Employess
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="paragraph" style={{ color: "grey" }}>
                        See All
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                xs={12}
                direction="row"
                // justifyContent="space-between"
                // alignItems="center"
                sx={{ mx: 2, mt: 2 }}
            >
                <Grid item xs={3}>
                    <Typography variant="h6">Employee Name</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">Work Email</Typography>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6">Cost to Company</Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography variant="h6">Join date</Typography>
                </Grid>

                {recentPayments.map((data) => {
                    return <EmployeSummaryGrid data={data} key={data} />;
                })}
            </Grid>

            {/* </Grid> */}
        </Paper>
    );
}

export default EmployeeSummary;
