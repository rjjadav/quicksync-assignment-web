import { useQuery } from "@tanstack/react-query";
import { fetchSalesByRegion } from "../service/regionSales.service";

export default () => {
    return useQuery({
        queryKey: ['salesByRegion'],
        queryFn: fetchSalesByRegion
    })
}