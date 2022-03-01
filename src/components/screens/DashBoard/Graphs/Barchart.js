import React from "react";
// charts
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
//constants
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
function Barchart(props) {
    console.log(props);
    return (
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
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Barchart;
