import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pizza from '../assets/1.png';
import { useHistory } from "react-router-dom";

const Home = () => {

  let history = useHistory();

  return (
    <div className="text-center">
       <Card.Body> {/*Card.Body is providing some space between navbar n pizza image */}
        <Figure>
          <Figure.Image
            width={280}
            height={280}
            alt="pizza-logo"
            src={pizza}
            roundedCircle />
          <Figure.Image
            width={280}
            height={280}
            alt="pizza-logo"
            src={pizza}
            roundedCircle />
          <Figure.Image
            width={280}
            height={280}
            alt="pizza-logo"
            src={pizza}
            roundedCircle />
        </Figure>

          <h4>Proceed to order your favorite pizza!</h4>
          <Button className="btn" onClick={() => history.push('/placeorder')}>Order Now</Button>
          
      </Card.Body>
    </div>
  );
}
export default Home;