const OrderSummary = ({ label, value, labelStyle }) => {
  return (
    <div className="flex gap-10 p-2">
      <p className={`w-40 ${labelStyle}`}>{label}</p>
      <p className="flex-1 font-medium text-end">{value}</p>
    </div>
  );
};

export default OrderSummary;
