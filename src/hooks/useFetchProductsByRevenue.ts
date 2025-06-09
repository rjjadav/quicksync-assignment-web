import { useQuery } from "@tanstack/react-query"
import { fetchProductsByRevenue } from "../service/productsByRevenue.service"

export default () => {
    return useQuery({
        queryKey: ['productsByRevenue'],
        queryFn: fetchProductsByRevenue
    })
}