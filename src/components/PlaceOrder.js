import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';


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
  
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzEwODgzNjksIm5iZiI6MTYzMTA4ODM2OSwianRpIjoiMWRiYjdlMjctMmZlZi00ZGEzLWI1NzEtNzM2NGJhOGQ2OWNjIiwiZXhwIjoxNjMxMDg5MjY5LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.MC5RwhMTsU2yr1H-GPTQ5IVXqSzRnSmaIOYjLT1eJug";
  
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
      <Card className = "placeOrderDivText">
      <Card.Body>

      <Card.Title>
      <label for="crust">Crust:</label>
      <DropdownButton id="dropdown-basic-button" title="Crust" variant="dark" onChange={onChangeCrust}>
      <Dropdown.Item value="thin">Thin</Dropdown.Item>
      <Dropdown.Item value="thick">Thick</Dropdown.Item>
      <Dropdown.Item value="stuffed">Stuffed</Dropdown.Item>
      </DropdownButton>
      </Card.Title>
      <hr />
      <Card.Title>
      <label for="flavor">Flavour:</label>
      <DropdownButton id="dropdown-basic-button" title="Flavor" variant="dark" onChange={onChangeFlavor}>
      <Dropdown.Item href="#/action-1">BBQ</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Fajita</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Veggie Lover</Dropdown.Item>
      </DropdownButton>
      </Card.Title>
      <hr />
      <Card.Title>
      <label for="size">Size:</label>
      <DropdownButton id="dropdown-basic-button" title="Size" variant="dark" onChange={onChangeSize}>
      <Dropdown.Item href="#/action-1">Pan</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
      </DropdownButton>
      </Card.Title>
      <hr />

      <Button className="btn btn-primary" onClick={handleClick}>Place Order</Button>
      </Card.Body>
      
      </Card>
    </>
  );
}

export default PlaceOrder;