import {  Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";

const Store = () => {
  return (
    <>
    <main className="me-auto">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Articulos de hombre</Card.Title>
        <Card.Text>
          Articulos, como ropa y accesorios de hombre
        </Card.Text>
        <Badge bg="dark" as={Link} to={"/men"}>Go somewhere</Badge>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Articulos de Mujer</Card.Title>
        <Card.Text>
        Articulos, como ropa y accesorios de hombre
        </Card.Text>
        <Badge bg="dark" as={Link} to={"/women"}>Go somewhere</Badge>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Electrodomesticos</Card.Title>
        <Card.Text>
          Electrodomesticos y otras cosas
        </Card.Text>
        <Badge bg="dark" as={Link} to={"/electronic"}>Go somewhere</Badge>
      </Card.Body>
    </Card>
    </main>
    </>
    
  )
}

export default Store