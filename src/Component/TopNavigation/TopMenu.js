import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './TopMenu.css'

const TopMenu = () => {
    return (
        <Container fluid className="bg-dark text-white">
            <Container>     
                <Row>
                    <Col sm={6} className="my-2">
                        <Row> 
                            <Col className="mb-2" xs={12} sm={6}> <FontAwesomeIcon className="text-primary me-2" icon={faPhone}></FontAwesomeIcon>Phone <span className="me-2">+880-1737558258</span></Col>
                            <Col xs={12} sm={6}> <FontAwesomeIcon className="text-primary me-2" icon={faEnvelope}></FontAwesomeIcon>Email <span className="me-2 text-secondary">s.gupta@student.sust.edu</span></Col>
                        </Row>
                    </Col>
                    <Col className="my-2" xs={12} sm={6} >
                        <div className="socialBoxWidthMobile ">
                            <ul className="d-flex justify-content-between p-0">
                                <li style={{listStyleType:"none"}} className="fw-bold"> Find Me On </li>
                                <li style={{listStyleType:"none"}}> <i className=" fab fa-facebook-f"></i></li>
                                <li style={{listStyleType:"none"}}> <i className="fab fa-github"></i></li>
                                <li style={{listStyleType:"none"}}> <i className="fab fa-linkedin"></i></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </Container>
    );
};

export default TopMenu;