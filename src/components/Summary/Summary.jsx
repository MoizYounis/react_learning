import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='summaryFixedBanner p-0'>
                    <div className='summaryBannerOverlay'>
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row style={{ marginTop: '20%' }}>
                                        <Col>
                                            <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                                            <h1 className="countNumber">
                                                {/* <CountUp start={0} end={35000}>
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span ref={countUpRef} />
                                                        </div>
                                                    )}
                                                </CountUp> */}
                                                <CountUp start={0} end={35000}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Students Worldwide</h4>
                                            <div className='countBottom'></div>
                                            {/* <hr className='bg-white w-25'/> */}
                                        </Col>

                                        <Col>
                                            <FontAwesomeIcon className="iconProject" icon={faLaptop} />
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={22}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Courses Published</h4>
                                            <div className='countBottom'></div>
                                        </Col>

                                        <Col>
                                            <FontAwesomeIcon className="iconProject" icon={faStar} />
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={3000}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Students Reviews</h4>
                                            <div className='countBottom'></div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle">What I Have Achieved?</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle text-start"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> Requirement Gathering</p>
                                                <p className="cardSubTitle text-start"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> System Analysis</p>
                                                <p className="cardSubTitle text-start"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> Coding Testing</p>
                                                <p className="cardSubTitle text-start"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Summary