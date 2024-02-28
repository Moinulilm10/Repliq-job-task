import { MdClose, MdDiscount, MdPause, MdPayment } from "react-icons/md";
import { useProductContext } from "../../providers/Provider";
import IconButton from "../IconButton";
import CartProductItem from "./CartProductItem";
import OrderCalculate from "./OrderCalculate";

const CartItemsWrapper = () => {
  const { cartItems, totalPrice, setPaymentScreen } = useProductContext();

  return (
    <>
      <div>
        {cartItems.map((cartItem, index) => (
          <CartProductItem key={index} cartItem={cartItem} />
        ))}
      </div>
      {cartItems.length !== 0 && (
        <div className="mt-5">
          <OrderCalculate />
        </div>
      )}
      {cartItems.length !== 0 && (
        <div className="flex items-center justify-between p-3 mt-5 rounded-md bg-secondaryBg text-secondary">
          <div className="text-xs">Products Count ({cartItems.length})</div>
          <div className="flex gap-10">
            <p className="font-bold">Total</p>
            <p className="font-bold">$ {totalPrice}</p>
          </div>
        </div>
      )}
      {cartItems.length !== 0 && (
        <div className="flex gap-2 mt-2">
          <IconButton
            label={"Cancel"}
            icon={<MdClose />}
            labelColor={"text-red-500"}
            bgColor={"bg-red-200"}
          />
          <IconButton label={"Hold"} icon={<MdPause />} />
          <IconButton label={"Discount"} icon={<MdDiscount />} />
          <IconButton
            onClick={() => setPaymentScreen(true)}
            label={"Pay Now"}
            icon={<MdPayment />}
          />
        </div>
      )}
    </>
  );
};

export default CartItemsWrapper;
