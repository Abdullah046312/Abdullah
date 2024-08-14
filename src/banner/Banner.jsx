import React from 'react'
import "./banner.css"
import banimg from "../../src/assets/banner.jpg"
import banimg2 from "../../src/assets/Image.jpg"

import { Col, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container">
            <Row>
                <Col lg={6}>
                {/* <div className="bannar_img">
                    <img src={banimg} alt="" />
                    
                </div> */}
                <div className="banner_text">
                    <h2>WELCOME!</h2>
                    <h3>The Best Hair Saloon</h3>
                    <p>We use quality products and the latest styling techniques to bring out your very best. We promises to provide you with 5-star service.</p>
                    <button>Make Appointment</button>
                </div>

                </Col>
                <Col lg={{ span: 5, offset: 1 }}>
                <div className="ban_img2">
                    <img src={banimg2} alt="" />
                </div>
                </Col>
            </Row>
        </div>
    </section>

    
  )
}

export default Banner
