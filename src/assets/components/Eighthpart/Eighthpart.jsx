import React from 'react'
import "./eighthpart.css"
import { Row,Col } from 'react-bootstrap'
import Teamimg from "../../../../src/assets/images 1.jpg"
import Teamimg2 from "../../../../src/assets/images2.jpg"

const Eighthpart = () => {
  return (
   <section id='team'>
    <div className="container">
        <Row>
            <Col lg={6}>
            <div className="team_main">
                <img src={Teamimg} alt="" />

            </div>
            </Col>
            <Col lg={6}>
            <div className="team_main_text">
                <h2>Meet Our Team</h2>
                <p>House of Hair Salon & Spa is one of Brooklyn's most trusted salons. Whether you’re looking for a completely new style or want to enhance your existing look, our talented teams are here to make it happen.</p>
                
                <div className="team_main_text_img">
                <img src={Teamimg2} alt="" />

                </div>

            </div>
            </Col>
        </Row>
    </div>
   </section>
   
  )
}

export default Eighthpart
