import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import faceImg from "../../asset/image/face.png";
import { init } from 'ityped'

class About extends Component {

    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['WordPress Developer', 'PHP Developer', 'Laravel Developer'] })
    }

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>ABOUT ME</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className='aboutMeImg'>
                                <img className='aboutImg' src={faceImg} alt='' />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className='aboutMeBody'>
                                <h2 className='aboutMeDescription'>HI There, I'm</h2>
                                <h2 className='aboutMeTitle'>Muhammad Moiz</h2>
                                <h3 className='aboutMeDescription'>Work as <span id="myElement"></span></h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default About