import Options from './Options';
import OrderList from './OrderList'
import PlaceOrder from './PlaceOrder'
import CancelOrder from './CancelOrder'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const Main = () => {
    return (
<Router> 
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/pizza-ordering-app">
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
);
}

export default Main;