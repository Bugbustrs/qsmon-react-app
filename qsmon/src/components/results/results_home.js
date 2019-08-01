import React from 'react';
import {Container,Col, Row} from 'react-bootstrap'

import List from './results_list';
import {BrowserRouter, Route } from 'react-router-dom';
import DNSResult from './results_wrapper'


export default function MeasurementList() {


  return (
    <BrowserRouter>
  <Container>
    <Row>
      <Col md='3'><List/></Col>
      <Col md='9'>
        <Route path='/results/ping' component ={DNSResult}/>
        <Route path='/results/traceroute' component={DNSResult}/>
        <Route path='/results/dns' component={DNSResult}/>
        <Route path='/results/http' component={DNSResult}/>
        <Route path='/results/tcp' component={DNSResult}/>
       </Col>
    </Row>
  </Container>
  </BrowserRouter>
  );
}
