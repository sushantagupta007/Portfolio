import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import './Navigation.css'; 

import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Sushanta Gupta</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="me-auto">
                    <HashLink to="#home" id="customStyle1" className="me-2">Home</HashLink>
                    <HashLink to="#about" id="customStyle2" className="me-2">About Me</HashLink>
                    <HashLink to="#project" id="customStyle3" className="me-2">Projects</HashLink>
                    <HashLink to="/blog" id="customStyle3" className="me-2">Blog</HashLink>
                    <HashLink to="#contact"id="customStyle4" className="me-2">Contact Me</HashLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;