import CartItemsWrapper from "./CartItemsWrapper";
import CartNavbar from "./CartNavbar";
import CustomerHeading from "./CustomerHeading";

const CartWrapper = () => {
  return (
    <>
      <CartNavbar />
      <CustomerHeading />
      <CartItemsWrapper />
    </>
  );
};

export default CartWrapper;
