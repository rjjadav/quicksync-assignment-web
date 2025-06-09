import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0'];

const PieChartComponent = ({data}: any) => {
    return <ResponsiveContainer height={400}>
        <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
        >
          {data.map((entry: any, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
        <Legend verticalAlign="bottom" height={36} />
        </PieChart>

    </ResponsiveContainer>
}

export default PieChartComponent;