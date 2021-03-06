/* eslint-disable react/jsx-key */
import React from "react";
//material ui
import { Avatar, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#E8EFF7",
    },
    headings: {
        color: "#186AA5",
        fontSize: 20,
        // fontWeight: "bold",
    },
    TextField: {
        marginTop: "0.2vh",
        marginBottom: "2vh",
        transition: "0.5s all",
        width: "100% !important",
        background: "white",
        "& .MuiInputLabel-outlined": {
            color: "#73A1C2",
        },
    },
}));

function gridFunction(data, shape, icon, index) {
    const classes = useStyles();
    console.log(classes);

    return (
        <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
        >
            <Grid item>
                {icon ? (
                    icon
                ) : (
                    <Avatar
                        variant={shape == "rounded" ? "rounded" : "circle"}
                        src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                )}
            </Grid>
            <Grid item>
                <Grid item container direction="column">
                    <Typography
                        variant="h6"
                        style={{
                            color: "black",
                            // fontSize: "15px",
                            marginLeft: "10px",
                            fontWeight: "light",
                        }}
                    >
                        {data.name}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        style={{
                            color: "grey",

                            marginLeft: "10px",
                            textAlign: "start",
                        }}
                    >
                        {data.role}
                    </Typography>
                </Grid>
                {/* <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
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
                                textAlign: "start",
                            }}
                        >
                            Developer
                        </Typography>
                    </Grid>
                </Grid> */}
            </Grid>
        </Grid>
    );
}

function ProfleWithIcon(props) {
    const { data, shape, icon } = props;
    console.log("here is props", props);

    return <>{data ? gridFunction(data, shape, icon) : null}</>;
}

export default ProfleWithIcon;
