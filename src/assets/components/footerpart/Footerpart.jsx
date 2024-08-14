import React from 'react'
import "./footerpart.css"
import { Row,Col } from 'react-bootstrap'
import logof from "../../../../src/assets/Logo.png"

const Footerpart = () => {
  return (

    <section id='footer'>
        <div className="container">
            <Row>
                <Col lg={5}>
                <div className="footer_main">
                    <img src={logof} alt="" />
                    <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                   

                </div>
                </Col>

                <Col lg={{span:2, offset:1}}>
                <div className="footer_text">
                    <h3>Features</h3>
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Benifit</h4>
                    <h4>Pricing</h4>
                    <h4>Blog</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="footer_text">
                    <h3>Products</h3>
                    <h4>Task Management</h4>
                    <h4>Company growth</h4>
                    <h4>Time tracking</h4>
                    
                </div>
                </Col>
                <Col lg={2}>
                <div className="footer_text">
                    <h3>Support</h3>
                    <h4>Customer service</h4>
                    <h4>Accessibility</h4>
                    <h4>Contact us</h4>
                    
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="footer_inner_text">
                    <h4>@20201 Innovate.All rights reserved.</h4>
                    <h5>Design By Abdullah Al-Mamun</h5>
                </div>
                </Col>
                <Col lg={{span:2, offset:4}}>
                <div className="footer_inner_text">
                    <h4>Privacy policy</h4>
                    
                </div>
                </Col>
                <Col lg={2}>
                <div className="footer_inner_text">
                    <h4>Terms & condition</h4>
                    
                </div>
                </Col>
            </Row>
        </div>
    </section>

  )
}

export default Footerpart
