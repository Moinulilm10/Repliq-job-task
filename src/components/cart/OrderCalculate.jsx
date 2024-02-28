import { useProductContext } from "../../providers/Provider";
import OrderSummary from "./OrderSummary";

const OrderCalculate = () => {
  const { totalPrice, shippingCharge, tax, discountOnCart } =
    useProductContext();

  return (
    <div className="flex justify-end">
      <div className="flex-col justify-end text-sm">
        <hr />
        <OrderSummary label={"Tax"} value={`${tax} $`} />
        <hr />
        <OrderSummary label={"Shipping"} value={`${shippingCharge} $`} />
        <hr />
        <OrderSummary
          label={"Discount on Cart"}
          value={`-${discountOnCart} $`}
        />
        <hr />
        <OrderSummary label={"Sub Total"} value={`${totalPrice} $`} />
      </div>
    </div>
  );
};

export default OrderCalculate;
