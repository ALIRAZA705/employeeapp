import React from "react";
// material ui
import { Grid, Paper, Typography, Divider } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
//router
import {
    useNavigate,
    useLocation,
    useMatch,
    Outlet,
    useParams,
} from "react-router-dom";

// styles
const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#568FE1",
        size: "small",
        marginTop: 2,
    },
    divider: {
        // mt: 1,
        borderBottomWidth: 13,
    },
}));
function EmployeeProfile(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const param = useParams();
    const match = useMatch("/overview");

    console.log(location, match, param);
    //local states
    const [option, selectedOption] = React.useState("Overview");
    console.log(classes, option);
    //function
    const handleSelectOption = (opt) => {
        selectedOption(opt);
        navigate(`${opt.toLowerCase()}`);
    };
    React.useEffect(() => {}, []);
    return (
        <Grid container direction="row">
            <Grid item>
                <Typography variant="h5" fontWeight="bold">
                    Oscar Junior
                </Typography>
                <Typography variant="h6" color="gray">
                    ID # 0 1 2 3 1 2 3
                </Typography>
            </Grid>
            <Grid item container driection="row" xs={12} sx={{ mt: 3 }}>
                <Grid item xs={11}>
                    <Paper>
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                            sx={{ p: 3 }}
                            xs={8}
                        >
                            <Grid
                                item
                                onClick={() => {
                                    handleSelectOption("Overview");
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    // fontWeight="bold"
                                    color="gray"
                                >
                                    Overview
                                </Typography>
                                {option == "Overview" && (
                                    <Divider
                                        sx={{
                                            mt: 1,
                                            borderBottomWidth: 3,
                                        }}
                                        color="#6B9CE3"
                                    />
                                )}
                            </Grid>
                            <Grid
                                item
                                onClick={() => {
                                    handleSelectOption("SalaryDetails");
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    // fontWeight="bold"
                                    color="gray"
                                >
                                    Salary Details
                                </Typography>
                                {option == "SalaryDetails" && (
                                    <Divider
                                        sx={{
                                            mt: 1,
                                            borderBottomWidth: 3,
                                        }}
                                        color="#6B9CE3"
                                    />
                                )}
                            </Grid>
                            <Grid
                                item
                                onClick={() => {
                                    handleSelectOption("Experience");
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    // fontWeight="bold"
                                    color="gray"
                                >
                                    Experience
                                </Typography>
                                {option == "Experience" && (
                                    <Divider
                                        sx={{
                                            mt: 1,
                                            borderBottomWidth: 3,
                                        }}
                                        color="#6B9CE3"
                                    />
                                )}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={11} sx={{ mt: 4 }}>
                    <Outlet />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default EmployeeProfile;
