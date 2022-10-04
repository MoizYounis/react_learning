import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import logo_black from '../../asset/image/logo_black.png'
import logo_white from '../../asset/image/logo_white.png'

class TopNavigation extends Component {
    constructor() {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [logo_white],
            navBarBackground: "navBackground",
            navBarItem: "navItem"
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({navBarTitle: 'navTitleScroll', navBarLogo:[logo_black], navBarBackground: 'navBackgroundScroll', navBarItem: 'navItemScroll'})
        } else if (window.scrollY < 100) {
            this.setState({navBarTitle: 'navTitle', navBarLogo:[logo_white], navBarBackground: 'navBackground', navBarItem: 'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect fixed="top" className={this.state.navBarBackground} expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle} href="#home"><img src={this.state.navBarLogo} alt=''/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">SERVICE</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT US</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation