import React,{Component} from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Carousel,
  Image,
  Card,
  Badge
}from 'react-bootstrap';
import "../css/Home.css";
import {connect} from 'react-redux';

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      dataHome:{
        id:"",
        address:""
      }
    }
  }
  render(){
    return(
      <div className="homepage">
        <Container style={{padding:10}}>
        <Row style={{marginTop:15}}>
          <Col style={{margin:5,  border:"2px gray solid",borderRadius:"15px",padding:15,backgroundColor:"rgb(114,127, 203)",color:"white"}}>
            <h3>Have garbage in home?</h3>
            <Button variant="primary" href="/sell">Sell to C & C</Button>
          </Col>
          <Col md={{offset:1}} style={{margin:5,padding:"15px",borderRadius:"5px",backgroundColor:"rgb(225,151,76)"}}>
            <Row>
              <Col md={9}>
                <h3>Welcome back, User</h3>
                <Row>

                  <Col md={10}>
                    <h4>C & C Points : <Badge variant="success">Points</Badge></h4>
                  </Col>
                  <Col md={1}>
                    <Button variant="success">REEDEM</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{marginTop:15}}className="justify-content-md-center">
          <Col md={10}>
          <Carousel className="carousel" autoplay>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_960_720.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>Free Movie Night</h5>
                <p>Free ticket for each shipping</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2015/12/10/14/25/vouchers-1086431_960_720.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h5>Voucher Weekend</h5>
                <p>All voucher 50% off</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h5>World Food Day</h5>
                <p>Get your Free food voucher now</p>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row style={{marginTop:15}}>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/02/12/21/03/planet-3149121_960_720.jpg"
              style={{height:250}} />
              <Card.Body>
                <Card.Title>New Planet</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
              variant="top"src="https://cdn.pixabay.com/photo/2014/09/01/14/39/forest-fire-432870_960_720.jpg"
              style={{height:250}}/>
              <Card.Body>
                <Card.Title>Amazon Fire</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_960_720.jpg"
              style={{height:250}} />
              <Card.Body>
                <Card.Title>US Forest</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2019/09/26/15/56/aftermath-4506339_960_720.jpg"
              style={{height:250}}/>
              <Card.Body>
                <Card.Title>Chile Crisis</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{marginTop:15}}>
          <Col>
            <h4>About us</h4>
            <p>Click & Clean adalah aplikasi berbasis mobile dan web yg menyediakan jasa untuk menjual limbah makanan dan mendistribusikannya ke tempat-tempat yang sesuai.
Aplikasi ini juga memberikan fitur-fitur menarik dimana jika pengguna menjual limbah makanan yang dimilikinya, dia akan mendapatkan reward berupa voucher ataupun uang tunai.
            </p>
          </Col>
        </Row>
        </Container>
        <div className="footer">
            <Container>
              <Row>
                <Col>
                  <h3>Contact us</h3>
                  <Row>
                      <img src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png" />
                      <img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"/>
                      <img src="https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_960_720.png"/>
                  </Row>
                </Col>
                <Col>

                </Col>
              </Row>
            </Container>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return dispatch({
    type:"ACTIVE_PAGE",
    aktif: "home"
  })
}

export default connect(null,mapDispatchToProps)(Home);
