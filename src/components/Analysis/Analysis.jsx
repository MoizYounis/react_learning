import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

class Analysis extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { Technology: 'PHP', Projects: 100 },
                { Technology: 'MySqli', Projects: 90 },
                { Technology: 'Laravel', Projects: 95 },
                { Technology: 'React', Projects: 85 },
                { Technology: 'Opencart', Projects: 80 },
                { Technology: 'Vue Js', Projects: 70 },
                { Technology: 'Django', Projects: 60 },
                { Technology: 'Javascript', Projects: 100 }
            ]
        }
    }
    render() {
        let blue = "#051b35"
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col style={{height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"></XAxis>
                                    <Tooltip/>
                                <Bar dataKey="Projects" fill={blue}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
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
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis