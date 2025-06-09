import BarChartComponent from "../../components/barChart/barChart";
import useFetchProductPerformanceData from "../../hooks/useFetchProductPerformanceData";

const ProductPerformance = () => {
    const {data, isLoading} = useFetchProductPerformanceData();
    if(isLoading) return <p>Loading Data...</p>
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Product Performace Comparision</h2>
            <BarChartComponent data={data} xAxisDataKey={'productName'} yAxisDataKey={'revenue'}/>
        </div>
    )
}

export default ProductPerformance;