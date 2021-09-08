import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pizza from '../assets/pizza-logo.jpg';
import {useHistory} from "react-router-dom";

function Home() {

  let history = useHistory();

  return (
   <div>
      <Card className=" logoDiv text-center">
      <Card.Body>
        
        <Figure>
        <Figure.Image
        width={450}
        height={450}
        alt="pizza-logo"
        src={pizza}
        roundedCircle />
        </Figure>
        
        <Card.Text>
        <h4>Proceed to order your favorite pizza!</h4>
        </Card.Text>
        <Button className="btn btn-primary" onClick = {() => history.push('/options')}>Start Here</Button>
        </Card.Body>
    </Card>
    </div>
   );
}
export default Home;