import { useEffect, useState } from "react";
import { useProductContext } from "../../providers/Provider";
import PaymentWrapper from "../Payment/PaymentWrapper";
import Categories from "./Categories";
import SearchField from "./SearchField";
import SideMenu from "./SideMenu";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { products, categories, paymentScreen } = useProductContext();

  const [search, setSearch] = useState("");
  const [productData, setProductData] = useState(products);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(productData);

  useEffect(() => {
    if (search === "") {
      setProductData(products);
    } else {
      setProductData(
        products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, products]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return paymentScreen ? (
    <PaymentWrapper />
  ) : (
    <>
      <SearchField setSearch={setSearch} />

      <Categories openDrawer={toggleDrawer} />

      <div className="grid grid-cols-2 gap-5 mt-3 md:grid-cols-2">
        {productData.length === 0 && (
          <div className="flex h-full flex-start">
            <h2 className="text-lg font-semibold text-gray-400">
              No Product Found 😔
            </h2>
          </div>
        )}
        {productData.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
      {/* <div className="grid grid-cols-2 gap-5 mt-3 md:grid-cols-2">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div> */}

      <SideMenu
        toggleDrawer={toggleDrawer}
        categories={categories}
        isOpen={isOpen}
      />
    </>
  );
};

export default Products;
