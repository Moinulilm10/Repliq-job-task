import { Badge, Button, Card } from "keep-react";
import toast from "react-hot-toast";
import { MdOutlineDiscount, MdShoppingCart } from "react-icons/md";
import { PiHeart } from "react-icons/pi";
import { useProductContext } from "../../providers/Provider";

const SingleProduct = ({ product }) => {
  const { discountOnCart, addToCart } = useProductContext();

  //   console.log(product, typeof product.description);

  const productAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart");
  };

  return (
    <Card
      className="h-auto max-w-xs overflow-hidden rounded-md shadow-md"
      imgSrc={product.thumbnail}
      imgSize="md"
      imgAlt={product.id}
    >
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
        <PiHeart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="p-6">
        <Card.Container className="flex items-center justify-between">
          <Badge size="xs" colorType="light" color="gray">
            For Sale
          </Badge>
          <Card.Title>${product.price}</Card.Title>
          <MdOutlineDiscount className="mr-[-1rem]" />
          <Card.Title>{discountOnCart}</Card.Title>
        </Card.Container>
        <Card.Container className="my-3">
          <Card.Title>{product.title}</Card.Title>
        </Card.Container>
        <Card.Container className="flex items-center justify-start gap-5">
          <Button onClick={productAddToCart} size="xs" type="outlineGray">
            <span className="pr-2">
              <MdShoppingCart size={24} />
            </span>
            Add To Cart
          </Button>
        </Card.Container>
      </Card.Container>
    </Card>
  );
};

export default SingleProduct;
