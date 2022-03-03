import React from "react";
//material ui
import {
    Avatar,
    Button,
    Divider,
    Grid,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
//icons
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// styles
const useStyles = makeStyles((theme) => ({
    button: {
        "&.MuiButton-root": {
            padding: "0px 5px",
        },
    },
    text: {
        color: "#186AA5",
        textAlign: "center",
    },
    paper_: {
        height: "100%",
        borderRadius: "15px",
        padding: 5,
    },
}));
const employees = [1, 2, 3, 4, 5];
function Workforce(props) {
    const classes = useStyles();
    return (
        <Grid container direction="row" sx={{ mt: 3 }}>
            <Grid item container direction="row">
                <Grid item xs={2}>
                    <Typography
                        variant="v6"
                        fontWeight="bold"
                        color="#3A80B2"
                        fontSize="32px"
                    >
                        Workforce
                    </Typography>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs={1.5}>
                    <Button
                        variant="outlined"
                        fullWidth={true}
                        style={{
                            color: "#8CB4D2",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            borderRadius: 5,
                        }}
                        className={classes.button}
                    >
                        Join date
                    </Button>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={11} style={{ height: "100%", marginTop: 15 }}>
                <Paper
                    style={{
                        height: "100%",
                        borderRadius: "15px",
                        padding: 5,
                    }}
                >
                    <Grid
                        item
                        container
                        direction="row"
                        // justifyContent="space-around"
                        // alignItems="flex-start"
                        sx={{ p: 3 }}
                    >
                        <Grid item xs={1 / 2}></Grid>
                        <Grid item xs={2}>
                            <Typography
                                variant="v6"
                                fontWeight="bold"
                                fontSize="15px"
                            >
                                Employee Name
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                variant="v6"
                                fontWeight="bold"
                                fontSize="15px"
                            >
                                Work Email
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography
                                variant="v6"
                                fontWeight="bold"
                                fontSize="15px"
                            >
                                Country
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography
                                variant="v6"
                                fontWeight="bold"
                                fontSize="15px"
                            >
                                Cost to Company
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography
                                variant="v6"
                                fontWeight="bold"
                                fontSize="15px"
                            >
                                Join date
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider />

                    {employees.map((data, index) => {
                        return (
                            <>
                                <Grid
                                    item
                                    container
                                    direction="row"
                                    // justifyContent="center"
                                    // alignItems="flex-start"
                                    sx={{ p: 2 }}
                                >
                                    <Grid item xs={1 / 2}></Grid>
                                    <Grid item xs={2}>
                                        <Grid
                                            item
                                            container
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="flex-start"
                                        >
                                            <Grid item>
                                                <Avatar
                                                    variant="circle"
                                                    src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Grid
                                                    item
                                                    container
                                                    direction="column"
                                                    alignItems="center"
                                                >
                                                    <Grid item>
                                                        <Typography
                                                            variant="v6"
                                                            style={{
                                                                color: "black",
                                                                fontSize:
                                                                    "15px",
                                                                marginLeft:
                                                                    "10px",
                                                                fontWeight:
                                                                    "bold",
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
                                                                fontSize:
                                                                    "10px",
                                                                marginLeft:
                                                                    "10px",
                                                            }}
                                                        >
                                                            Developer
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Grid
                                            item
                                            container
                                            direction="row"
                                            alignItems="center"
                                        >
                                            <IconButton
                                                size="small"
                                                style={{
                                                    backgroundColor: "#CCDDF6",
                                                }}
                                            >
                                                <EmailIcon
                                                    style={{ color: "#568FE1" }}
                                                    size="small"
                                                />
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
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography
                                            variant="v6"
                                            fontSize="15px"
                                        >
                                            Country
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography
                                            variant="v6"
                                            fontSize="15px"
                                        >
                                            Cost to Company
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <Typography
                                            variant="v6"
                                            fontSize="15px"
                                        >
                                            Join date
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <MoreVertIcon />
                                    </Grid>
                                </Grid>

                                {employees.length - 1 != index && <Divider />}
                            </>
                        );
                    })}
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Workforce;
