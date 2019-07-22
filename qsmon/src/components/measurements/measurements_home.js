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
        <Route exact path='/ping' component ={Ping}/>
        <Route path='/DNS_Lookup' component={DNS}/>
        <Route path='/trace_route' component={TraceRoute}/>
        <Route path='/http' component={HTTP}/>
        <Route path='/TCP_Speed_Test' component={TCPSpeedTest}/>
       </Col>

    </Row>
  </Container>
  </BrowserRouter>
  );
}
