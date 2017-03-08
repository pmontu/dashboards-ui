import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, PageHeader} from 'react-bootstrap';
import axios from 'axios'
import qs from 'qs'


var api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  auth: {
    username: 'IZabfQXlLPhMIvdRIStoQ26DMZudAdUk65bs3iui',
    password: 'SULQnwWmNMHE7wp6CnZulb4kSfb4QyFfKR5c5S3Euh5wbMbaLdde3eYZcF1zdyJ8WZPGHL3gsJuQ66xk7iVKFXvMVyYpfn7RihQenWMzziufbTmZB2O9Wmk6yEjegfg1'
  },
});

const data = {
  login: (username, password) => {

    const params = qs.stringify({
      'username': username,
      'password': password,
      'grant_type': "password"
    })

    console.log(params)

    api.post('/o/token/', params)
      .then(function (response) {
        console.log(response);
        api.defaults.headers.common['Authorization'] = response.data.access_token;
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        }
        else {
          console.log(error.message);
        }
      });
  }
}

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }
  login(event){
    event.preventDefault();
    console.log(this.username.value, this.password.value);
    data.login(this.username.value, this.password.value);
  }
  render(){
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Username</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="admin"
            inputRef={ref => { this.username = ref; }}/>
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Password</ControlLabel>
          {' '}
          <FormControl
            type="password"
            placeholder="123"
            inputRef={ref => { this.password = ref; }}/>
        </FormGroup>
        {' '}
        <Button type="submit" onClick={this.login}>
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

        <Row className="show-grid top-buffer">
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
