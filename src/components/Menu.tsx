import { useState } from 'react';
import {  Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

const Menu = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <aside>      
      <Button variant="dark" onClick={handleShow}>Menu </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>E-Commerce</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/electronic"}>Electronicos</Nav.Link>
            <Nav.Link as={Link} to={"/men"}>Hombre</Nav.Link>
            <Nav.Link as={Link} to={"/women"}>Mujer</Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>Carrito</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </aside>
    )
}

export default Menu;