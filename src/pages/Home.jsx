import { Toaster } from "react-hot-toast";
import CartWrapper from "../components/cart/CartWrapper";

const Home = () => {
  return (
    <div className="p-2 flex lg:flex-row gap-5 flex-col max-w-[1920px] max-h-[1080px]">
      <div className="flex-1">
        <CartWrapper />
      </div>
      <div className="flex-1">{/* product component */}</div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Home;
