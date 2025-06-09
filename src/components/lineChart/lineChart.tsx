import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const LineChartComponent = ({ data }: any) => {
    return (
        <ResponsiveContainer height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartComponent;
