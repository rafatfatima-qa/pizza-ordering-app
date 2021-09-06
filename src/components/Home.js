import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pizza from '../assets/pizza-logo.jpg';
import Options from './Options';
import OrderList from './OrderList'
import PlaceOrder from './PlaceOrder'
import CancelOrder from './CancelOrder'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
  useHistory
} from "react-router-dom";

function Home() {

  let history = useHistory();

  function routeChange(){ 
    history.push("/options");
  }

 return (
   <div>
    <Router>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>
        <Figure>
        <Figure.Image
        width={450}
        height={450}
        alt="pizza-logo"
        src={pizza}
        roundedCircle />
        </Figure>
        </Card.Title>
        <Card.Text>
        Proceed to order your favorite pizza!
        </Card.Text>
        <Link to="/options" className="btn btn-primary">Start Here</Link>
        {/* <Button className="btn btn-primary" onClick = {routeChange} >Start Here</Button> */}
        </Card.Body>
    </Card>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
             
        <Route exact path="/options">
            <Options />
        </Route> 

        <Route path="/orderlist">
            <OrderList />
          </Route>
          
        <Route path="/placeorder">
            <PlaceOrder />
          </Route>
          
        <Route path="/cancelorder">
            <CancelOrder />
          </Route>
        </Switch> 
        </Router> 
    </div>
   );
}
export default Home;