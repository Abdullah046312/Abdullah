import React from 'react'
import "./service.css"
import { Col, Row } from 'react-bootstrap'
import serviceimg from "../../../src/assets/group.jpg"


const Service = () => {
  return (
    <section id='Service'>
        <div className="container">
            <Row>
                <Col lg={6}>
                <div className="service_main">
                    <img src={serviceimg} alt="" />
                </div>
                </Col>
                
               
                <Col lg={{ span: 5, offset: 1 }}>
                 <div className="service_inner">
                    <h2>We're Here To Service Your Hair Care Needs</h2>
                    <p>House of Hair Salon & Spa is one of Brooklyn's most trusted salons. Whether you’re looking for a completely new style or want to enhance your existing look, our talented teams are here to make it happen.</p>
                    <button>Learn More</button>
                </div>
                </Col>
                
            </Row>
        </div>
    </section>
  )
}

export default Service
