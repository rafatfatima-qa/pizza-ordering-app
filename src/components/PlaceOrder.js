import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import {useHistory} from "react-router-dom";


function PlaceOrder() {

  let history = useHistory();

  const [crust, setCrust] = useState('');
  const [flavor, setFlavor] = useState('');
  const [size, setSize] = useState('');
  
  const onChangeCrust = (event) => {
    setCrust(event.target.value);
  }

  const onChangeFlavor = (event) => {
    setFlavor(event.target.value);
  }

  const onChangeSize = (event) => {
    setSize(event.target.value);
  }

  const handleClick = () => {
    console.log(crust, flavor, size);
    if (crust == "" || flavor == "" || size == "" ) {
      alert('please select appropriate options')
    }
    else {
      let pizzaObject = {
        "Flavor": flavor,
        "Crust": crust,
        "Size": size,
        "Table_No": 0,
        "Timestamp": new Date()
      }
  
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzEzNDEwOTgsIm5iZiI6MTYzMTM0MTA5OCwianRpIjoiODJjMGE4ZGQtMjFlNy00ZGRhLTkwYWUtOGZhZGI0ZDZkOWUzIiwiZXhwIjoxNjMxMzQxOTk4LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.vqfzkwtBOxq7l4F1L-kMRJ7Rn9fL6-94O51oYOv1iZQ";

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
  body: JSON.stringify(pizzaObject)
};

fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
  .then(response => { if (response.status == 201) {
    alert('Your order has been registered')
  }
  })}
}

  
  return (
    <>
      <Container>

      <Card className = "placeOrderDivText">
      <Card.Body>

      <Card.Title>
      <Form.Label for="crust">Crust:</Form.Label>
      <Form.Select name="crust" aria-label="Default select example" onChange={onChangeCrust}>
      <option>Please Select</option>
      <option value="THICK">Thick</option>
      <option value="THIN">Thin</option>
      <option value="STUFFED">Stuffed</option>
      </Form.Select>
      </Card.Title>
      <hr />

      <Card.Title>
      <Form.Label for="flavor">Flavor:</Form.Label>
      <Form.Select name="flavor" aria-label="Default select example" onChange={onChangeFlavor}>
      <option>Please Select</option>
      <option value="BBQ">BBQ</option>
      <option value="FAJITA">Fajita</option>
      <option value="VEGGIE">Veggie Lover</option>
      </Form.Select>
      </Card.Title>
      <hr />

      <Card.Title>
      <Form.Label for="size">Size:</Form.Label>
      <Form.Select name="size" aria-label="Default select example" onChange={onChangeSize}>
      <option>Please Select</option>
      <option value="PAN">Pan</option>
      <option value="MEDIUM">Medium</option>
      <option value="LARGE">Large</option>
      </Form.Select>
      </Card.Title>
      <hr />

      <Button className="btn btn-primary" onClick={handleClick}>Place Order</Button> {' '}
      <Button className="btn btn-primary" style={{ alignItems: 'center'}} onClick = {() => history.push('/options')}>Back</Button>
      </Card.Body>
      
      </Card>
      </Container>
      </>
  );
}

export default PlaceOrder;