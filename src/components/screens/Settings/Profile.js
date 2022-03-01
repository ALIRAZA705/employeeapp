import { Grid, Typography } from "@material-ui/core";
import React from "react";
import FormWdiget from "../../widgets/FormWdiget";
import { makeStyles } from "@material-ui/core/styles";
// import { Avatar, IconButton, Input } from "@mui/material";
// import { PhotoCamera } from "@mui/icons-material";
// import Badge from "@mui/material/Badge";
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

function Profile(props) {
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
                {/* <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <Badge
                            overlap="circular"
                            badgeContent={<PhotoCamera color="blue" />}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            className={classes.badge}
                        >
                            <Avatar
                                src="/images/example.jpg"
                                style={{
                                    margin: "10px",
                                    width: "60px",
                                    height: "60px",
                                }}
                            />
                        </Badge>
                    </IconButton>
                </label> */}
                <Typography className={classes.headings} variant="h5">
                    General
                </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <FormWdiget
                    data={[
                        {
                            label: "Name",
                            labelPlace: "side",
                            inputType: "text",
                            placeholder: "Enter Name",
                        },
                        {
                            label: "Email",
                            labelPlace: "side",
                            inputType: "text",
                            placeholder: "Enter Email",
                        },
                        {
                            label: "Change Password",
                            labelPlace: "side",
                            inputType: "password",
                            placeholder: "Enter Password",
                        },
                        {
                            label: "Phone",
                            labelPlace: "side",
                            inputType: "number",
                            placeholder: "Enter Phone",
                        },
                        {
                            label: "Country",
                            labelPlace: "side",
                            inputType: "text",
                            placeholder: "Enter Country/Region",
                        },
                        {
                            label: "Language",
                            labelPlace: "side",
                            inputType: "text",
                            placeholder: "Enter Language",
                        },
                        {
                            label: "Time Zone",
                            labelPlace: "side",
                            inputType: "text",
                            placeholder: "Enter Time Zone",
                        },
                        {
                            label: "Google Sign In",
                            labelPlace: "side",
                            inputType: "text",
                            placeholder: "Enter Google Sign In",
                        },
                    ]}
                />
            </Grid>
        </>
    );
}

export default Profile;
