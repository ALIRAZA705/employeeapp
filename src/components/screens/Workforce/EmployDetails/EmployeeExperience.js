import React from "react";
//material ui
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

// employee experience details grid frunction
function ExperienceDetailsGrid(props) {
    const { experience } = props;
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="space-around"
            sx={{ mt: 3 }}
        >
            <Grid item xs={4}>
                <Box>
                    <Typography fontSize="20px" variant="h6" fontWeight="bold">
                        {experience}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs></Grid>
            <Grid item xs={7} container direction="row">
                <Box>
                    <Typography fontSize="20px" variant="h6" fontWeight="bold">
                        Software Engineer
                    </Typography>
                    <Typography
                        fontSize="20px"
                        variant="h6"
                        sx={{ mt: 1 }}
                        color="gray"
                    >
                        High Speed Studio
                    </Typography>
                    <Typography
                        fontSize="20px"
                        variant="h6"
                        sx={{ mt: 1 }}
                        color="gray"
                    >
                        Islamabad Pakistan
                    </Typography>
                    <Typography
                        fontSize="20px"
                        variant="h6"
                        sx={{ mt: 1 }}
                        color="gray"
                    >
                        Identified and dealt with a signature process bottlenect
                        that boosted coding efficency by 35% when resolved
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

// main function
function EmployeeExperience(props) {
    return (
        <Grid item>
            <Paper>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    sx={{ mt: 3, pt: 1, pb: 2 }}
                >
                    <Grid item xs={8} sx={{ p: 3, pt: 1 }}>
                        <Box>
                            <Grid item container direction="column">
                                <Grid item>
                                    <Typography
                                        fontSize="20px"
                                        variant="h6"
                                        fontWeight="bold"
                                        color="gray"
                                    >
                                        Experience
                                    </Typography>
                                </Grid>
                                <ExperienceDetailsGrid
                                    experience={"jan 2019 - Feb 2020"}
                                />
                                <ExperienceDetailsGrid
                                    experience={"jan 2015 - Mar 2022"}
                                />
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box> </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default EmployeeExperience;
