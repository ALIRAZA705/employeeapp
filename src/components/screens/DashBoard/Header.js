import React from "react";
// material ui
import { Badge, Grid, IconButton, InputBase } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
//icons
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";

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
      <Grid
        container
        direction="row"
        style={{ marginTop: 25, marginRight: 20 }}
      >
        <Grid item xs={7}></Grid>
        <Grid item xs={3}>
          <InputBase
            fullWidth={true}
            style={{
              border: "1px solid #4f718c",
              padding: 3,
              backgroundColor: "white",
              color: "#D0DFEB",
            }}
            placeholder="Search ...  "
            startAdornment={<SearchIcon fontSize="small" sx={{ mx: 1 }} />}
          />
        </Grid>

        <Grid item xs={2}>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <NotificationsNoneIcon className={classes.headerIcons} />
            </Badge>
          </IconButton>
          <IconButton>
            <SettingsIcon className={classes.headerIcons} />
          </IconButton>
          <IconButton>
            <PersonIcon className={classes.headerIcons} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
