// axiosHandler.ts

import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',  // Replace with your API base URL
  timeout: 10000,  // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

type Method = 'get' | 'post' | 'put' | 'delete';

interface ApiError {
  message: string;
}

// Function to make a request using axios
const axiosHandler = async (method: Method, url: string, data?: any, params?: any): Promise<any> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    params,
  };

  try {
    const response = await axiosInstance.request(config);
    return response.data;
  } catch (error: any) {
    // Handle AxiosError
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response?.data) {
        const apiError: ApiError = axiosError.response.data;
        throw apiError;
      } else {
        throw new Error('An unexpected error occurred');
      }
    } else {
      // Handle other errors
      throw new Error('Network error or something went wrong');
    }
  }
};

export default axiosHandler;
