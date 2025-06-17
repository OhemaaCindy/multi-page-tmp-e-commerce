import axios from "axios";
import { type Product, type ProductListing } from "../schemas/productSchema";

const API_BASE_URL = "http://localhost:8000";

export const getAllProducts = async (): Promise<ProductListing> => {
  const response = await axios.get<ProductListing>(`${API_BASE_URL}/products`);
  return response.data;
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data.find((product: Product) => product.slug === slug);
};
