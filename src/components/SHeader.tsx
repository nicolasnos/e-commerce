import { Route, BrowserRouter, Routes } from "react-router-dom";
import Menu from '../components/Menu'
import Store from '../pages/Store';
import Electronic from '../pages/Electronic';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import logo from "../assets/images/Nlogo.png";

function Header() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container className="me-auto">
              <Badge bg="light" text="dark">
                <Menu/>
              </Badge>
              <Nav>
                <Col xs={6} md={4}>
                  <Image src={logo} roundedCircle width={100} />
                </Col>
              </Nav>
              <Badge bg="light" text="dark">
                carrito
              </Badge>
            </Container>
          </Navbar>
        </header>
        <Routes>
          <Route path='/' element={<Store/>}/>
          <Route path='/electronic' element={<Electronic/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
        </Routes>
      </BrowserRouter>
</>
  );
}

export default Header;