import React from 'react';
import {Container} from 'react-bootstrap'

export default function FixedContainer(props) {
  return (

    <Container>
       <br></br>
      <br></br>
      <hr></hr>
     
  {props.children}

   
</Container>
  );
};