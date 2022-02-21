import React from "react";
// material ui
import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

//styles
const useStyles = makeStyles({
  sideBarMenu: {
    color: "white",
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
