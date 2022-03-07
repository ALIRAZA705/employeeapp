import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@material-ui/core/styles";
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
            justifyContent="space-between"
            sx={{ py: 2, px: 2 }}
            xs={12}
        >
            {/* avatar */}
            <Grid item>
                <Grid
                    item
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <Grid item>
                        <Avatar
                            variant="circle"
                            src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                    </Grid>

                    <Grid item>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography
                                    variant="v6"
                                    style={{
                                        color: "black",
                                        fontSize: "15px",
                                        marginLeft: "10px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Ali Raza
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="v6"
                                    style={{
                                        color: "black",
                                        fontSize: "10px",
                                        marginLeft: "10px",
                                    }}
                                >
                                    Developer
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* amount next */}
            <Grid item>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <IconButton
                        size="small"
                        style={{ backgroundColor: "#CCDDF6" }}
                    >
                        <EmailIcon style={{ color: "#568FE1" }} size="small" />
                    </IconButton>
                    <Typography
                        variant="v6"
                        style={{
                            color: "black",
                            fontSize: "10px",
                            marginLeft: "10px",
                        }}
                    >
                        ali.raza@servicesymphony.con
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography
                    variant="v6"
                    style={{
                        color: "#568FE1",
                        fontSize: "12px",
                        marginLeft: "10px",
                        fontWeight: "bold",
                    }}
                >
                    $ 650,456
                </Typography>
            </Grid>

            <Grid item>
                <Typography
                    variant="v6"
                    style={{
                        color: "grey",
                        fontSize: "12px",
                        marginLeft: "10px",
                    }}
                >
                    See Allg
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
                sx={{ mx: 2, mt: 2 }}
            >
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="h3" className={classes.text}>
                                Employee Summary
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="v6"
                                className={classes.text}
                                fontSize="12px"
                                color="gray"
                            >
                                you have 72 Employess
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant="v6"
                        style={{ color: "grey", fontSize: "12px" }}
                    >
                        See All
                    </Typography>
                </Grid>
            </Grid>

            {recentPayments.map((data) => {
                return <EmployeSummaryGrid data={data} key={data} />;
            })}

            {/* </Grid> */}
        </Paper>
    );
}

export default EmployeeSummary;
