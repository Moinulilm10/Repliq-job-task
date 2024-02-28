import { Toaster } from "react-hot-toast";
import CustomLoader from "../components/CustomLoader";
import CartWrapper from "../components/cart/CartWrapper";
import Products from "../components/products/Products";
import { useProductContext } from "../providers/Provider";

const Home = () => {
  const { isLoading } = useProductContext();

  return isLoading ? (
    <CustomLoader />
  ) : (
    <div className="p-2 flex lg:flex-row gap-5 flex-col max-w-[1920px] max-h-[1080px]">
      <div className="flex-1">
        <CartWrapper />
      </div>
      <div
        className="border"
        style={{
          height: "95vh",
        }}
      />
      <div className="flex-1">
        <Products />
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Home;
