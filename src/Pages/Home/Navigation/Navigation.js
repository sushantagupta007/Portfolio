import React, { useState } from 'react';
import { Container, Nav, Navbar,Button, Offcanvas } from 'react-bootstrap';
import './Navigation.css'

import Portrait from '../../../Image/Home.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navigation = () => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
        
        <Container id="mobileView" className="d-md-none d-lg-none">
            <div className="d-flex justify-content-end p-2"> 
                <Button id="mobileButton"  variant="secondary" onClick={handleShow}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="80" height="5"></rect>
                    <rect y="20" width="90" height="5"></rect>
                    <rect y="40" width="100" height="5"></rect>
                </svg>
                </Button>
            </div>
            <Offcanvas className="w-100" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Offcanvas.Body>
            </Offcanvas>
            <div className="text-center w-75 mx-auto rounded d-flex flex-column justify-content-center align-items-center" id="introduceContent"> 
                <div id="imgConotainer" className="d-flex justify-content-center mb-3"> 
                    <img className="w-100 rounded-circle" src={Portrait} alt="" />
                </div>
                <h1 >SUSHANTA GUPTA</h1>
                <h5> Front-End <span className="text-info"> Web Developer </span> </h5>
                <p> Client Happiness, My Happiness</p>
                <button onClick={handleShow} type="button" className="btn-info rounded"> To Know More...</button>  
            </div>    
            
        </Container>
        
    //     <>
    //    <Navbar  bg="dark" variant="dark" expand="lg">
    //     <Container>
    //         <Navbar.Brand href="#home"></Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //             <Nav.Link href="#home">Home</Nav.Link>
    //             <Nav.Link href="#link">Link</Nav.Link>
    //         </Nav>
    //         </Navbar.Collapse>
    //     </Container>
    //     </Navbar>
    //     </>
    );
};

export default Navigation;