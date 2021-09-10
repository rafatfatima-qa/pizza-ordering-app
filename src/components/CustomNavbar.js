import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function CustomNavbar(){

    return(
<>
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/Options">Pizzaria.com</Navbar.Brand>
    </Container>
</Navbar>
</>
);
}