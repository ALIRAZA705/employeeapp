import React from "react";
//material ui
import {
    Button,
    FormControl,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
//icon
import AvatarIcon from "../../Icons/AvatarIcon";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";
//styles
const useStyles = makeStyles((theme) => ({
    TextField: {
        marginTop: "0.2vh",
        marginBottom: "2vh",
        transition: "0.5s all",
        width: "100% !important",
        background: "white",

        "& .MuiInputLabel-outlined": {
            color: "gray",
        },
        "& .MuiInputBase-root": {
            borderRadius: "12px",
            letterSpacing: "1rem",
        },
    },
    labelTextField: {
        textAlign: "left",
    },
    saveBtn: {
        borderRadius: "10px",
        background: "linear-gradient(45deg, #6A9CE4 30%, #1161D5 90%)",

        // backgroundColor: "#1161D5",
        color: "white",
    },
}));
function Profile(props) {
    const classes = useStyles();
    return (
        <Grid container direction="column" style={{ height: "100%" }}>
            <Grid item style={{ height: "100%" }}>
                <Paper style={{ height: "100%" }}>
                    <Box
                        sx={{
                            // mr: 5,
                            ml: 3,

                            pl: 3,
                            pt: 2,
                        }}
                    >
                        <Grid item container direction="row" xs={12}>
                            <Grid item xs={2}>
                                <Typography
                                    variant="h2"
                                    // fontWeight="500"
                                    color="gray"
                                >
                                    Profile Picture
                                </Typography>
                                <AvatarIcon
                                    shape={"rounded"}
                                    size={{
                                        height: "175px",
                                        width: "155px",
                                        mt: 2,
                                    }}
                                />
                                <Button
                                    variant="outlined"
                                    sx={{
                                        mt: 2,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <PhotoCameraIcon
                                        style={{
                                            marginRight: 5,
                                            color: "#4382DD",
                                        }}
                                    />
                                    <Typography
                                        variant="paragraph"
                                        fontWeight="bold"
                                        color="#4382DD"
                                    >
                                        Change Photo
                                    </Typography>
                                </Button>
                            </Grid>

                            <Grid item xs={9}>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="flex-start"
                                    height="100%"
                                    xs={12}
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                    >
                                        <Grid item>
                                            <FormControl variant="outlined">
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        NAME
                                                    </Typography>
                                                </label>
                                                <TextField
                                                    id="standard-name"
                                                    size="small"
                                                    name="name"
                                                    className={
                                                        classes.TextField
                                                    }
                                                    margin="normal"
                                                    // variant="outlined"
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <FormControl variant="outlined">
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        EMAIL ADDRESS
                                                    </Typography>
                                                </label>
                                                <TextField
                                                    id="standard-name"
                                                    size="small"
                                                    name="name"
                                                    className={
                                                        classes.TextField
                                                    }
                                                    margin="normal"
                                                    // variant="outlined"
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <FormControl variant="outlined">
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        PASSWORD
                                                    </Typography>
                                                </label>
                                                <TextField
                                                    id="standard-name"
                                                    size="small"
                                                    name="name"
                                                    className={
                                                        classes.TextField
                                                    }
                                                    margin="normal"
                                                    // variant="outlined"
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                        sx={{ mt: 3 }}
                                    >
                                        <Grid item>
                                            <FormControl variant="outlined">
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        PHONE NUMBER
                                                    </Typography>
                                                </label>
                                                <TextField
                                                    id="standard-name"
                                                    size="small"
                                                    name="name"
                                                    className={
                                                        classes.TextField
                                                    }
                                                    margin="normal"
                                                    // variant="outlined"
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <FormControl variant="outlined">
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        BIRTHDAY
                                                    </Typography>
                                                </label>
                                                <TextField
                                                    id="standard-name"
                                                    size="small"
                                                    name="name"
                                                    className={
                                                        classes.TextField
                                                    }
                                                    margin="normal"
                                                    // variant="outlined"
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <FormControl variant="outlined">
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        LANGUAGE
                                                    </Typography>
                                                </label>
                                                <TextField
                                                    id="standard-name"
                                                    size="small"
                                                    name="name"
                                                    className={
                                                        classes.TextField
                                                    }
                                                    margin="normal"
                                                    // variant="outlined"
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="row"
                                justifyContent="space-around"
                                sx={{ mt: 3, mr: 2 }}
                            >
                                <Grid item xs={2}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2} className={classes.saveBtn}>
                                    <Button
                                        fullWidth
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        <SaveIcon
                                            style={{ marginRight: "10px" }}
                                        />
                                        <Typography
                                            variant="paragraph"
                                            fontWeight="500"
                                        >
                                            SAVE SETTINGS
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                            {/* <Grid
                                item
                                container
                                direction="row"
                                justifyContent="flex-end"
                                sx={{ mt: 3, ml: 4 }}
                            >
                                <Grid item xs={3}>
                                    <Button variant="outlined">
                                        Save Changes
                                    </Button>
                                </Grid>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Profile;
