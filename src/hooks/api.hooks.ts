import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductBySlug } from "../services/product-services";
import type { Product } from "../schemas/productSchema";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

export const useProductBySlug = (slug: string | undefined) => {
  return useQuery<Product | undefined, Error>({
    queryKey: ["product", slug],
    queryFn: () => {
      if (!slug) throw new Error("Missing product slug");
      return getProductBySlug(slug);
    },
    enabled: !!slug,
  });
};
