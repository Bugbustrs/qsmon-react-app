import React from 'react';
import {Container,Col, Row, Button} from 'react-bootstrap'
import List from './measurement_list';
import Ping from './ping';
import HTTP from './http';
import DNS from './dns';
import TCPSpeedTest from './tcp_speed_test';
import TraceRoute from './trace_route'
import {BrowserRouter, Route } from 'react-router-dom';



export default function MeasurementList() {


  return (
    <BrowserRouter>
  <Container>
    <Row>
      <Col md='3'><List/></Col>
      <Col md='9'>
        <Route path='/result_lists' component ={Ping}/>
        <Route path='/results_home' component={DNS}/>
      
       </Col>

    </Row>
  </Container>
  </BrowserRouter>
  );
}
