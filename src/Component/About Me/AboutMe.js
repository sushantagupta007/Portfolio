import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Legend } from 'recharts';
import { bounce, slideInLeft, slideInRight, zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import Portfolio from '../../Image/P1.JPG';

import './AboutMe.css';

const styles = {
    zoomIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn')
    },
  }
  const slidesIn = {
    slideInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    } 
}
  const slidesOut = {
    slideInRight: {
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInRight, 'slideInRight')
    } 
}



const AboutMe = () => {

    return (
    
        <Container id="about" fluid className="bg-dark text-white p-5">
                <h1 className="text-center"> Short <span className="text-warning"> Biography </span> </h1>
            <Container> 
                <Row> 
                    <Col xs={12} lg={6} className="customPadding"> 
                        <StyleRoot className="test" style={slidesIn.slideInLeft}>
                            <div className="border customPadding" > 
                                    I am a self-taught web developer. Although My Major was Geography,
                                    I have build myself as a web developer.
                                    <p className="text-warning"> Comofortable With </p> 
                                    <ul> 
                                        <li> JavaScript (ES6+) </li>
                                        <li> React JS </li>
                                        <li> Bootstrap/Tailwind/Material UI </li>
                                        <li> TypeScript </li>
                                    </ul>
                                    <p className="text-warning">  Familiar With </p> 
                                    <ul> 
                                        <li> Node JS, Next JS, Express JS </li>
                                        <li> React Redux </li>
                                    </ul>
                            </div>
                        </StyleRoot>
                    </Col>
                        <Col xs={12} lg={6} className="customPadding"> 
                            <StyleRoot className="test" style={slidesOut.slideInRight}>
                                <div className="border customPadding" > 
                                    <img className="w-100 rounded" src={Portfolio} alt=""/>
                                </div>
                            </StyleRoot>
                        </Col>
                </Row>
            </Container>
        </Container>
    
        
    );
};

export default AboutMe;