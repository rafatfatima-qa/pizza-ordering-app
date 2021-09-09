import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


function PlaceOrder() {
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
  
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzExMTYyNjEsIm5iZiI6MTYzMTExNjI2MSwianRpIjoiY2FkNWYyZmMtZGJmMy00YzdiLWE2OTQtM2FjMDEzZjNjMDE0IiwiZXhwIjoxNjMxMTE3MTYxLCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.Hla7genyNemsc7b-JSd9DBI3fSUHlV2KtNQeyDaanVQ";

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

      <Button className="btn btn-primary" onClick={handleClick}>Place Order</Button>
      </Card.Body>
      
      </Card>
      </Container>
      </>
  );
}

export default PlaceOrder;