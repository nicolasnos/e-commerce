import { useState } from "react";
import { useCart, CartItem } from "../context/CartContext.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: number;
  item: CartItem;
}
const CardC = ({ title, description, image, price, id, item }: CardProps) => {
  const { addToCart } = useCart();
  const [showMore, setShowMore] = useState(false);

  const handleAddItem = (item: CartItem) => {
    addToCart(item);
    alert("has añadido al carrito " + item.title);
  };
  const chunked = () => {
    const cut = description.substring(0, 100);
    return <p>{cut}</p>;
  };
  return (
    <div key={id}>
      <Card style={{ width: "18rem", margin: "1.5rem" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ width: "15rem", height: "13rem", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {showMore ? description : chunked()}
            {description.length > 100 ? (
              <div className="ml-4 mb-16 mt-4 w-2/4">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "mostrar menos" : "mostrar mas"}
                </Button>
              </div>
            ) : null}
          </Card.Text>
          <div className="confirm">
            <Badge bg="light" text="dark">
              {price}
            </Badge>
            <Button
              style={{ width: "5rem" }}
              variant="primary"
              onClick={() => handleAddItem(item)}
            >
              <AiOutlineShoppingCart />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardC;
