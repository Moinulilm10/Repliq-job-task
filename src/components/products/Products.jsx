import { useState } from "react";
import { useProductContext } from "../../providers/Provider";
import Categories from "./Categories";
import SearchField from "./SearchField";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { products } = useProductContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <SearchField />

      {/* categories component */}
      <Categories openDrawer={toggleDrawer} />

      <div className="grid grid-cols-2 gap-5 mt-3 md:grid-cols-2">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>

      {/* drawer component  */}
    </>
  );
};

export default Products;
