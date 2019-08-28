import React from 'react';
import {Container,Col, Row} from 'react-bootstrap'

import List from './results_list';
import {BrowserRouter, Route } from 'react-router-dom';
import JobList from './job_list';
import MeasurementResults from './results_wrapper';

export default function MeasurementList() {


  return (
    <BrowserRouter>
  <Container>
    <Row>
      <Col md='3'><List/></Col>
      <Col md='9'>
  <Route path='/results/ping' render ={(props)=><JobList {...props} type='ping'/>}/>
        <Route path='/results/dns' render ={(props)=><JobList {...props} type='DNS'/>}/>
        <Route path='/results/http' render ={(props)=><JobList {...props} type='HTTP'/>}/>
        <Route path='/results/tcp' render ={(props)=><JobList {...props} type='TCP Speed Test'/>}/>
        <Route path='/results/measurements' render={(props)=><MeasurementResults {...props}/>}/>
       </Col>
    </Row>
  </Container>
  </BrowserRouter>
  );
}
