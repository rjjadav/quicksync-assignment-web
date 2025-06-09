import axiosInstance from "../utils/axiosInstance"

export const getSalesRepPerformanceData = async () => {
    const {data} = await axiosInstance.get('/sales-rep-performance');
    return data;
}