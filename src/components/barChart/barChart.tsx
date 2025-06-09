import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const BarChartComponent = ({ data, xAxisDataKey, yAxisDataKey }: any) => {
    return (
        <ResponsiveContainer height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xAxisDataKey} />
                <YAxis />
                <Tooltip
                    formatter={(value: number) => [`$${value.toFixed(2)}`, 'Revenue']}
                />
                <Legend />
                <Bar dataKey={yAxisDataKey} fill="#8884d8" name="Total Revenue" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarChartComponent;