import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, PageHeader} from 'react-bootstrap';


class LoginForm extends Component{
  render(){
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Username</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="admin" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Password</ControlLabel>
          {' '}
          <FormControl type="password" placeholder="123" />
        </FormGroup>
        {' '}
        <Button type="submit">
          Login
        </Button>
      </Form>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Grid>

        <Row className="show-grid"><Col xs={12}>{'.'}</Col></Row>

        <Row className="show-grid">
          <Col xs={5}></Col>
          <Col xs={7}>
            <LoginForm />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={1}></Col>
          <Col xs={10}>
            <PageHeader>Dashboards <small>Manage User</small></PageHeader>
          </Col>
          <Col xs={1}></Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
