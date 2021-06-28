import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image
}from 'react-bootstrap';
import {connect} from 'react-redux';

class Activity extends Component{
  render(){
    return(
      <div style={{backgroundColor:"rgba(255, 255, 204,1)"}}>
        <Container style={{padding:20}}>
          <Row style={{marginTop:10}}className="justify-content-md-center">
            <Col md={8}>
              <div style={{border:"2px rgb(190,189,184) solid",borderRadius:15,padding:20,backgroundColor:"rgb(114,127, 203)",height:750}}>
                <Container>
                  <Row>
                    <Col>
                    <center><h3 style={{color:"white"}}>ACTIVITY HISTORY</h3></center>
                    <hr style={{backgroundColor:"rgb(134,147,223)",height:2}}/>
                    </Col>
                  </Row>
                  <Row style={{margin:4,border:"2px rgb(134,147,223) solid",borderRadius:20,padding:5}}>
                      <Col lg={7} md={7} xs={10}>
                        <h3>Vegetable</h3>
                        <p>jl.sesame  no.101</p>
                      </Col>
                      <Col lg={3} md={3} xs={6}>
                        <p>20 KG</p>
                      </Col>
                      <Col lg={2} md={2} xs={6}>
                        <h6>02 Nov</h6>
                      </Col>
                  </Row>
                  <Row style={{margin:4,border:"2px rgb(134,147,223) solid",borderRadius:20,padding:5}}>
                      <Col lg={7} md={7} xs={10}>
                        <h3>Dairy</h3>
                        <p>jl.sukabumi utara  no.161</p>
                      </Col>
                      <Col lg={3} md={3} xs={6}>
                        <p>50 KG</p>
                      </Col>
                      <Col lg={2} md={2} xs={6}>
                        <h6>01 Nov</h6>
                      </Col>
                  </Row>
                  <Row style={{margin:4,border:"2px rgb(134,147,223) solid",borderRadius:20,padding:5}}>
                      <Col lg={7} md={7} xs={10}>
                        <h3>Dairy</h3>
                        <p>jl.sukabumi utara  no.161</p>
                      </Col>
                      <Col lg={3} md={3} xs={6}>
                        <p>17 KG</p>
                      </Col>
                      <Col lg={2} md={2} xs={6}>
                        <h6>13 Okt</h6>
                      </Col>
                  </Row>
                  <Row style={{margin:4,border:"2px rgb(134,147,223) solid",borderRadius:20,padding:5}}>
                      <Col lg={7} md={7} xs={10}>
                        <h3>Bread & Rice</h3>
                        <p>jl.sukabumi utara  no.161</p>
                      </Col>
                      <Col lg={3} md={3} xs={6}>
                        <p>20 KG</p>
                      </Col>
                      <Col lg={2} md={2} xs={6}>
                        <h6>11 Okt</h6>
                      </Col>
                  </Row>
                  <Row style={{margin:4,border:"2px rgb(134,147,223) solid",borderRadius:20,padding:5}}>
                      <Col lg={7} md={7} xs={10}>
                        <h3>Vegetable</h3>
                        <p>jl.sukabumi utara  no.161</p>
                      </Col>
                      <Col lg={3} md={3} xs={6}>
                        <p>5 KG</p>
                      </Col>
                      <Col lg={2} md={2} xs={6}>
                        <h6>3 Okt</h6>
                      </Col>
                  </Row>
                </Container>
              </div>
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
    aktif: "activity"
  })
}
export default connect(null,mapDispatchToProps)(Activity);
