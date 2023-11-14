import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../context/CartContext.jsx";
import { FaTrashAlt } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: number;
  item: object;
}
const ItemCard = ({ cuantity, setCuantity }: any) => {
  const { itemList, deleteItemList } = useCart();

  const handleDelete = (item: object) => {
    deleteItemList(item);
  };

  const cartVerfy =
    itemList.length > 0 ? (
      itemList.map((items: CardProps) => (
        <div key={items.id}>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "10rem", height: "8rem", objectFit: "contain" }}
              src={items.image}
            />
            <Card.Body>
              <Card.Title>{items.title}</Card.Title>
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
              <Button onClick={() => handleDelete(items)} variant="danger">
                <FaTrashAlt />
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))
    ) : (
      <h2>sin items en el carrito</h2>
    );
  return <div>{cartVerfy}</div>;
};

export default ItemCard;
