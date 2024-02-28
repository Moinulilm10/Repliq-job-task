import { useState } from "react";

const PaymentMethod = ({ label, icon }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Card");

  return (
    <p
      onClick={() => setSelectedPaymentMethod(label)}
      className={`${
        selectedPaymentMethod === label
          ? "bg-primaryBg text-primary"
          : "text-gray-700"
      } md:p-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-primaryBg hover:text-primary md:text-[16px] text-sm transition-300 flex-1`}
    >
      {icon} {label}
    </p>
  );
};

export default PaymentMethod;
