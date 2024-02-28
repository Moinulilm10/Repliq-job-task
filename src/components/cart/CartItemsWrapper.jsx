import { useProductContext } from "../../providers/Provider";
import CartProductItem from "./CartProductItem";

const CartItemsWrapper = () => {
  const { cartItems } = useProductContext();

  return (
    <>
      <div>
        {cartItems.map((cartItem, index) => (
          <CartProductItem key={index} cartItem={cartItem} />
        ))}
      </div>
    </>
  );
};

export default CartItemsWrapper;
