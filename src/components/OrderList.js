import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

const OrderList = () => {
  let history = useHistory();

  const [pizzaDetails, setPizzaDetails] = useState([]);
  useEffect(() => {
    fetch('https://order-pizza-api.herokuapp.com/api/orders')
      .then((results) => results.json())
      .then((data) => {
        setPizzaDetails(data)

      })
  }, [])

  return (
    <>
      <div className = "back-btn">
      <Button className="btn btn-primary" onClick={() => history.push('/options')}>Back</Button>
      </div>
      <Row xs={1} md={3} className="g-4">
      {pizzaDetails.map((pizza) => (
         <Col>
        <div className = "all-orders-div">
          <Card  border="dark" className="App" style={{ width: '22rem', padding: '10px 40px' }}></Card>
          <div className="orderDivText">
             <Card.Body>
              <Card.Title>Crust: {pizza.Crust}</Card.Title>
              <Card.Title>Flavor: {pizza.Flavor}</Card.Title>
              <Card.Title>Size: {pizza.Size}</Card.Title>
            </Card.Body>
            
          </div>
        </div>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default OrderList;