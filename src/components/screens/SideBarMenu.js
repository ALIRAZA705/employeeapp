import React from "react";
// material ui
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
//router
import { useNavigate } from "react-router-dom";

//styles
const useStyles = makeStyles({
    sideBarMenu: {
        color: "white",
        // height: "100%",
        // width: "320px",
    },
});

function SideBarMenu(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Grid
            container
            direction="row"
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
                    }}
                >
                    <List>
                        {[
                            "DashBoard",
                            "Workforce",
                            "Payroll",
                            "Payment Settings",
                            "Settings",
                        ].map((text, index) => (
                            <ListItem
                                button
                                key={text}
                                color="red"
                                onClick={() =>
                                    navigate(`${text.toLowerCase()}`)
                                }
                            >
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {["All mail", "Trash", "Spam"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SideBarMenu;
