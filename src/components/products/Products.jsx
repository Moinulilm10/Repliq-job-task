import { useProductContext } from "../../providers/Provider";
import SearchField from "./SearchField";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { products } = useProductContext();

  //   console.log(products);

  return (
    <>
      <SearchField />

      {/* categories component */}

      <div className="grid grid-cols-2 gap-5 mt-3 md:grid-cols-2">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
