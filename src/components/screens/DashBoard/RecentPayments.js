import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { makeStyles } from "@material-ui/core/styles";
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
const recentPayments = [1, 2, 3, 4, 5, 6, 7];
function RecentPayments(props) {
    const classes = useStyles();
    return (
        <Paper style={{ height: "100%", borderRadius: "15px" }}>
            <Grid
                item
                container
                xs={11}
                justifyContent="space-between"
                sx={{ py: 2, mx: 2, mt: 2 }}
            >
                <Typography variant="v6" className={classes.text}>
                    Recent Payments
                </Typography>

                <Typography
                    variant="v6"
                    style={{ color: "grey", fontSize: "12px" }}
                >
                    See All
                </Typography>
            </Grid>

            {recentPayments.map((data) => {
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
                                alignItems="flex-start"
                                justifyContent="flex-start"
                            >
                                <Grid item>
                                    <Avatar
                                        variant="rounded"
                                        src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    />
                                </Grid>
                                {/* <Grid item container direction="column"> */}
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
                                                    color: "blue",
                                                    fontSize: "12px",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                #INV-0088776
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="v6"
                                                style={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                Ali Raza
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
                                alignItems="flex-start"
                                justifyContent="flex-start"
                            >
                                <Grid item>
                                    <BookmarkIcon />
                                </Grid>
                                {/* <Grid item container direction="column"> */}
                                <Grid item>
                                    <Grid
                                        item
                                        container
                                        direction="column"
                                        alignItems="flex-start"
                                    >
                                        <Grid item>
                                            <Typography
                                                variant="v6"
                                                style={{
                                                    color: "grey",
                                                    fontSize: "12px",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                Amount
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="v6"
                                                style={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                $ 12345
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
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
            })}

            {/* </Grid> */}
        </Paper>
    );
}

export default RecentPayments;
