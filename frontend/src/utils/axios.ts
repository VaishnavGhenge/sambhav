import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { TGenericApiResponse } from '@/types/api';

export const axiosRequest = async <T>(config: AxiosRequestConfig): Promise<TGenericApiResponse<T>> => {
    const axiosClient = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        timeout: 10000
    });

    try {
        const response = await axiosClient.request<TGenericApiResponse<T>>(config);
        return response.data as TGenericApiResponse<T>;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
