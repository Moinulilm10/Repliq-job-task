import { FaCircleMinus, FaCirclePlus, FaRegTrashCan } from "react-icons/fa6";
import { PiNotePencilLight } from "react-icons/pi";
import { useProductContext } from "../../providers/Provider";

const CartProductItem = ({ cartItem }) => {
  const { increaseQuantity, decreaseQuantity, deleteCartItem } =
    useProductContext();

  return (
    <div className="flex items-center gap-2">
      <PiNotePencilLight className="text-xl" />
      <div className="flex justify-between flex-1 p-2 border">
        <p className="w-1/2 text-sm md:text-lg">{cartItem.product.title}</p>
        <p className="flex-1 text-sm md:text-lg">$ {cartItem.product.price}</p>
        <div className="flex items-center flex-1 gap-3">
          <FaCircleMinus
            className="cursor-pointer"
            onClick={() => decreaseQuantity(cartItem.id)}
          />
          <p>{cartItem.quantity}</p>
          <FaCirclePlus
            className="cursor-pointer"
            onClick={() => increaseQuantity(cartItem.id)}
          />
        </div>
        <p className="flex-1 text-sm md:text-lg text-end">
          $ {cartItem.product.price * cartItem.quantity}
        </p>
      </div>
      <FaRegTrashCan
        onClick={() => deleteCartItem(cartItem.id)}
        className="cursor-pointer text-error"
      />
    </div>
  );
};

export default CartProductItem;
