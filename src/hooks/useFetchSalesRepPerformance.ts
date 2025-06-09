import { useQuery } from "@tanstack/react-query";
import { getSalesRepPerformanceData } from "../service/salesRepPerformance.service";

export default () => {
    return useQuery({
        queryKey:['sales-rep'],
        queryFn: getSalesRepPerformanceData
    })
}