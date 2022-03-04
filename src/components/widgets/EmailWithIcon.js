/* eslint-disable react/jsx-key */
import React from "react";
//material ui
import { Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
//icons
// import EmailIcon from "@mui/icons-material/Email";

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

// function CheckIcon(icon) {
//     return icon;
// }

function gridFunction(data, iconButton, icon, fontsize) {
    const classes = useStyles();
    console.log(classes);
    const CheckIcon = (icon) => {
        if (icon) {
            return icon;
        } else return null;
    };

    return (
        <Grid item container direction="row" alignItems="center">
            {iconButton == true ? (
                <IconButton
                    size="small"
                    style={{
                        backgroundColor: "#CCDDF6",
                    }}
                >
                    {CheckIcon(icon)}
                </IconButton>
            ) : (
                CheckIcon(icon)
            )}
            <Typography
                variant="v6"
                style={{
                    color: "black",
                    fontSize: fontsize,
                    marginLeft: "10px",
                }}
            >
                {data}
            </Typography>
        </Grid>
    );
}

function EmailWithIcon(props) {
    const { data, iconButton, icon, fontsize } = props;

    return <>{data ? gridFunction(data, iconButton, icon, fontsize) : null}</>;
}

export default EmailWithIcon;
