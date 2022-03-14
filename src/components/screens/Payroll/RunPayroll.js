import React from "react";
//material ui
import { Grid, Paper, Typography } from "@mui/material";
import { Select, MenuItem } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/core/styles";
// datatable
import MUIDataTable from "mui-datatables";
//router
// import { useNavigate } from "react-router-dom";
//icons
import EmailIcon from "@mui/icons-material/Email";
import FilterListIcon from "@mui/icons-material/FilterList";
//widget
import ProfileWithIcon from "../../widgets/ProfileWithIcon";
import EmailWithIcon from "../../widgets/EmailWithIcon";

// styles
const useStyles = makeStyles((theme) => ({
    dialog: {
        color: "red",

        width: "100%",
        "&. MuiPaper-root": {
            padding: "10px",
            backgroundColor: "black",
            width: "100%",
        },
    },
    dropdown: {
        "&.MuiInputBase-root": {
            border: "1px solid gray",
            padding: "8px",
            borderRadius: "15px",
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
            filterList: false,
            filterOptions: { display: <EmailWithIcon /> },
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
                <Typography variant="h6">Employee Name</Typography>
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
                <Typography variant="h6">Work Email</Typography>
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
                <Typography variant="h6">{data[dataIndex].country}</Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Country</Typography>
            ),
        },
    },
    {
        name: "grossPay",
        label: "Gross Pay",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <Typography variant="h6" color="#4D88E0">
                    {data[dataIndex].grossPay}
                </Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Gross Pay</Typography>
            ),
        },
    },
    {
        name: "date",
        label: "Date",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <Typography variant="h6">{data[dataIndex].date}</Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Date</Typography>
            ),
        },
    },
];

const data = [
    {
        employeeName: "Ali Raza",
        workEmail: "ali.raza@servicesymphony.com",
        country: "Yonkers",
        grossPay: "$ 650,455",
        date: "June 1, 2020",
    },
    {
        employeeName: "Employee",
        workEmail: "ali.raza@servicesymphony.com",
        country: "Hartford",
        grossPay: "$ 650,455",
        date: "June 1, 2020",
    },
    {
        employeeName: "Employee",
        workEmail: "ali.raza@servicesymphony.com",
        country: "Tampa",
        grossPay: "$ 650,455",
        date: "June 1, 2020",
    },
    {
        employeeName: "EmployeeTest",
        workEmail: "ali.raza@servicesymphony.com",
        country: "Dallas",
        grossPay: "$ 650,455",
        date: "June 1, 2020",
    },
];

function RunPayroll(props) {
    // const navigate = useNavigate();
    const classes = useStyles();
    const [cols, setCols] = React.useState(columns);
    const [OpenFilters, setOpenFilters] = React.useState(false);
    const [selectedFilter, setSelectedFilter] = React.useState("All");
    const handleRowClick = (rowData, rowMeta) => {
        console.log(
            "here is row clicked :",
            data[rowMeta.dataIndex].employeeName,
            rowMeta
        );
        // navigate("/main/employeeProfile/overview");
    };
    const options = {
        filterType: "multiselect",
        filter: true,
        download: false,
        responsive: "stacked",
        search: false,
        print: false,
        filterList: false,
        selectableRows: false,
        viewColumn: false,
        onRowClick: handleRowClick,
    };
    const onFilter = ({ target: { value } }) => {
        setSelectedFilter(value);
        const filteredCols = [...cols];
        let filterList = [];
        if (value !== "All") {
            filterList = [value];
        }
        // Target the column to filter on.
        filteredCols[0].options.filterList = filterList;
        setCols(filteredCols);
    };
    const handleClose = () => {
        setOpenFilters(false);
    };
    return (
        <Grid item container direction="row" xs={11.5} sx={{ mt: 5 }}>
            <Grid item xs={12}>
                <Paper>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        textAlign="center"
                        sx={{ py: 1 }}
                    >
                        <Grid item>
                            <Typography variant="h6">Total Payroll</Typography>
                            <Typography variant="h5">$ 21,2556</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Payment Date</Typography>
                            <Typography variant="h5">June 1, 2020s</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">
                                NO. OF EMPLOYEES{" "}
                            </Typography>
                            <Typography variant="h5">75</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
                <Grid item container direction="row" justifyContent="flex-end">
                    <Grid item>
                        <FilterListIcon
                            style={{ color: "#568FE1" }}
                            onClick={() => setOpenFilters(!OpenFilters)}
                        />
                        {OpenFilters && (
                            <Dialog
                                open={OpenFilters}
                                fullWidth
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                className={classes.dialog}
                            >
                                <Grid
                                    item
                                    container="row"
                                    // justifyContent="space-around"
                                >
                                    <Grid item>aa</Grid>
                                    <Grid item>aa</Grid>
                                    <Grid item>aa</Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                mb: 1,
                                                mt: 1,
                                                color: "gray",
                                                fontWeight: "400",
                                            }}
                                        >
                                            SELECT COUNTRY
                                        </Typography>
                                        <Select
                                            onChange={onFilter}
                                            value={selectedFilter}
                                            fullWidth
                                            className={classes.dropdown}
                                        >
                                            <MenuItem value="All">All</MenuItem>
                                            {data.map((x) => (
                                                <MenuItem
                                                    key={x.employeeName}
                                                    value={x.employeeName}
                                                >
                                                    {x.employeeName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                </Grid>
                            </Dialog>
                        )}
                    </Grid>
                </Grid>

                <MUIDataTable
                    title={
                        <Typography fontSize="20px" variant="h6">
                            Employee List
                        </Typography>
                    }
                    data={data}
                    columns={cols}
                    options={options}
                />
            </Grid>
        </Grid>
    );
}

export default RunPayroll;
