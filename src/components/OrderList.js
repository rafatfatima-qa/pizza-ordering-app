import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function OrderList({
  crust}) {
  return (
     <Card style={{ width: '13rem' }}>
     <Card.Body>
      <Card.Title>Crust = {crust}</Card.Title>
      </Card.Body>
     </Card>
   
  );
}