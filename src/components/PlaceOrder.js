import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  withRouter,
  Link,
  useHistory
} from "react-router-dom";


export default function PlaceOrder() {
  return (
    <Card className="text-center">
    <Card.Body>
      <Card.Title>
      Enter the details of your order:
      </Card.Title>
      <Card.Text>
      <DropdownButton id="dropdown-basic-button" title="Crust">
      <Dropdown.Item href="#/action-1">Thin</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Thick</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Cheese Filled</Dropdown.Item>
      </DropdownButton>
      <hr />
      <DropdownButton id="dropdown-basic-button" title="Flavour">
      <Dropdown.Item href="#/action-1">BBQ</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Fajita</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Veggie Lover</Dropdown.Item>
      </DropdownButton>
      <hr />
      <DropdownButton id="dropdown-basic-button" title="Size">
      <Dropdown.Item href="#/action-1">Pan</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
      </DropdownButton>
      <hr />
      </Card.Text>
      <Link to="/options" className="btn btn-primary">Place Order</Link>
      </Card.Body>
  </Card>
  );
}
