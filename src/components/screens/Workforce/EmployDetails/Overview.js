import React from "react";
// material ui
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
//widgets
import EmailWithIcon from "../../../widgets/EmailWithIcon";
//icons
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";

// styles
const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#568FE1",
        size: "small",
        marginTop: 2,
    },
}));

function Overview(props) {
    const classes = useStyles();
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ mt: 3 }}
            xs={12}
            style={{ height: "100%" }}
        >
            {/*  perosnal information */}
            <Grid item xs={5} style={{ height: "100%" }}>
                <Paper style={{ height: "100%" }}>
                    <Typography sx={{ pt: 2, pl: 3, color: "gray" }}>
                        Personal
                    </Typography>
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        xs={12}
                        sx={{ pb: 3 }}
                    >
                        <Grid item>
                            <Avatar
                                style={{
                                    height: "90px",
                                    width: "90px",
                                    borderRadius: "10px",
                                }}
                                variant="rounded"
                                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                        </Grid>
                        <Grid item>
                            <Typography sx={{ mt: 1, color: "gray" }}>
                                Software Engineer
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="space-around"
                        >
                            <Grid item xs={5}>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justifyContent="flex-end"
                                    alignItems="flex-end"
                                >
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            Date of Birth
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            Gender
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            Personal Email
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            Mobile Number
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            Residential Address
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            29/01/2020
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            Male
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            aliraza30028@gmail.com
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            +92-3320903739
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                color: "gray",
                                            }}
                                        >
                                            213 Derrick Street Boston , MA 02310
                                            USA
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            {/* employment information */}
            <Grid item xs={5} style={{ height: "100%" }}>
                <Paper style={{ height: "100%" }}>
                    <Typography sx={{ pt: 2, pl: 3, color: "gray" }}>
                        Employment Information
                    </Typography>
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{ marginTop: "80px" }}
                    >
                        <Box>
                            <Grid
                                item
                                container
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                sx={{ mt: 5, pb: 5 }}
                            >
                                <Grid item>
                                    <EmailWithIcon
                                        data={"ali.raza@servicesymphony.com"}
                                        iconButton={false}
                                        icon={
                                            <EmailIcon
                                                className={classes.icon}
                                            />
                                        }
                                        fontsize={15}
                                    />
                                </Grid>
                                <Grid item sx={{ mt: 1 }}>
                                    <EmailWithIcon
                                        data={"10/03/2022 (Date of Joining)"}
                                        iconButton={false}
                                        icon={
                                            <EmailIcon
                                                className={classes.icon}
                                            />
                                        }
                                        fontsize={15}
                                    />
                                </Grid>
                                <Grid item sx={{ mt: 1 }}>
                                    <EmailWithIcon
                                        data={"H&r Department"}
                                        iconButton={false}
                                        icon={
                                            <EmailIcon
                                                className={classes.icon}
                                            />
                                        }
                                        fontsize={15}
                                    />
                                </Grid>
                                <Grid item sx={{ mt: 1 }}>
                                    <EmailWithIcon
                                        data={"Full Time (42 hours weekly)"}
                                        iconButton={false}
                                        icon={
                                            <EmailIcon
                                                className={classes.icon}
                                            />
                                        }
                                        fontsize={15}
                                    />
                                </Grid>
                                <Grid item sx={{ mt: 1 }}>
                                    <EmailWithIcon
                                        data={
                                            " 213 Derrick Street Boston MA 02310 USA"
                                        }
                                        iconButton={false}
                                        icon={
                                            <EmailIcon
                                                className={classes.icon}
                                            />
                                        }
                                        fontsize={15}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Overview;
