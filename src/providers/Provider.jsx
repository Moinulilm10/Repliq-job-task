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
  const [cartItems, setCartItems] = useState([]);

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
        // console.log(allProducts);
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
        // console.log(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const filterProductsByCategory = (selectedCategory) => {
    const category = selectedCategory.toLowerCase();

    if (category === "all") {
      setProducts(allProducts);
    } else {
      setProducts(
        allProducts.filter((product) => product.category === category)
      );
    }
  };

  // add product in cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { id: cartItems.length + 1, product, quantity: 1 },
      ]);
    }
  };

  // product quantity increase
  const increaseQuantity = (cartItemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // product quantity decrease
  const decreaseQuantity = (cartItemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === cartItemId
        ? item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item, quantity: 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  // Handle cart item deletion
  const deleteCartItem = (cartItemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== cartItemId);
    setCartItems(updatedItems);
  };

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
        filterProductsByCategory,
        addToCart,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        deleteCartItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default Provider;
