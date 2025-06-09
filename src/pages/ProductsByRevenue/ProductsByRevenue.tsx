import PieChartComponent from "../../components/pieChart/pieChart";
import useFetchProductsByRevenue from "../../hooks/useFetchProductsByRevenue";

const ProductsByRevenue = () => {
    const {data, isLoading} = useFetchProductsByRevenue();

    if(isLoading) return <p>Loading...</p>
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Product By Revenue</h2>
            <PieChartComponent data={data} />
        </div>
    )
}

export default ProductsByRevenue;