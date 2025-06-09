import { useQuery } from "@tanstack/react-query";
import { getProductPerformance } from "../service/productPerformace.service";

export default () => {
  return useQuery({
    queryKey:['productPerformance'],
    queryFn: getProductPerformance
  })
}