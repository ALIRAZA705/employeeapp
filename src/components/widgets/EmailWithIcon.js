/* eslint-disable react/jsx-key */
import React from "react";
//material ui
import { Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
//icons
import EmailIcon from "@mui/icons-material/Email";

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

function gridFunction(data, index) {
    const classes = useStyles();
    console.log(classes);

    return (
        <Grid item container direction="row" alignItems="center">
            <IconButton
                size="small"
                style={{
                    backgroundColor: "#CCDDF6",
                }}
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
    );
}

function EmailWithIcon(props) {
    const { data } = props;

    return <>{data ? gridFunction(data) : null}</>;
}

export default EmailWithIcon;
