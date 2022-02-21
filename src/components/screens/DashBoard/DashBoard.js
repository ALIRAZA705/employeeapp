import {
  Badge,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

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
  dot: {
    height: "25px",
    width: "25px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline",
  },
}));
function DashBoard(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ mx: 5 }}
    >
      <Grid item>
        <Typography variant="v6" fontWeight="bold" color="#3A80B2">
          WELCOME USER
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="baseline">
          <Grid item xs={10}>
            <Typography variant="v6" color="#A5C4DC">
              Run Payroll 01-01-2022 to 01-01-2022
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="outlined"
              style={{ color: "#8CB4D2" }}
              className={classes.button}
            >
              Outlined
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        sx={{ mt: 5 }}
      >
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6}>
              <Paper style={{ height: "10vh" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography className={classes.text}>
                      Payment Date
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.text}>Net Pay</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <Paper style={{ height: "10vh" }}>
                <Typography className={classes.text}>No of Employes</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={11} sx={{ mt: 5 }}>
            {" "}
            <Paper>
              <Typography
                variant="v6"
                className={classes.text}
                sx={{ mx: 3, my: 8 }}
              >
                Payroll Cost Summary
              </Typography>
              <ResponsiveContainer width={"95%"} height={300}>
                <BarChart
                  data={data}
                  margin={{ top: 15, right: 10, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={11} sx={{ mt: 5 }}>
            {" "}
            <Paper>
              <Typography
                variant="v6"
                className={classes.text}
                sx={{ mx: 3, my: 8 }}
              >
                Employee Summary
              </Typography>
              <Grid container direction="row">
                <Grid item>
                  <IconButton>
                    <Badge color="secondary"></Badge>
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <Paper style={{ height: "10vh" }}>
            <Typography className={classes.text}>Recent Payment</Typography>
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Grid>
  );
}

export default DashBoard;
