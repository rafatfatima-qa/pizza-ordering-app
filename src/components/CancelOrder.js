import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";

function CancelOrder() {
  
  let history = useHistory();

  const [pizzaDetails, setPizzaDetails] = useState([]);

  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch('https://order-pizza-api.herokuapp.com/api/orders', requestOptions)
        .then(response => response.json())
        .then(data => setPizzaDetails(data))
    },
 []);

 const onClickCancel = (Order_ID) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(`https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`, requestOptions)
    .then(response => {
        if (response.status == 200) {
            alert('Cancelled successfully')
        }
        window.location.reload();
    })
 }

  return (
    <>
    {pizzaDetails.map((pizza) => (
          <div>
             <Card className = "App" style={{ width: '22rem', padding: '10px 40px'}}></Card>
             <div className = "orderDivText">
              <Card.Body>
              <Card.Title>Crust: {pizza.Crust}</Card.Title>
              <Card.Title>Flavor: {pizza.Flavor}</Card.Title>
              <Card.Title>Size: {pizza.Size}</Card.Title>
              </Card.Body>
                <Button className="btn btn-primary" onClick={() => onClickCancel(pizza.Order_ID)}>Cancel Order</Button>{' '}
                <Button className="btn btn-primary" style={{ alignItems: 'center'}} onClick = {() => history.push('/options')}>Back</Button>
                <br />
                <br />
                </div>
          </div>
          ))}
    </>
  );}

export default CancelOrder;