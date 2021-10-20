import React from "react";
import {Link} from "react-router-dom";

const Options = () => {
  return (
    
       <div className = "text-center optionsDiv">
        <ul>
          <hr />
          <Link to="/orderlist" className="btn btn-primary">View All Orders</Link>
          <hr />
          <Link to="/placeorder" className="btn btn-primary">Place an Order</Link>
          <hr />
          <Link to="/cancelorder" className="btn btn-primary">Cancel Order</Link>
        </ul>   
      </div>
     
);
}
export default Options;