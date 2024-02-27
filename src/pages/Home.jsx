import { Toaster } from "react-hot-toast";
import CartWrapper from "../components/cart/CartWrapper";
import Products from "../components/products/Products";

const Home = () => {
  return (
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
