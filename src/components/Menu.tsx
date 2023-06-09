import { useState } from 'react';
import {  Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineMenuUnfold } from 'react-icons/ai'

const Menu = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <aside>      
      <Button variant="light" onClick={handleShow}><AiOutlineMenuUnfold/></Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>E-Commerce</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={Link} to={"/"} onClick={handleClose}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/electronic"} onClick={handleClose}>Electronicos y Joyeria</Nav.Link>
            <Nav.Link as={Link} to={"/men"} onClick={handleClose}>Hombre</Nav.Link>
            <Nav.Link as={Link} to={"/women"} onClick={handleClose}>Mujer</Nav.Link>
            <Nav.Link as={Link} to={"/cart"} onClick={handleClose}>Carrito</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </aside>
    )
}

export default Menu;