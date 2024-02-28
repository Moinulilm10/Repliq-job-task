import { useState } from "react";
import { useProductContext } from "../../providers/Provider";
import Categories from "./Categories";
import SearchField from "./SearchField";
import SideMenu from "./SideMenu";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { products, categories } = useProductContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <SearchField />

      <Categories openDrawer={toggleDrawer} />

      <div className="grid grid-cols-2 gap-5 mt-3 md:grid-cols-2">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>

      <SideMenu
        toggleDrawer={toggleDrawer}
        categories={categories}
        isOpen={isOpen}
      />
    </>
  );
};

export default Products;
