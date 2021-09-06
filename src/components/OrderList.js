import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderList(){
  const [pizzaDetails, setPizzaDetails] = useState([]);
  useEffect(() => {
    fetch("/api/orders")
  .then((results) => results.json())
  .then((data) =>{
    setPizzaDetails(data)
    })
  }, [])
  
    return(
      <>
      {pizzaDetails.map((pizza) =>(
      <div>
      <Card style={{ width: '13rem'}}>
      <Card.Body>
        <Card.Title>Crust: {pizza.Crust}</Card.Title>
        <Card.Title>Flavor:{pizza.Flavor}</Card.Title>
        <Card.Title>Size:{pizza.Size}</Card.Title>
        </Card.Body>
        
      </Card>
      </div>
    ))}
    </>
    );} 

export default OrderList;