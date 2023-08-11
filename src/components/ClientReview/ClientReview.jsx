import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";

class ClientReview extends Component {
    render() {
        var settings = {
            autoPlaySpeed: 3000,
            autoPlay: true,
            dots: true,
            infinite: true,
            arrows: false,
            speed: 3000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container fluid={true} className='sliderBack text-center'>
                    <h1 className='reviewMainTitle p-3'>TESTIMONIAL</h1>
                    <div className='reviewBottom'></div>
                    <Slider {...settings}>
                        <div>
                            <Row className='justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?size=626&ext=jpg&ga=GA1.2.542663525.1665251027' />
                                    <h2 className="reviewName">Muhammad Moiz Younis</h2>
                                    <p className='reviewDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src='https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&ga=GA1.2.542663525.1665251027' />
                                    <h2 className="reviewName">Mubeen Younis</h2>
                                    <p className='reviewDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src='https://img.freepik.com/free-photo/fashion-portrait-young-man-black-shirt-poses-wall-with-contrast-shadows_186202-4522.jpg?size=338&ext=jpg&ga=GA1.2.542663525.1665251027' />
                                    <h2 className="reviewName">Muzammal Hammad</h2>
                                    <p className='reviewDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        )
    }
}

export default ClientReview