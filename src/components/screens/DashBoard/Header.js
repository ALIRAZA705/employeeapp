import React from "react";
// material ui
import { Badge, Grid, IconButton, InputBase } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
//icons
import SearchIcon from "@mui/icons-material/Search";
// files
import ProfleWithIcon from "../../widgets/ProfileWithIcon";

//constants
const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "white !important",
    },
    headerIcons: {
        color: "#327AAF",
    },
}));
//constants
const employeeDetails = {
    name: "Ali Raza",
    role: "Developer",
};

function Header(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction="row" style={{ marginTop: 25 }}>
                <Grid item xs={6}>
                    <ProfleWithIcon data={employeeDetails} shape="rounded" />
                </Grid>
                <Grid item xs={3}>
                    <InputBase
                        variant="h6"
                        fullWidth={true}
                        style={{
                            // border: "1px solid #4f718c",

                            backgroundColor: "white",
                            color: "grey",
                            padding: "8px",

                            borderRadius: "10px",
                        }}
                        placeholder="Search Employee "
                        startAdornment={
                            <SearchIcon
                                fontSize="large"
                                sx={{ mx: 1 }}
                                color="primary"
                            />
                        }
                    />
                </Grid>

                <Grid item xs={3}>
                    <IconButton>
                        <Badge
                            badgeContent={4}
                            color="secondary"
                            sx={{ ml: 3, mr: 3 }}
                        >
                            <NotificationsNoneIcon
                                className={classes.headerIcons}
                            />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <ProfleWithIcon
                            data={employeeDetails}
                            shape="rounded"
                        />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;
