import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import menIMG from "../assets/images/men.jpg";
import womenIMG from "../assets/images/women.jpg";
import electIMG from "../assets/images/electronic.jpg";
import "../styles/Store.css";

const Store = () => {
  const pathNames = [
    {
      id: 0,
      image: menIMG,
      title: "Articulos de hombre",
      text: " Articulos, como ropa y accesorios de hombre",
      path: "/men",
    },
    {
      id: 1,
      image: womenIMG,
      title: "Articulos de mujer",
      text: " Articulos, como ropa y accesorios de mujer",
      path: "/women",
    },
    {
      id: 2,
      image: electIMG,
      title: "Electronicos",
      text: "Electrodomesticos, joyería y más artículos",
      path: "/electronic",
    },
  ];
  return (
    <main>
      {pathNames.map((pathName) => (
        <Card
          key={pathName.id}
          style={{
            width: "18rem",
            textDecoration: "none",
            color: "black",
            marginTop: "20px",
            textAlign: "center",
          }}
          as={Link}
          to={pathName.path}
        >
          <Card.Img
            variant="top"
            style={{ height: "300px", objectFit: "cover" }}
            src={pathName.image}
            alt={`imagen de ${pathName.title}`}
          />
          <Card.Body>
            <Card.Title>{pathName.title}</Card.Title>
            <Card.Text>{pathName.text}</Card.Text>
            <Badge bg="dark">Ir a {pathName.title}</Badge>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
};

export default Store;
