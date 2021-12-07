import React from 'react';
import { Card,Button } from 'react-bootstrap';

const ProjectCard = (props) => {
    const {Name,Img,Css,JS,Authentication,Database,Hosting,Backend} = props

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img className="rounded"variant="top" src={Img} />
            <Card.Body className="f-flex flex-column align-items-start justify-content-start">
                    <Card.Title className="fw-bold">{Name}</Card.Title>
                    <Card.Text className="d-flex flex-column align-items-start">
                        <p > JS Library: {JS} </p>
                        <p > CSS FrameWork: {Css} </p>
                        <p > Database: {Database} </p>
                        <p > Backend: {Backend} </p>
                        <p > Authentication: {Authentication} </p>
                        <p > Hosting: {Hosting} </p>
                    </Card.Text>
                    <Card.Link className="m-0" href="#">United Hospital</Card.Link>
            </Card.Body>
        </Card>
    );      
};

export default ProjectCard;