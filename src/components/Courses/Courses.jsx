import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>MY COURSES</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src="https://img.freepik.com/free-photo/female-speaker-giving-presentation-hall-university-workshop-audience-conference-hall_155003-27432.jpg?w=740&t=st=1665322615~exp=1665323215~hmac=b3b6b8e3a414c20ff66b8f83b6d2929cb90d364b63d95691487fafe1dc462a44" alt="" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start serviceName">Laravel 8</h5>
                                    <p className='text-start serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className='courseViewMore float-start' href='#' >View Details</a>
                                </Col>

                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src="https://img.freepik.com/free-photo/female-speaker-giving-presentation-hall-university-workshop-audience-conference-hall_155003-27432.jpg?w=740&t=st=1665322615~exp=1665323215~hmac=b3b6b8e3a414c20ff66b8f83b6d2929cb90d364b63d95691487fafe1dc462a44" alt="" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start serviceName">Laravel 8</h5>
                                    <p className='text-start serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className='courseViewMore float-start' href='#' >View Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src="https://img.freepik.com/free-photo/female-speaker-giving-presentation-hall-university-workshop-audience-conference-hall_155003-27432.jpg?w=740&t=st=1665322615~exp=1665323215~hmac=b3b6b8e3a414c20ff66b8f83b6d2929cb90d364b63d95691487fafe1dc462a44" alt="" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start serviceName">Laravel 8</h5>
                                    <p className='text-start serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className='courseViewMore float-start' href='#' >View Details</a>
                                </Col>

                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src="https://img.freepik.com/free-photo/female-speaker-giving-presentation-hall-university-workshop-audience-conference-hall_155003-27432.jpg?w=740&t=st=1665322615~exp=1665323215~hmac=b3b6b8e3a414c20ff66b8f83b6d2929cb90d364b63d95691487fafe1dc462a44" alt="" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start serviceName">Laravel 8</h5>
                                    <p className='text-start serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className='courseViewMore float-start' href='#' >View Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Courses