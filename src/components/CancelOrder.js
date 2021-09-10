import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Button from 'react-bootstrap/Button';

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
    <div>{pizzaDetails.map((pizza) => {
      return <div>
                <div>{pizza.Crust}</div>
                <div>{pizza.Flavor}</div>
                <div>{pizza.Size}</div>
                <Button className="btn btn-primary" onClick={() => onClickCancel(pizza.Order_ID)}>Cancel Order</Button>{' '}
                <Button className="btn btn-primary" style={{ alignItems: 'center'}} onClick = {() => history.push('/options')}>Back</Button>
                <br />
                <br />
             </div>})}
    </div>
    </>
  );
}


export default CancelOrder;