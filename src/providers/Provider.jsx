/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export function useProductContext() {
  return useContext(ShopContext);
}

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const shippingCharge = 10;
  const tax = 15;
  const discountOnCart = 7;

  // fetch products and categories
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setAllProducts(data.products);
        setProducts(data.products);
        console.log(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(["All", ...data]);
        setSelectedCategory("All");
        console.log(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        products,
        allProducts,
        categories,
        selectedCategory,
        setSelectedCategory,
        shippingCharge,
        tax,
        discountOnCart,
        isLoading,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default Provider;
