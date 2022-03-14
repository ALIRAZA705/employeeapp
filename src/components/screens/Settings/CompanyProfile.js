import React from "react";
//material ui
import {
    // Box,
    Button,
    FormControl,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
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
function CompanyProfile(props) {
    console.log(useStyles());
    const classes = useStyles();
    return (
        <Grid container direction="row" style={{ height: "100%" }}>
            <Grid item style={{ height: "100%" }} xs={12}>
                <Paper style={{ height: "100%" }}>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="space-around"
                        sx={{ mt: 3 }}
                    >
                        <Grid item xs={2}>
                            <Typography variant="h2" color="gray">
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
                            <Grid item container direction="row">
                                <Grid
                                    item
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Grid item>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <label
                                                className={
                                                    classes.labelTextField
                                                }
                                            >
                                                <Typography variant="h2">
                                                    COMPANY NAME
                                                </Typography>
                                            </label>
                                            <TextField
                                                id="standard-name"
                                                size="small"
                                                name="name"
                                                className={classes.TextField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth
                                        >
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
                                                className={classes.TextField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <label
                                                className={
                                                    classes.labelTextField
                                                }
                                            >
                                                <Typography variant="h2">
                                                    INDUSTRY
                                                </Typography>
                                            </label>
                                            <TextField
                                                id="standard-name"
                                                size="small"
                                                name="name"
                                                className={classes.TextField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    sx={{ mt: 3 }}
                                >
                                    <Grid item>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <label
                                                className={
                                                    classes.labelTextField
                                                }
                                            >
                                                <Typography variant="h2">
                                                    CONTACT PERSON
                                                </Typography>
                                            </label>
                                            <TextField
                                                id="standard-name"
                                                size="small"
                                                name="name"
                                                className={classes.TextField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <label
                                                className={
                                                    classes.labelTextField
                                                }
                                            >
                                                <Typography variant="h2">
                                                    CONTACT NUMBER
                                                </Typography>
                                            </label>
                                            <TextField
                                                id="standard-name"
                                                size="small"
                                                name="name"
                                                className={classes.TextField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <label
                                                className={
                                                    classes.labelTextField
                                                }
                                            >
                                                <Typography variant="h2">
                                                    COUNTRY
                                                </Typography>
                                            </label>
                                            <TextField
                                                id="standard-name"
                                                size="small"
                                                name="name"
                                                className={classes.TextField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: 3 }}>
                                    <FormControl variant="outlined" fullWidth>
                                        <label
                                            className={classes.labelTextField}
                                        >
                                            <Typography variant="h2">
                                                CONTACT PERSON
                                            </Typography>
                                        </label>
                                        <TextField
                                            id="standard-name"
                                            size="small"
                                            name="name"
                                            className={classes.TextField}
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth={true}
                                            style={{ width: "100%" }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    sx={{ mt: 3 }}
                                >
                                    <Grid
                                        item
                                        xs={2}
                                        className={classes.saveBtn}
                                    >
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
                            </Grid>
                        </Grid>
                        {/* <Grid item>
                                <Grid
                                    item
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    height="100%"
                                    xs={12}
                                >
                                    <Grid item container direction="row">
                                        <Grid item xs={3}>
                                            <FormControl
                                                variant="outlined"
                                                fullWidth
                                            >
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        COMPANY NAME
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
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs></Grid>
                                        <Grid item xs={3}>
                                            <FormControl
                                                variant="outlined"
                                                fullWidth
                                            >
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
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs></Grid>
                                        <Grid item xs={3}>
                                            <FormControl
                                                variant="outlined"
                                                fullWidth
                                            >
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        INDUSTRY
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
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        sx={{ mt: 3 }}
                                    >
                                        <Grid item xs={3}>
                                            <FormControl
                                                variant="outlined"
                                                fullWidth
                                            >
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        CONTACT PERSON
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
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs></Grid>
                                        <Grid item xs={3}>
                                            <FormControl
                                                variant="outlined"
                                                fullWidth
                                            >
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        CONTACT NUMBER
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
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs></Grid>
                                        <Grid item xs={3}>
                                            <FormControl
                                                variant="outlined"
                                                fullWidth
                                            >
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        COUNTRY
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
                                                    fullWidth={true}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        xs={12}
                                        sx={{ mt: 3 }}
                                    >
                                        <Grid item xs={12}>
                                            <FormControl
                                                variant="outlined"
                                                fullWidth
                                            >
                                                <label
                                                    className={
                                                        classes.labelTextField
                                                    }
                                                >
                                                    <Typography variant="h2">
                                                        CONTACT PERSON
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
                                                    variant="outlined"
                                                    fullWidth={true}
                                                    style={{ width: "100%" }}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid> */}
                        {/* <Grid
                                item
                                container
                                direction="row"
                                justifyContent="space-around"
                                // sx={{ mt: 3, mr: 2 }}
                            >
                                <Grid item xs={4}></Grid>
                                <Grid item xs={3}></Grid>
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
                            </Grid> */}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default CompanyProfile;
