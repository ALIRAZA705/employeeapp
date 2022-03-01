import { Grid, Typography } from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";

// styles
const useStyles = makeStyles((theme) => ({
    headings: {
        color: "#186AA5",
        fontSize: 20,
    },
    badge: {
        "& .MuiBadge-badge": {
            bottom: "18%",
            right: "18%",
            padding: "0px",
        },
    },
}));

const users = [
    {
        name: "ali",
        email: "aliraza@gmail.com",
        Permissions: "Full Access",
        actions: "actions",
    },
    {
        name: "ali",
        email: "aliraza@gmail.com",
        Permissions: "managers",
        actions: "actions",
    },
    {
        name: "ali",
        email: "aliraza@gmail.com",
        Permissions: "managers",
        actions: "actions",
    },
];
function ManageUser(props) {
    const classes = useStyles();
    return (
        <>
            <Grid
                item
                style={{ marginTop: "15px", marginLeft: "20px" }}
                textalign="center"
                xs={12}
                md={12}
                lg={12}
            >
                <Typography className={classes.headings} variant="h5">
                    Manage Roles
                </Typography>
            </Grid>

            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                xs={12}
                md={12}
                lg={12}
            >
                <Box
                    sx={{
                        width: "90%",
                        // height: "40vh",

                        mt: "20px",
                    }}
                >
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        xs={12}
                        style={{
                            paddingRight: "10px",
                            paddingLeft: "10px",
                            backgroundColor: "#D4E2EF",
                        }}
                    >
                        <Grid item>
                            <Typography
                                className={classes.headings}
                                variant="h6"
                            >
                                Name
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={classes.headings}
                                variant="h6"
                            >
                                Email
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={classes.headings}
                                variant="h6"
                            >
                                Permissions
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={classes.headings}
                                variant="h6"
                            >
                                Actions
                            </Typography>
                        </Grid>
                    </Grid>
                    {users.map((user, index) => {
                        const newLocal = (
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                xs={12}
                                style={{
                                    paddingRight: "10px",
                                    paddingLeft: "10px",
                                    marginTop: "20px",
                                    // backgroundColor: "#D4E2EF",
                                }}
                            >
                                <Grid item>
                                    <Typography
                                        className={classes.headings}
                                        variant="h6"
                                    >
                                        {user.name}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        className={classes.headings}
                                        variant="h6"
                                    >
                                        {user.email}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        className={classes.headings}
                                        variant="h6"
                                    >
                                        {user.Permissions}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        className={classes.headings}
                                        variant="h6"
                                    >
                                        {user.actions}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                        return newLocal;
                    })}
                </Box>
            </Grid>
        </>
    );
}

export default ManageUser;
