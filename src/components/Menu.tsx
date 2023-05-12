import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


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
      <BrowserRouter>

          <Nav defaultActiveKey="/home" className="flex-column">
            <Link to="/">Inicio</Link>
            <Link to="/electronic">Electronic</Link>
            <Link to="/">men</Link>
            <Link to="/">women</Link>
          </Nav>
    </BrowserRouter>
        </Offcanvas.Body>
      </Offcanvas>
    </aside>
    )
}

export default Menu;