import React from 'react';
import { Card,Button} from 'react-bootstrap';

import './ProjectCard.css';

const ProjectCard = (props) => {
    const {img,title,des,btn} = props

    return (
        <Card id="customCard"style={{ width: '18rem' }}>
            <Card.Img id="cardImg" variant="top" src={img} />
            <Card.Body id="cardInfo">
                <Card.Title id="cardInfoTitle"> {title}</Card.Title>
                <Card.Text>
                    {des}
                </Card.Text>
                <Button id="cardButon" variant="primary">{btn}</Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;