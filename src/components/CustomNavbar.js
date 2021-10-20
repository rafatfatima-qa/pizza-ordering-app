import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const CustomNavbar = () => {
    return(
<>
<Navbar className = "navbar-class" variant="dark">
    <Container>
    <Navbar.Brand href="/Options">Pizzaria.com</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/offers">Offers</Nav.Link>
            <Nav.Link href="/OrderList">My Orders</Nav.Link>
        </Nav>
    </Container>
</Navbar>
</>
);
}
export default CustomNavbar;