import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    modalClose = () => this.setState({ show: false })
    modalOpen = () => this.setState({ show: true })
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>OUR VIDEOS</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='videoText'>
                            <p className='text-start serviceDescription'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className='text-start serviceDescription'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                            </p>
                            <p className='text-start serviceDescription'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to.
                            </p>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='videoCard'>
                            <FontAwesomeIcon onClick={this.modalOpen} className='iconVideo' icon={faPlayCircle}></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Container>
                <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

export default Video