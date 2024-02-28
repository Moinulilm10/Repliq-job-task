import { useProductContext } from "../../providers/Provider";
import CartProductItem from "./CartProductItem";
import OrderCalculate from "./OrderCalculate";

const CartItemsWrapper = () => {
  const { cartItems, totalPrice } = useProductContext();

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
    </>
  );
};

export default CartItemsWrapper;
