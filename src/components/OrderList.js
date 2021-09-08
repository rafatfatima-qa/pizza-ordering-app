import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";


function OrderList(){

  let history = useHistory();

  const [pizzaDetails, setPizzaDetails] = useState([]);
  useEffect(() => {
    fetch('https://order-pizza-api.herokuapp.com/api/orders')
  .then((results) => results.json())
  .then((data) =>{
    setPizzaDetails(data)
    
    })
  }, [])
  
    return(
      <>
      <h3>All Orders</h3>
      {pizzaDetails.map((pizza) =>(
      
      <div>
      <Card className = "App" style={{ width: '22rem', padding: '10px 40px'}}></Card>
        <div className = "orderDivText">
        <Card.Body>
        <Card.Title>Crust: {pizza.Crust}</Card.Title>
        <Card.Title>Flavor: {pizza.Flavor}</Card.Title>
        <Card.Title>Size: {pizza.Size}</Card.Title>
        </Card.Body>
        <Button className="btn btn-primary" style={{ alignItems: 'center'}} onClick = {() => history.push('/options')}>Back</Button>
        </div>
      </div>
    
    ))}
    
    </>        
    );} 

export default OrderList;