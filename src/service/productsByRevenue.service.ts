import axiosInstance from "../utils/axiosInstance"

export const fetchProductsByRevenue = async () => {
    const {data} = await axiosInstance.get('/products-by-revenue');
    return data;
}