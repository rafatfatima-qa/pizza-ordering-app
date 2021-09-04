import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";
import Home from './Home'
import Main from './Main'
import OrderList from './OrderList'
import PlaceOrder from './PlaceOrder'
import CancelOrder from './CancelOrder'


function Options(){
  return (
    <Router>
      <div>
        <ul>
          <hr />
          <Link to="/orderlist" className="btn btn-primary">View All Orders</Link>
          <hr />
          <Link to="/placeorder" className="btn btn-primary">Place an Order</Link>
          <hr />
          <Link to="/cancelorder" className="btn btn-primary">Cancel Order</Link>
        </ul> 

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
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
      </div>
    </Router>
  );
}
export default Options;