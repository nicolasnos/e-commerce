import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/CartContext.jsx";

interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: number;
  item: object;
}
const ItemCard = () => {
  const { itemList, deleteItemList } = useCart();
  const [showMore, setShowMore] = useState(false);

  const handleDelete = (item: object) => {
    deleteItemList(item);
  };

  const cartVerfy =
    itemList.length > 0 ? (
      itemList.map((items: CardProps) => (
        <div key={items.id}>
          <Card style={{ width: "18rem", margin: "1.5rem" }}>
            <Card.Img
              variant="top"
              src={items.image}
              style={{ width: "15rem", height: "13rem", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>{items.title}</Card.Title>
              <Card.Text>
                {showMore
                  ? items.description
                  : items.description.substring(0, 100)}
                {items.description.length > 100 ? (
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
                  {items.price}
                </Badge>
                <Button
                  style={{ width: "5rem" }}
                  variant="danger"
                  onClick={() => handleDelete(items)}
                >
                  <AiOutlineShoppingCart />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))
    ) : (
      <h2>sin items en el carrito</h2>
    );
  return <div>{cartVerfy}</div>;
};

export default ItemCard;
