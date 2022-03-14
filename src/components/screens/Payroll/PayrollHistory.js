import React from "react";
//material ui
import { Grid, Typography } from "@mui/material";
// datatable
import MUIDataTable from "mui-datatables";

//icons
import EmailIcon from "@mui/icons-material/Email";
//widget

import EmailWithIcon from "../../widgets/EmailWithIcon";

//constants
const columns = [
    {
        name: "month",
        label: "Month",
        options: {
            filter: true,
            sort: true,
            filterOptions: { display: <EmailWithIcon data={"ali"} /> },
            customBodyRenderLite: (dataIndex) => (
                <EmailWithIcon
                    data={data[dataIndex].month}
                    iconButton={true}
                    icon={<EmailIcon style={{ color: "#568FE1" }} />}
                />
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Month</Typography>
            ),
        },
    },
    {
        name: "noOfEmployees",
        label: "No. Of Employees",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <Typography variant="h6" fontWeight="600">
                    {data[dataIndex].noOfEmployees}
                </Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">No. Of Employees</Typography>
            ),
            isRowSelectable: (dataIndex, selectedRows, data) => {
                return data[dataIndex].required === false;
            },
        },
    },

    {
        name: "paymentAmount",
        label: "Payment Amount",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <Typography variant="h6" color="#4D88E0">
                    {data[dataIndex].paymentAmount}
                </Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Payment Amount</Typography>
            ),
        },
    },
    {
        name: "paymentDate",
        label: "Payment Date",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <Typography variant="h6">
                    {data[dataIndex].paymentDate}
                </Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="h6">Payment Date</Typography>
            ),
        },
    },
];

const data = [
    {
        month: "January",
        noOfEmployees: "74",
        paymentAmount: "$ 650,455",
        paymentDate: "June 1, 2020",
    },
    {
        month: "January",
        noOfEmployees: "74",
        paymentAmount: "$ 650,455",
        paymentDate: "June 1, 2020",
    },
    {
        month: "January",
        noOfEmployees: "74",
        paymentAmount: "$ 650,455",
        paymentDate: "June 1, 2020",
    },
    {
        month: "January",
        noOfEmployees: "74",
        paymentAmount: "$ 650,455",
        paymentDate: "June 1, 2020",
    },
];
function PayrollHistory(props) {
    const handleRowClick = (rowData, rowMeta) => {
        console.log(
            "here is row clicked :",
            data[rowMeta.dataIndex].employeeName,
            rowMeta
        );
    };
    const options = {
        filterType: "dropdown",
        download: false,
        responsive: "stacked",
        search: false,
        print: false,
        selectableRows: false,
        viewColumn: false,
        onRowClick: handleRowClick,
    };
    return (
        <Grid item container direction="row" xs={11.5} sx={{ mt: 5 }}>
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

export default PayrollHistory;
