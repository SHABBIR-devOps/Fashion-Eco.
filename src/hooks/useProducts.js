import { useEffect } from "react";
import { useProductStore } from "../store/productStore";

export function useProducts(filters) {
  const { products, status, fetchProducts, setFilters } = useProductStore();

  useEffect(() => {
    if (filters) setFilters(filters);
    fetchProducts(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)]);

  return { products, status };
}
