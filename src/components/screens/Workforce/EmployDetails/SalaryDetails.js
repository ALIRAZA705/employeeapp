import React from "react";
//material ui
import { Grid, Paper, Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
//icons
import EmailIcon from "@mui/icons-material/Email";
//widget
import EmailWithIcon from "../../../widgets/EmailWithIcon";

// styles
const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#568FE1",
        size: "small",
        marginTop: 2,
    },
}));

//constants
const columns = [
    {
        name: "month",
        label: "Month",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <EmailWithIcon
                    data={data[dataIndex].month}
                    iconButton={true}
                    icon={<EmailIcon style={{ color: "#568FE1" }} />}
                />
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="v6" fontWeight="bold" fontSize="15px">
                    Month
                </Typography>
            ),
            isRowSelectable: (dataIndex, selectedRows, data) => {
                return data[dataIndex].required === false;
            },
        },
    },
    {
        name: "payrollAmount",
        label: "Payroll Amount",
        options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex) => (
                <EmailWithIcon data={data[dataIndex].payrollAmount} />
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="v6" fontWeight="bold" fontSize="15px">
                    Payroll Amount
                </Typography>
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
                <Typography variant="v6" fontSize="15px">
                    {data[dataIndex].paymentDate}
                </Typography>
            ),
            customHeadLabelRender: (columnMeta) => (
                <Typography variant="v6" fontWeight="bold" fontSize="15px">
                    Payment Date
                </Typography>
            ),
        },
    },
];

const data = [
    {
        month: "January",
        payrollAmount: "$ 65,000.5",
        paymentDate: "june 1,2020",
    },
    {
        month: "January",
        payrollAmount: "$ 65,000.5",
        paymentDate: "june 1,2020",
    },
    {
        month: "January",
        payrollAmount: "$ 65,000.5",
        paymentDate: "june 1,2020",
    },
    {
        month: "January",
        payrollAmount: "$ 65,000.5",
        paymentDate: "june 1,2020",
    },
];

// functions
const handleRowClick = (rowData, rowMeta) => {
    console.log(
        "here is row clicked :",
        data[rowMeta.dataIndex].employeeName,
        rowMeta
    );
};
const options = {
    filterType: "checkbox",
    selectableRows: false,
    onRowClick: handleRowClick,
};

// employee salary grid function
function EmployeeSalaryGrid() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            sx={{ pt: 1, pb: 2 }}
        >
            <Grid item>
                <Typography variant="h6">Salary Amount</Typography>
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    $ 1,560
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Annual salary</Typography>
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    $ 21,560
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Bonus</Typography>
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    $ 1,560
                </Typography>
            </Grid>
        </Grid>
    );
}
// main function
function SalaryDetails(props) {
    const classes = useStyles();
    console.log(classes);
    return (
        <>
            {" "}
            <Grid item contianer direction="row">
                <Grid item>
                    <Paper>
                        <EmployeeSalaryGrid />
                    </Paper>
                </Grid>

                <Grid item sx={{ mt: 2, pt: 1, pb: 2 }}>
                    <MUIDataTable
                        title={
                            <Typography
                                fontWeight="bold"
                                fontSize="20px"
                                variant="h6"
                            >
                                Salary Details
                            </Typography>
                        }
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default SalaryDetails;
