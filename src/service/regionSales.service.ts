import axiosInstance from "../utils/axiosInstance"

export const fetchSalesByRegion = async () => {
    const {data} = await axiosInstance.get('/sales-by-region')
    return data;
}