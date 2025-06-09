import axiosInstance from "../utils/axiosInstance"

export const getProductPerformance = async () => {
    const {data} = await axiosInstance.get('/product-performance');
    return data;
}