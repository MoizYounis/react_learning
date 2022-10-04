import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import designIcon from '../../asset/image/design.png'
import ecommerceIcon from '../../asset/image/ecommerce.png'
import webeIcon from '../../asset/image/web.png'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>My Services</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='servicesIcon' src={ecommerceIcon} />
                                <h2 className="serviceName">Ecommerce</h2>
                                <p className='serviceDescription'>I will design and develope online store websites.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='servicesIcon' src={designIcon} />
                                <h2 className="serviceName">Web Design</h2>
                                <p className='serviceDescription'>Qualified web design and attractive which catches visitor's eyes. </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='servicesIcon' src={webeIcon} />
                                <h2 className="serviceName">Web Development</h2>
                                <p className='serviceDescription'>Clean and fresh issue free code to make your website dynamic perfectly.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Services