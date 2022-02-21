import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sideBarMenu: {
    // background: "#253053",
    // position: "absolute",
    color: "white",
    // padding: "10px",
    height: "100%",
    width: "320px",
  },
});

function SideBarMenu(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item className={classes.sideBarMenu}>
        <Paper elevation={4} style={{ height: "100vh", borderRadius: 10 }}>
          <Typography sx={{ pl: 10 }}> sideBarMenu </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SideBarMenu;
