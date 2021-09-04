import React, {useEffect, useState} from 'react';
import OrderList from './OrderList'

function Main() {
  const [userDetails, setuserDetails] = useState([])   
    
  useEffect(() => {
    fetch ('/api/orders')
    .then (results => results.json())
    .then (data =>{
        setuserDetails(data.results);
        console.log(data.results)
        console.log(userDetails)      
    })
  }, [])
  

return(
<div>

   {userDetails.map((user) => (
    <OrderList
    key = {user.Order_ID}

    crust = {user.Crust}
    />
    ))}
</div>
);}

export default Main;