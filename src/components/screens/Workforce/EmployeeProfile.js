import React from "react";
// material ui
import { Avatar, Grid, Paper, Typography } from "@mui/material";

function EmployeeProfile(props) {
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
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        sx={{ mt: 3 }}
                        xs={12}
                    >
                        <Grid item xs={5}>
                            <Paper>
                                <Typography
                                    sx={{ pt: 2, pl: 3, color: "gray" }}
                                >
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
                                        <Typography
                                            sx={{ mt: 1, color: "gray" }}
                                        >
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
                                                        213 Derrick Street
                                                        Boston , MA 02310 USA
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={5}>
                            <Paper>
                                <Typography variant="v5" fontWeight="bold">
                                    Overview
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                {/* <Grid item>
                    <Typography variant="h5" fontWeight="bold">
                        Oscar Junior
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" fontWeight="bold">
                        Oscar Junior
                    </Typography>
                </Grid> */}
            </Grid>
        </Grid>
    );
}

export default EmployeeProfile;
