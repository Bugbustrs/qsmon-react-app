import React from 'react';
import {Container,Col, Row} from 'react-bootstrap'
import List from './measurement_list';

import JobDescription from './job_description';

import {BrowserRouter, Route } from 'react-router-dom';



export default function MeasurementList() {


  return (
    <BrowserRouter>
  <Container>
    <Row>
      <Col md='3'><List/></Col>
      <Col md='9'>
        <Route exact path='/ping' render={(type)=>(<JobDescription  {...type}   />)} />
        <Route path='/dns_lookup' render={(type)=>(<JobDescription  {...type}   />)} />
        <Route path='/traceroute' render={(type)=>(<JobDescription  {...type}   />)} />
        <Route path='/http' render={(type)=>(<JobDescription  {...type}   />)} />
        <Route path='/tcp_speed_test' render={(type)=>(<JobDescription  {...type}   />)} />

       </Col>

    </Row>
  </Container>
  </BrowserRouter>
  );
}
