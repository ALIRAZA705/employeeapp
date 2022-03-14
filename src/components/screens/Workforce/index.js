import React from "react";
//material ui
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
//icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailIcon from "@mui/icons-material/Email";
//widget
import ProfileWithIcon from "../../widgets/ProfileWithIcon";
import EmailWithIcon from "../../widgets/EmailWithIcon";
//router
import { useNavigate } from "react-router-dom";

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
    table: {
        "&. MuiPaper-root": {
            padding: "10px",
            backgroundColor: "black",
        },
    },
}));
//constants

const columns = [
    {
        name: "employeeName",
        label: "Employee Name",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                // <ProfileWithIcon data={data[dataIndex].employeeName} />
                <ProfileWithIcon
                    data={{
                        name: `${data[dataIndex].employeeName}`,
                        role: "Developer",
                    }}
                />
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="v6" fontWeight="bold" fontSize="15px">
                    Employee Name
                </Typography>
            ),
            isRowSelectable: (dataIndex, selectedRows, data) => {
                return data[dataIndex].required === false;
            },
        },
    },
    {
        name: "workEmail",
        label: "Work Email",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <EmailWithIcon
                    data={data[dataIndex].workEmail}
                    iconButton={true}
                    icon={<EmailIcon style={{ color: "#568FE1" }} />}
                />
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="v6" fontWeight="bold" fontSize="15px">
                    Work Email
                </Typography>
            ),
        },
    },
    {
        name: "country",
        label: "Country",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <Typography variant="v6" fontSize="15px">
                    {data[dataIndex].country}
                </Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="v6" fontWeight="bold" fontSize="15px">
                    Country
                </Typography>
            ),
        },
    },
    {
        name: "joinDate",
        label: "Join Date",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <Typography variant="v6" fontSize="15px">
                    {data[dataIndex].joinDate}
                </Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="v6" fontWeight="bold" fontSize="15px">
                    Join Date
                </Typography>
            ),
        },
    },
    {
        name: "",
        label: "",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex) => (
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            ),
        },
    },
];

const data = [
    {
        employeeName: "Ali Raza",
        workEmail: "ali.raza@servicesymphony.com",
        country: "Yonkers",
        joinDate: "01/02/2020",
        menu: "icon",
    },
    {
        employeeName: "Employee",
        workEmail: "ali.raza@servicesymphony.com",
        country: "Hartford",
        joinDate: "01/02/2020",
        menu: "icon",
    },
    {
        employeeName: "Employee",
        workEmail: "ali.raza@servicesymphony.com",
        country: "Tampa",
        joinDate: "01/02/2020",
        menu: "icon",
    },
    {
        employeeName: "EmployeeTest",
        workEmail: "ali.raza@servicesymphony.com",
        country: "Dallas",
        joinDate: "01/02/2020",
        menu: "icon",
    },
];

function Workforce(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    console.log("here is navigate", navigate);
    // functions
    const handleRowClick = (rowData, rowMeta) => {
        console.log(
            "here is row clicked :",
            data[rowMeta.dataIndex].employeeName,
            rowMeta
        );
        navigate("/main/employeeProfile/overview");
    };
    const options = {
        filterType: "checkbox",
        selectableRows: false,
        onRowClick: handleRowClick,
    };
    return (
        <Grid container direction="row" sx={{ mt: 3 }}>
            <Grid item container direction="row">
                <Grid item xs={2}>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        // color="#3A80B2"
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
            <Grid
                item
                xs={11}
                style={{ height: "100%", marginTop: 15 }}
                className={classes.table}
            >
                <MUIDataTable
                    title={
                        <Typography
                            fontWeight="bold"
                            fontSize="20px"
                            variant="h6"
                        >
                            Employee List
                        </Typography>
                    }
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Grid>
        </Grid>
    );
}

export default Workforce;
