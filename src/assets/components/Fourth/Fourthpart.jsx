import React from 'react'
import "./Fourthpart.css"
import { Row, Col } from 'react-bootstrap'

const Fourthpart = () => {
  return (
    <section id='Our Services'>
        <div className="container">
           <Row>
            <Col lg={12}>
            <div className="text">
                <h2>Our services</h2>
                <p>Whether you are looking for a quick beach side gateway or a pampering day for yourself, we have hair treatments to meet your needs. All of our services are specially designed for restorative, recovery and relaxation.</p>
            </div>
            </Col>
           </Row>
           <Row>
            <Col lg={6}>
            <div className="hair_cut">
                <h4>Hair Cut</h4>
                <p>Aromatherapy is just another thing to look and feel younger, more energetic and attractive in your body.
                    
                </p>
                <div className="hair_cut_img">
                        <h3>$20</h3>
                    </div>
            </div>
            </Col>
            <Col lg={6}>
            <div className="hair_cut">
                <h4>Hair Extentsions</h4>
                <p>The Namaste Massage is a deep, fluid, rhythmic massage that use different part of the body at the same time.
                </p>
                <div className="hair_cut_img">
                        <h3>$240</h3>
                    </div>
            </div>
            </Col>
            <Col lg={6}>
            <div className="hair_cut">
                <h4>Highlights</h4>
                <p>Aromatherapy is just another thing to look and feel younger, more energetic and attractive in your body.
                </p>
                <div className="hair_cut_img">
                        <h3>$90</h3>
                    </div>
            </div>
            </Col>
            <Col lg={6}>
            <div className="hair_cut">
                <h4>Hair Colouring</h4>
                <p>A wide array of facial modalities ranging from European to Thai and Japanese techniques that work.
                </p>
                <div className="hair_cut_img">
                        <h3>$40</h3>
                    </div>
            </div>
            </Col>
           </Row>
            
        </div>

    </section>
  )
}

export default Fourthpart
