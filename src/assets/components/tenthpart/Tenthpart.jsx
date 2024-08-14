import React from 'react'
import "./tenthpart.css"
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Blogimg from "../../../../src/assets/Image9.jpg"

const Tenthpart = () => {
  return (
    <section id='Blog'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="Blog_main">
                    <h2>Our Latest Blog</h2>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Blogimg} />
      <Card.Body>
        <Card.Title className='blog_img_inner'><h2>Five Tips for your Skin & Hair.....</h2></Card.Title>
        <Card.Text className='blog_img_inner_text'>
         <h4>By John  - 5 Comments</h4>
         <h5>Read More</h5>
        </Card.Text>
       
      </Card.Body>
    </Card>
                </Col>
                <Col lg={4}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Blogimg} />
      <Card.Body>
        <Card.Title className='blog_img_inner'><h2>We’ll protect You, because nobody...</h2></Card.Title>
        <Card.Text className='blog_img_inner_text'>
         <h4>By John  - 5 Comments</h4>
         <h5>Read More</h5>
        </Card.Text>
       
      </Card.Body>
    </Card>
                </Col>
                <Col lg={4}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Blogimg} />
      <Card.Body>
        <Card.Title className='blog_img_inner'><h2>How your hair will be grow Fast....</h2></Card.Title>
        <Card.Text className='blog_img_inner_text'>
         <h4>By John  - 5 Comments</h4>
         <h5>Read More</h5>
        </Card.Text>
       
      </Card.Body>
    </Card>
                </Col>
          
            </Row>
        </div>
    </section>
  )
}

export default Tenthpart
