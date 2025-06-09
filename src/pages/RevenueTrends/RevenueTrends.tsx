import LineChartComponent from "../../components/lineChart/lineChart";
import useFetchRevenueData from "../../hooks/useFetchRevenueData";

const RevenueTrends = () => {
    const {data, isLoading} = useFetchRevenueData();
    if (isLoading) return <p>Loading...</p>;
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Revenue Trends Over Time</h2>
            <div>
                <LineChartComponent data={data} />
            </div>
        </div>
    );
};
export default RevenueTrends;
