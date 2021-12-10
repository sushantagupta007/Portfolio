import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import ProjectCard from './../ProjectCard/ProjectCard';
import Instrument from '../../Image/Instrument.jpg';
import Tourist from '../../Image/Tourist.webp'; 
import Camera from '../../Image/Camera.jfif'; 

const Project = () => {
    return (
        <Container fluid className="bg-secondary p-5" id="project">
            <Container>
                <h1 className="text-center"> Completed <span className="text-warning fw-bold"> Projects </span> </h1>
                <Row>
                    <Col xs={12} sm={4} className="d-flex justify-content-center justify-content-sm-start">
                        <ProjectCard img={Instrument} btn="Visit Hospital" title="United Hospital Project" des="Emerging Hospital in Dhaka"></ProjectCard>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center justify-content-sm-start">
                        <ProjectCard img={Tourist} btn="Make Tour" title="Trave Friend Project" des="Best Tour Planner"></ProjectCard>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center justify-content-sm-start">
                        <ProjectCard img={Camera} btn="Buy Camera" title="Camera Shop" des="Best Product Available"></ProjectCard>
                    </Col>
                </Row>
            </Container>
            
        </Container>
    );
};

export default Project;