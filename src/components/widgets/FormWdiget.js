/* eslint-disable react/jsx-key */
import React from "react";
//material ui
import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
    //component states
    const [showPassword, setShowPassword] = React.useState(false);
    // functions
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const checkInputType = (inputType) => {
        if (inputType == "password" && showPassword) {
            return "text";
        } else if (inputType == "password" && showPassword != true) {
            return "password";
        } else {
            return inputType;
        }
    };
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
        >
            <Grid item xs={2}>
                <Typography className={classes.headings}>
                    {data.label}
                </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth={true}>
                    <TextField
                        id="standard-name"
                        type={checkInputType(data.inputType)}
                        placeholder={data.placeholder}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment:
                                data.inputType == "password" ? (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ) : null,
                        }}
                        size="small"
                        className={classes.textField}
                        margin="normal"
                        fullWidth={true}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
}

function FormWdiget(props) {
    const { data } = props;

    return (
        <>
            {data.length > 0
                ? data.map((data, index) => gridFunction(data, index))
                : null}
        </>
    );
}

export default FormWdiget;
