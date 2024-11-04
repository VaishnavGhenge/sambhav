import type { AxiosRequestConfig } from 'axios';

import { axiosRequest } from './axios';

export const getRequest = async <T>(url: string, options?: AxiosRequestConfig) => {
    return axiosRequest<T>({ method: 'GET', url, params: options });
};

export const postRequest = async <T>(
    url: string,
    data: Record<string, unknown>,
    options?: AxiosRequestConfig
) => {
    return axiosRequest<T>({ method: 'POST', url, data, ...options });
};

export const putRequest = async <T>(url: string, data: Record<string, unknown>, options?: AxiosRequestConfig) => {
    return axiosRequest<T>({ method: 'PUT', url, data, ...options });
};

export const deleteRequest = async <T>(url: string, data?: Record<string, unknown>, options?: AxiosRequestConfig) => {
    return axiosRequest<T>({ method: 'DELETE', url, data, ...options });
};
