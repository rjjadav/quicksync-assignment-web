import axiosInstance from "../../utils/axiosInstance";

export interface SalesRecord {
    date: string;
    salesRep: string;
    region: string;
    productCategory: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalRevenue: number;
    customerType: 'B2B' | 'B2C';
    customerName: string;
}

export const fetchRevenueTrends = async () => {
    const data = await axiosInstance.get('/revenue-trends');
    return data?.data;
}