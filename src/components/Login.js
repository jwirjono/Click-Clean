import React,{Component} from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image
} from 'react-bootstrap';
import "../css/Login.css";
import {connect} from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      dataLogin:{
        email:"",
        pass:""
      },
      dataBase:[]
    }
    this.InputChange = this.InputChange.bind(this);
    this.SubmitPost = this.SubmitPost.bind(this);
  }

  InputChange(e){
    let dataTaken = {...this.state.dataLogin};
    dataTaken[e.target.name]= e.target.value;
    this.setState({
      dataLogin:dataTaken,
    })
  }
  SubmitPost(){
    var logi = false;
    this.state.dataBase.map((value)=>{
      if(value.email === this.state.dataLogin.email){
          if(value.pass === this.state.dataLogin.pass){
              logi = true;
          }
      }
    });

    if(logi){
      let path = `/home`;
      this.props.history.push(path);
    }
    else{
      alert("Wrong Password or Email");
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3000/account`).then(
      res=>{
        this.setState({
          dataBase:res.data
        })
        console.log(res.data);
      }
    )
  }

  render(){
    return(
      <Container className="w-100 p-3" fluid >
        <Row>
          <Col className="title">
            <h1>CLICK & CLEAN</h1>
          </Col>
        </Row>
        <Row id="backg">
          <Col className="removecol">
            <Container>
              <Col xs={{offset:4}}>
                <Row>
                  <p>Haven't Sign Up yet?</p>
                </Row>
                <Row>
                <Button variant="success">
                  <a id="aa" href="/signup">Sign Up Here</a>
                </Button>
                </Row>
              </Col>
            </Container>
          </Col>
          <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email"value={this.state.email} onChange={this.InputChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="pass"value={this.state.pass} onChange={this.InputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.SubmitPost}>
              Log In
            </Button>
            <Form.Group>
              <Button variant="success" id="button600">
                <a href="/signup" id="aa">Sign Up Here</a>
              </Button>
            </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return dispatch({
    type:"ACTIVE_PAGE",
    aktif: "sign"
  })
}

export default withRouter(connect (null,mapDispatchToProps)(Login));
