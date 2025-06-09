import BarChartComponent from "../../components/barChart/barChart";
import useFetchSalesByRegion from "../../hooks/useFetchSalesByRegion";

const SalesByRegion = () => {
    const {data, isLoading} = useFetchSalesByRegion();

    if (isLoading) return <p>Loading...</p>;
    
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Sales by Region</h2>
            <BarChartComponent data={data} xAxisDataKey={'region'} yAxisDataKey={'revenue'}/>
        </div>
    )
}
export default SalesByRegion;
