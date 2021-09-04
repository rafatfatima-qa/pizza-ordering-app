import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function CustomNavbar(){

    return(
<>
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/Home">Pizzaria.com</Navbar.Brand>
    </Container>
</Navbar>
</>
);
}