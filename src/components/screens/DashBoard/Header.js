import React from "react";
// material ui
import { Avatar, Badge, Grid, IconButton, InputBase } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
//icons
import SearchIcon from "@mui/icons-material/Search";
// import PersonIcon from "@mui/icons-material/Person";

//constants
const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "white !important",
    },
    headerIcons: {
        color: "#327AAF",
    },
}));

function Header(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction="row" style={{ marginTop: 25 }}>
                <Grid item xs={6}></Grid>
                <Grid item xs={4}>
                    <InputBase
                        fullWidth={true}
                        style={{
                            // border: "1px solid #4f718c",

                            backgroundColor: "white",
                            color: "grey",
                            padding: "8px",

                            borderRadius: "10px",
                        }}
                        placeholder="Search here "
                        startAdornment={
                            <SearchIcon
                                fontSize="large"
                                sx={{ mx: 1 }}
                                color="primary"
                            />
                        }
                    />
                </Grid>

                <Grid item xs={2}>
                    <IconButton>
                        <Badge
                            badgeContent={4}
                            color="secondary"
                            style={{ marginRight: 15, marginLeft: 15 }}
                        >
                            <NotificationsNoneIcon
                                className={classes.headerIcons}
                            />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Avatar
                            variant="rounded"
                            src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                    </IconButton>
                    {/* <IconButton>
                        <PersonIcon className={classes.headerIcons} />
                    </IconButton> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;
