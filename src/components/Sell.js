import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
}from 'react-bootstrap';
import {connect} from 'react-redux';

class Sell extends Component{
  render(){
    return(
      <div className="sellpage"style={{backgroundColor:"rgba(255, 255, 204,1)"}}>
        <Container style={{padding:20}}>
          <Row style={{marginTop:10}}className="justify-content-md-center">
            <Col md={6}>
              <div style={{border:"2px rgb(190,189,184) solid",borderRadius:15,padding:20,backgroundColor:"rgb(114,127, 203)"}}>
                <center><h3 style={{color:"white"}}>SELL NOW!</h3></center>
                <hr style={{backgroundColor:"rgb(134,147,223)",height:2}}/>
                <Form>
                  <Form.Group controlId="formcategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                      <option>Vegetable</option>
                      <option>Bread & Rice</option>
                      <option>Dairy</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formweight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" placeholder="Kilograms" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Street" />
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" placeholder="Optional..." />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Terms & Condition" />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Continue
                  </Button>
                </Form>
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
    aktif: "sell"
  })
}
export default connect(null,mapDispatchToProps)(Sell);
