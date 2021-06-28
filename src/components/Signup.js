import React,{Component} from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Form
}from 'react-bootstrap';
import {connect} from 'react-redux';
import "../css/Signup.css";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Signup extends Component{
  constructor(props){
    super(props);
    this.state={
      dataLogin:{
        id:0,
        email:"",
        pass:"",
        address:"",
        phone:""
      },
      taken:false,
      dataBase:[],
    }
    this.InputChange = this.InputChange.bind(this);
    this.SubmitPost = this.SubmitPost.bind(this);
    this.ReloadData = this.ReloadData.bind(this);
  }
  InputChange(e){
    let dataTaken = {...this.state.dataLogin};
    dataTaken['id']= new Date().getTime();
    dataTaken[e.target.name]= e.target.value;
    this.setState({
      dataLogin:dataTaken,
      taken:false
    })
    this.state.dataBase.map((value)=>{
      if(value.email === dataTaken.email){
        this.setState({
          taken:true
          }
        );
      }
    });
  }

  SubmitPost(e){
    if(this.state.taken){
      alert("Email has been taken");
      this.setState({
        dataLogin:{
          email:"",
          pass:"",
          address:"",
          phone:0
        }
      });
    }
    else{
      axios.post(`http://localhost:3000/account/`,this.state.dataLogin);
      let path = `/home`;
      this.props.history.push(path);
    }
  }

  ReloadData(){
    axios.get(`http://localhost:3000/account`).then(
      res=>{
        this.setState({
          dataBase:res.data
        })
        console.log(res.data);
      }
    )
  }
  componentDidMount(){
    this.ReloadData();
  }


  render(){
    return(
      <div>
      <Container className="w-100 p-3" fluid >
        <Row>
          <Col className="title">
            <h1>CLICK & CLEAN</h1>
          </Col>
        </Row>
        <Row className="backg">
          <Col md={4}>
          </Col>
          <Col md={5}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email"value={this.state.email} onChange={this.InputChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="pass"value={this.state.pass} onChange={this.InputChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Example 101 Street" name="address"value={this.state.address} onChange={this.InputChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" name="phone"value={this.state.phone} onChange={this.InputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.SubmitPost}>
              Sign Up
            </Button>
            </Form>
          </Col>
          <Col md={3}>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return dispatch({
    type:"ACTIVE_PAGE",
    aktif: "sign"
  })
}
export default withRouter(connect(null,mapDispatchToProps)(Signup));
