import React from 'react';
import {Container,Col, Row, Button} from 'react-bootstrap'

import List from './results_list';
import {BrowserRouter, Route } from 'react-router-dom';
<<<<<<< HEAD
import DNSResult from './dns/dns_wrapper'
=======
import DNSResult from './dns/dns_detail'
>>>>>>> 5742ae578e1914eab25c7662ab8ca5cc4d0a5a07
import DNSGraph from './dns/dns_graph'


export default function MeasurementList() {


  return (
    <BrowserRouter>
  <Container>
    <Row>
      <Col md='3'><List/></Col>
      <Col md='9'>
        <Route path='/results/ping' component ={List}/>
        <Route path='/results/traceroute' component={List}/>
        <Route path='/results/dns' component={DNSResult}/>
        <Route path='/results/http' component={DNSGraph}/>
        <Route path='/results/tcp' component={List}/>
<<<<<<< HEAD
       </Col>
=======

       </Col>

>>>>>>> 5742ae578e1914eab25c7662ab8ca5cc4d0a5a07
    </Row>
  </Container>
  </BrowserRouter>
  );
}
