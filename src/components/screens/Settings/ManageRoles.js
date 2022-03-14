import React from "react";
//material ui
import { Grid, IconButton, Typography } from "@mui/material";
//icons
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//widget
import ProfileWithIcon from "../../widgets/ProfileWithIcon";
import EmailWithIcon from "../../widgets/EmailWithIcon";
// datatable
import MUIDataTable from "mui-datatables";

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
        name: "email",
        label: "Email",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <EmailWithIcon
                    data={data[dataIndex].email}
                    iconButton={true}
                    icon={<EmailIcon style={{ color: "#568FE1" }} />}
                />
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Email</Typography>
            ),
        },
    },

    {
        name: "permissions",
        label: "Permissions",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <Typography variant="h6" color="#4D88E0">
                    {data[dataIndex].permissions}
                </Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Permissions</Typography>
            ),
        },
    },
    {
        name: "action",
        label: "Action",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Action</Typography>
            ),
        },
    },
];

const data = [
    {
        employeeName: "Ali Raza",
        email: "ali.raza@servicesymphony.com",
        permissions: "Full Access",
        action: "June 1, 2020",
    },
    {
        employeeName: "Employee",
        email: "ali.raza@servicesymphony.com",

        permissions: "Full Access",
        action: "June 1, 2020",
    },
    {
        employeeName: "Employee",
        email: "ali.raza@servicesymphony.com",

        permissions: "Full Access",
        action: "June 1, 2020",
    },
    {
        employeeName: "EmployeeTest",
        email: "ali.raza@servicesymphony.com",

        permissions: "Full Access",
        action: "June 1, 2020",
    },
];

function ManageRoles(props) {
    //functions
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
    return (
        <Grid container direction="row" xs={12}>
            <Grid item xs={12}>
                <MUIDataTable
                    title={
                        <Typography fontSize="20px" variant="h6">
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

export default ManageRoles;
