import React from 'react'
import "./seventhpart.css"
import { Col, Row, } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardimg from "../../../../src/assets/Iamge10.jpg" 

const Seventhpart = () => {
  return (
    <section id='Product'>
        <div className="container">
            <Row>
                <Col lg={4}>
                <div className="Product_inner">
                    <h2>Our Product</h2>
                </div>
                </Col>

                <Col lg={{ span: 2, offset: 6 }}>
                <div className="Product_inner_icon">
                    <h2><i class="fa-solid fa-circle-arrow-right"></i></h2>
                    <h2><i class="fa-solid fa-circle-arrow-left"></i></h2>

                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
              <div className="card_inner">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Cardimg} />
                <div className="card_body_main">
                <Card.Body>
                  <Card.Title className='hair'><h3>Hair Lotion</h3></Card.Title>
                   <Card.Text className='card_num'><h5> $ 72.00 </h5>
                  <div className="card_text"> <h4>4.5 reviews</h4></div>
                 </Card.Text> 
       
       
      <         /Card.Body>
                </div>
                 
                </Card>
              </div>
                </Col>
                <Col lg={3}>
              <div className="card_inner">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Cardimg} />
                <div className="card_body_main">
                <Card.Body>
                  <Card.Title className='hair'><h3>Hair Lotion</h3></Card.Title>
                   <Card.Text className='card_num'><h5> $ 72.00 </h5>
                  <div className="card_text"> <h4>4.5 reviews</h4></div>
                 </Card.Text> 
       
       
      <         /Card.Body>
                </div>
                 
                </Card>
              </div>
                </Col>
                <Col lg={3}>
              <div className="card_inner">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Cardimg} />
                <div className="card_body_main">
                <Card.Body>
                  <Card.Title className='hair'><h3>Hair Lotion</h3></Card.Title>
                   <Card.Text className='card_num'><h5> $ 72.00 </h5>
                  <div className="card_text"> <h4>4.5 reviews</h4></div>
                 </Card.Text> 
       
       
      <         /Card.Body>
                </div>
                 
                </Card>
              </div>
                </Col>
                <Col lg={3}>
              <div className="card_inner">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Cardimg} />
                <div className="card_body_main">
                <Card.Body>
                  <Card.Title className='hair'><h3>Hair Lotion</h3></Card.Title>
                   <Card.Text className='card_num'><h5> $ 72.00 </h5>
                  <div className="card_text"> <h4>4.5 reviews</h4></div>
                 </Card.Text> 
       
       
      <         /Card.Body>
                </div>
                 
                </Card>
              </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Seventhpart
