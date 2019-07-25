import React from 'react';
import {Container,Col, Row, Button} from 'react-bootstrap'

import List from './results_list';
import {BrowserRouter, Route } from 'react-router-dom';



export default function MeasurementList() {


  return (
    <BrowserRouter>
  <Container>
    <Row>
      <Col md='3'><List/></Col>
      <Col md='9'>
        <Route path='/results/ping' component ={List}/>
        <Route path='/results/traceroute' component={List}/>
        <Route path='/results/dns' component={List}/>
        <Route path='/results/http' component={List}/>
        <Route path='/results/tcp' component={List}/>

       </Col>

    </Row>
  </Container>
  </BrowserRouter>
  );
}
