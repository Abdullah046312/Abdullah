import React from 'react'
import "./fifthpart.css"
import fifthimg from "../../../../src/assets/Images7.jpg"
import fifthimg_one from "../../../../src/assets/images08.jpg"
import { Col, Row } from 'react-bootstrap'

const Fifthpart = () => {
  return (
    <section id='Choose'>
        <div className="container">
            <Row>
                <Col lg={6}>
                <div className="Choose_main">
                    <h2>Why Choose Us</h2>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={5}>
                <div className="Choose_main_text">
                    <h2>We Love Your Hair</h2>
                    <p>We know-how, and ready to create your best look with natural products.</p>
                    <div className="Choose_main_text_img">
                        <img src={fifthimg_one} alt="" />

                    </div>
                </div>
                <div className="Choose_main_text">
                    <h2>ONLY NATURAL PRODUCTS</h2>
                    <p>Hair is our passion, and our passion shows on every client that walks out of our doors.</p>
                    <div className="Choose_main_text_img">
                        <img src={fifthimg_one} alt="" />

                    </div>
                </div>
                <div className="Choose_main_text">
                    <h2>PROFESSIONAL STYLISTS</h2>
                    <p>If you have a look you want, we can work together to form a plan for your hair.</p>
                    <div className="Choose_main_text_img">
                        <img src={fifthimg_one} alt="" />

                    </div>
                </div>
                </Col>
                {/* <Col lg={6}>
               
                </Col> */}
                
                <Col lg={{ span: 6, offset: 1 }}>
                <div className="Choose_main_img">
                    <img src={fifthimg} alt="" />
                </div>
                </Col>
                
                
            </Row>

        </div>
    </section>
  )
}

export default Fifthpart
