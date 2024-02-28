import CreditCardForm from "./CreditCardForm";
import PaymentMethod from "./PaymentMethod";

const PaymentWrapper = () => {
  return (
    <div>
      <PaymentMethod />
      <CreditCardForm />
    </div>
  );
};

export default PaymentWrapper;
