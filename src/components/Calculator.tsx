import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

const Calculator = ({ cuantity }: any) => {
  const { itemList } = useCart();
  const initialValue = 0;

  const totalItemsValues = itemList.map((item: any) => {
    return item.price * cuantity;
  });

  const totalValue = totalItemsValues.reduce(
    (prev, curr) => prev + curr,
    initialValue
  );

  const itemsToPay = itemList.map((item) => {
    return `${item.title}+de+valor+${item.price}+en+cantidad+${cuantity}`;
  });

  return (
    <>
      {itemList.length > 0 ? (
        <div className="totalValue">
          <p>El valor total de tus articulos es</p>
          {totalValue}
          <div className="confirmation">
            <p>para pagar has click aqui</p>
            <Badge
              bg="transparent"
              style={{ height: "2rem", fontSize: "1rem" }}
              text="dark"
              as={Link}
              to={`https://api.whatsapp.com/send?text=%C2%A1Hola+Nicolas+los+productos+que+quiero+comprar+son+${itemsToPay}`}
              target="_blank"
            >
              <FaWhatsapp />
            </Badge>
          </div>
        </div>
      ) : (
        <Badge
          bg="transparent"
          style={{ height: "2rem", fontSize: "1rem" }}
          text="dark"
          as={Link}
          to={"/"}
        >
          Ve a comprar algo <BsFillCartPlusFill />
        </Badge>
      )}
    </>
  );
};

export default Calculator;
