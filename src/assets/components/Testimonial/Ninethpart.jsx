import React from 'react'
import "./ninethpart.css"
import { Row,Col } from 'react-bootstrap'
import Testimonialimg from "../../../../src/assets/images3.jpg"
import Testimonialimg2 from "../../../../src/assets/images4.jpg"
import Testimonialimg3 from "../../../../src/assets/images5.jpg"
import Testimonialimg4 from "../../../../src/assets/images6.jpg"

const Ninethpart = () => {
  return (
    <section id='Testimonial'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="Testimonial_main">
                    <h2>Testimonial</h2>
                </div>
                
                </Col>
            </Row>


            <Row>
                <Col lg={6}>
                <div className="Testimonial_main_inner">
                    <img src={Testimonialimg} alt="" />
                    <p>A very nice massage experience, although I realized while paying that I seemed to have been shorted by about 10 minutes, which was disappointing. </p>
                    <div className="Testimonial_inner_img">
                    <img src={Testimonialimg3} alt="" />
                    </div>

                    
                    <div className="Testimonial_inner">
                        <img src={Testimonialimg2} alt="" />
                    </div>
                </div>
                
                </Col>
                <Col lg={6}>
                <div className="Testimonial_main_inner">
                    <img src={Testimonialimg} alt="" />
                    <p>A very nice massage experience, although I realized while paying that I seemed to have been shorted by about 10 minutes, which was disappointing. </p>
                    <div className="Testimonial_inner_img">
                    <img src={Testimonialimg3} alt="" />
                    </div>
                    <div className="Testimonial_inner">
                        <img src={Testimonialimg4} alt="" />
                    </div>
                </div>
                
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Ninethpart
