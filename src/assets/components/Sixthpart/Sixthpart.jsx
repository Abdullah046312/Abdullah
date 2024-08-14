import React from 'react'
import "./sixthpart.css"
import workimg from "../../../../src/assets/Cards.jpg"
import { Col, Row } from 'react-bootstrap'

const Sixthpart = () => {
  return (
    <section id='Work'>
        <div className="container">
            <Row>
                <Col lg={4}>
                <div className="Work_inner">
                    <h2>Work Showcase</h2>
                    <div className="Work_inner_img">
                        <img src={workimg} alt="" />
                    </div>
                </div>
                </Col>
                <Col lg={2}>
                <div className="Work_inner">
                    <h4>Hair Cut</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="Work_inner">
                    <h4>Hair Extentsions</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="Work_inner">
                    <h4>Highlights</h4>
                </div>
                </Col>
                <Col lg={2}>
                <div className="Work_inner">
                    <h4>Hair Colouring</h4>
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Sixthpart
