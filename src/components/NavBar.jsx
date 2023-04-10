import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartBar from './CartBar';



const NavBar = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            <Navbar class="navbar navbar-expand-lg navbar-dark bg-primary" bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/' >Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            <Nav.Link as={Link} to='/purchases' >Purchases </Nav.Link>
                            <Nav.Link onClick={handleShow} to='/products/:id' >Cart  </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          <CartBar show={show} handleClose={handleClose} />
        </>

    );
};

export default NavBar;