import { useState } from 'react';
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
            <Nav.Link href="/electronics">Electronicos</Nav.Link>
            <Nav.Link href="/men">Hombres</Nav.Link>
            <Nav.Link href="/women">Mujeres</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </aside>
  )
}

export default Menu;