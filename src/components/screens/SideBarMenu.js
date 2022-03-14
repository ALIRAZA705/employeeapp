import React from "react";
// material ui
import { Divider, Grid, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
//redux
import { useSelector, useDispatch } from "react-redux";
// import MailIcon from "@mui/icons-material/Mail";
// import SettingsIcon from "@mui/icons-material/Settings";
import { Apps, Mail, Payment, Settings, AddCircle } from "@material-ui/icons";
//router
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../../store/actions/Logout";

//styles
const useStyles = makeStyles({
    sideBarMenu: {
        color: "white",
    },
    MenuOptions: {
        color: "gray",
    },
});
// const icons = ["MailIcon", "InboxIcon", "SettingsIcon"];
const menuItems = [
    { label: "DashBoard", icon: <Apps /> },
    { label: "Workforce", icon: <Mail /> },
    { label: "Payroll", icon: <Payment /> },
    { label: "Payment", icon: <AddCircle /> },
    { label: "Settings", icon: <Settings /> },
];
function SideBarMenu(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    //redux
    const dispatch = useDispatch();
    // redux state
    const logoutUserdata = useSelector((state) => state.Logout.logoutUserdata);
    console.log("here is logout", logoutUserdata);
    // lifecycle method
    // React.useEffect(() => {
    //     if (logoutUserdata.ok) {
    //         localStorage.removeItem("accessToken");
    //         localStorage.removeItem("refreshToken");
    //         navigate("/");
    //     }
    // }, [logoutUserdata]);
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid item className={classes.sideBarMenu}>
                <Box
                    sx={{
                        width: 250,
                        height: "100vh",
                        backgroundColor: "white",
                        color: "#8DB5D3",
                        pt: "20px",
                        pl: "20px",
                    }}
                >
                    <Grid item>
                        <List>
                            {menuItems.map(({ label, icon }) => (
                                <ListItem
                                    button
                                    key={label}
                                    onClick={() =>
                                        navigate(`${label.toLowerCase()}`)
                                    }
                                >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="caption"
                                                display="block"
                                                className={classes.MenuOptions}
                                            >
                                                {label}
                                            </Typography>
                                        }
                                    >
                                        {label}
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <Toolbar />

                        <List>
                            <ListItem
                                button
                                onClick={() => {
                                    dispatch(LogoutUser());
                                }}
                            >
                                <ListItemIcon>
                                    <Mail />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="caption"
                                            color="black"
                                        >
                                            Logout
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SideBarMenu;
