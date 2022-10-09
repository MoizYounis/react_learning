import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'

class RecentProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className='serviceMainTitle'>RECENT PROJECTS</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?w=740&t=st=1665251279~exp=1665251879~hmac=2e4107c477e4f2e2e27aea25e9461c76b9e618ef6ffec892dbd65ad0ca635bdd" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name One</Card.Title>
                                    <Card.Text className='serviceDescription'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/happy-women-learning-language-online-isolated-landing-page-flat-style_74855-18887.jpg?w=826&t=st=1665254955~exp=1665255555~hmac=524e45f25cce594c3b4c6430f2bc9dc17b4c43fda703f305edb1755be8e7f6bf" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name Two</Card.Title>
                                    <Card.Text className='serviceDescription'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/03/52/23/35/1000_F_352233515_i8TVYdJOkxcYQxPN5h6Reih7lF8QZ0s7.jpg" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name Three</Card.Title>
                                    <Card.Text className='serviceDescription'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default RecentProject