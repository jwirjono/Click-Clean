import React,{Component} from 'react';
import {
  Navbar,
  Nav,
  Form,
  Button,
  Image
}from 'react-bootstrap';
import flogo from './res/flogo.jpg';
import {connect} from "react-redux";


class Header extends Component{
  constructor(){
    super();
    this.state={
      navsize:20
    }
  }

  render(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg" >
          <Navbar.Brand href="/" className="mr-sm-4">
            <Image roundedCircle src={flogo} style={{width:40,height:40}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home" active={this.props.aktif==="home"} style={{fontSize:this.state.navsize}}>Home</Nav.Link>
              <Nav.Link href="/sell" active={this.props.aktif==="sell"} style={{fontSize:this.state.navsize}}>Sell</Nav.Link>
              <Nav.Link href="/activity" active={this.props.aktif==="activity"} style={{fontSize:this.state.navsize}}>Activity</Nav.Link>
            </Nav>
            <Form inline>
              <Form.Control type="text" placeholder="Search" className="mr-sm-4" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
const mapStateToProps =(state)=>{
  return{
    aktif:state.aktif
  }
}

export default connect(mapStateToProps)(Header);
