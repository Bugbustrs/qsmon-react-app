import React from 'react';
import {Container,Row, Col} from 'react-bootstrap'
import { Button } from 'react-bootstrap';

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
