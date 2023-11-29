import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../context/CartContext.js";
import { FaTrashAlt } from "react-icons/fa";
import "../styles/ItemCard.css";

interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: number;
}
const ItemCard = ({ cuantity, setCuantity }: any) => {
  const { cartItems, removeFromCart } = useCart();

  const handleDelete = (item: number) => {
    removeFromCart(item);
  };

  const cartVerfy =
    cartItems.length > 0 ? (
      cartItems.map((cartItem: CardProps) => (
        <div key={cartItem.id}>
          <Card
            className="text-center"
            style={{
              width: "16rem",
              margin: "1rem",
            }}
          >
            <Card.Img
              variant="top"
              style={{
                width: "6rem",
                height: "4rem",
                margin: "auto",
                objectFit: "contain",
              }}
              src={cartItem.image}
            />
            <Card.Body>
              <Card.Title>{cartItem.title}</Card.Title>
              <Button
                disabled={cuantity == 1 ? true : false}
                onClick={() => setCuantity(cuantity - 1)}
              >
                -
              </Button>
              {cuantity}
              <Button onClick={() => setCuantity(cuantity + 1)}>+</Button>
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={() => handleDelete(cartItem.id)}
                variant="danger"
              >
                <FaTrashAlt />
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))
    ) : (
      <h2>sin items en el carrito</h2>
    );
  return <div className="Articles">{cartVerfy}</div>;
};

export default ItemCard;
