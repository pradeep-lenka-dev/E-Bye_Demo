import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com/",
    headers: { 'Content-Type': 'application/json' },
})

export const fetchData = async (endpoint) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  };

export const fetchProductDetails = async (productId) => {
  console.log("🚀 ~ fetchProductDetails ~ productId:", productId)
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product details for product ID ${productId}`, error);
    throw error;
  }
};
  
  export default axiosInstance;