import PerformaceCardComponent from "../../components/performaceCard/performaceCard";
import useFetchSalesRepPerformance from "../../hooks/useFetchSalesRepPerformance";

const SalesPerformace = () => {
    const {data, isLoading} = useFetchSalesRepPerformance();
    if(isLoading) return <p>Loading Data...</p>
    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {data.map((rep: { salesRep: any; }, index: any) => (
                <PerformaceCardComponent key={rep.salesRep} rep={rep} index={index} />
            ))}
        </div>
    )
}

export default SalesPerformace;