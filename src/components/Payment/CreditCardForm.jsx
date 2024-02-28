import { BsCashCoin } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { useProductContext } from "../../providers/Provider";
import IconButton from "../IconButton";
import PaymentMethod from "./PaymentMethod";

const CreditCardForm = () => {
  const { totalPrice, setPaymentScreen } = useProductContext();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex justify-between p-5 font-semibold border-2">
        <p>Order Amount</p>
        <p>{totalPrice} $</p>
      </div>
      <div className="border-2 md:mt-5 md:flex">
        <div className="flex flex-row border-b-2 md:w-32 md:flex-col md:border-r-2">
          <PaymentMethod
            icon={<FaRegCreditCard className="text-[28px]" />}
            label={"Card"}
          />
          <PaymentMethod
            icon={<BsCashCoin className="text-[28px]" />}
            label={"Cash"}
          />
          <PaymentMethod
            icon={<IoPerson className="text-[28px]" />}
            label={"On Account"}
          />
          <PaymentMethod
            icon={<CiMoneyCheck1 className="text-[28px]" />}
            label={"Cheque"}
          />
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="px-10 py-5 bg-white rounded shadow-md md:px-20 md:py-10"
          >
            <div className="mb-4">
              <label
                htmlFor="cardName"
                className="block mb-2 text-sm font-bold"
              >
                Card Name
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block mb-2 text-sm font-bold"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
                minLength={16}
                maxLength={16}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardExpiryDate"
                className="block mb-2 text-sm font-bold"
              >
                Card Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                id="cardExpiryDate"
                name="cardExpiryDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
                pattern="^\d{2}/\d{2}$"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardSecret"
                className="block mb-2 text-sm font-bold"
              >
                Card Secret
              </label>
              <input
                type="password"
                id="cardSecret"
                name="cardSecret"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
                minLength={3}
              />
            </div>
            <div className="flex justify-end gap-5">
              <div className="w-28">
                <IconButton
                  onClick={() => setPaymentScreen(false)}
                  labelColor={"text-red-500"}
                  bgColor={"bg-red-200"}
                  type="submit"
                  label={"Cancel"}
                  icon={<MdOutlineClose />}
                />
              </div>
              <IconButton
                onClick={() => setPaymentScreen(false)}
                labelColor={"text-white"}
                bgColor={"bg-blue-400"}
                type="submit"
                label={"Complete Payment"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreditCardForm;
