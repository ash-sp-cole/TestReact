import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './body.css';

const Body = (props) => {
    return (
<div>
<Jumbotron className='bodyPage'>
  <h1> Udemy Prop test </h1>
  <hr/>
  <br/>
  <p>
Enter search Query
<div style = {{paddingTop: '40px'}}>

<h3>{props.name}</h3>
</div>
  </p>
  <p>

  </p>
</Jumbotron>



</div>



    )
}

export default Body;