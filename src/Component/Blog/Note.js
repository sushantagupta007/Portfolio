import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InlineImage from '../../Image/Position/InlineDisplay.png'
import Downward from '../../Image/Position/Downward.png'

import HandlerCode from '../../Image/ReactLeaflet/onClickCode.png'
import ReactMarker from '../../Image/ReactLeaflet/Maker.PNG'
import customIcon from '../../Image/ReactLeaflet/iconCode.png'
import DynamicRoute from '../../Image/React Router/Dynamic Route.png'

import useState from '../../Image/Type Error/UseState.png'
import solveTypeError from '../../Image/Type Error/TypeErrorSolve.png'
import UIShow from '../../Image/Type Error/UIShow.png'; 
import UISolve from '../../Image/Type Error/UISolve.png'

const Note = () => {
    return (
        <Container fluid className="border bg-dark border-secondary" id="blog">
        <Container className="p-2">
            <h2 className="text-center text-white mb-5">Amar (My) <span className="text-warning fw-bold"> Kotha (Notes) </span> </h2>
            <Container className="text-white">
                <h4> Absolute Position vs Relative Position</h4>
                <div className="text-secondary"> 
                    <p> 
                    Suppose there are four divs (denoted by 1,2,3,4). Among them three divs (1,2,3) are small and one (4) is large.
                    Smaller divs are encircled by large div. The length of each small div is 60 inches. 
                    </p>

                    <p> 
                        If we set the following css style of the first smaller div, then it moves downward 60
                        inches in relation to first div (Fig.2) <br />
                    </p>
                    <span className="text-warning"> CSS Style: </span> 
                        position: relative;
                        top: 60 inches.    
                    <p> In case of Absolute Positon, Div's movement will be based on adjacent div. If we
                        set position absolute of Div 3, then its movement will be occured based  on div 2</p>    
                        <span className="text-warning"> CSS Style: </span> 
                        position: absolute;
                        top: 60 inches.   
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-between justify-content-between p-2"> 
                    <img className="border" src={InlineImage} alt="" />
                    
                    <img className="border" src={Downward} alt="" />
                    <img className="border" src={InlineImage} alt="" />
                </div>
            </Container>
            <Container>
                <h4 className='text-white my-4'> React-Leaflet Marker </h4>
                <div className="text-secondary">
                    As I was a beginner of react-leaflet, I followed the tutorial of Leigh Halliday. It is a well-written
                    material of react-leaflet  <a className="text-white" href="https://blog.logrocket.com/react-leaflet-tutorial/"> tutorial </a> <br/>
                    
                    Leigh Halliday mentioned that to prevent the following error <br/> 
                    <div className="bg-light my-2"> 
                        <code>
                            Module parse failed: Unexpected token (10:41) <br/>
                            File was processed with these loaders: <br/>
                            ./node_modules/babel-loader/lib/index.js <br/>
                            You may need an additional loader to handle the result of these loaders. <br/>
                            useEffect(function updatePathOptions()  <br/>
                        </code>
                    </div>
                    
                    <p> we have to install the following leaflet version </p>
                    <code className='my-2'> npm install react-leaflet@3.2.0 leaflet@1.6.0 </code>  <br/>
                        and before rendering the app we have to replace the "browserslist" values in the package.json file with:
                        <code> <br/>
                            "browserslist": [ <br/>
                            "0.2%", <br/>
                            "not dead", <br/>
                            "not op_mini all"
                            ]
                        </code>    
                    <br/> 
                    Although, I installed the aforementioned version of react-leaflet, I got the above error. 
                    I google and found <code> leaflet": "^1.7.1" </code> and <code> "react-leaflet": "^3.1.0" version and </code>
                    after installing this version, I solve the above error. 
                    <h6 className="text-danger my-4 "> Error Name: TypeError: options.icon.createIcon is not a function </h6>

                    First I followed the following code: 
                    <div className='d-flex flex-column'> 
                        <img className="w-50" src={ReactMarker} alt="React-Marker Code" />
                        But doing so gave me the error above TypeError. Because
                        icon was not successfully imported. So I made a custom icon inside my component and then used that icon inside the Marker Component. 
                    </div>
                    <div className='my-2'> 
                        <img className="w-50" src={customIcon} alt= "customIconCode" />
                    </div>
                    <div className='my-2'> 
                        I also changed the way of writing handler function (onClick). I followed the following style: 
                        <div>
                            <img className="w-50"src={HandlerCode} alt="Handler Function" />
                        </div> 
                    </div>
                </div> 
                <p className='text-secondary'> I solved the problem (TypeError: options.icon.createIcon is not a function) and onClick handler function problem
                    in this way. 
                </p>
            </Container>
            <Container>
                <h4 className='text-white'> TypeError: Explore Data is not a function</h4>
                <p className='text-secondary'> 
                    I got this error when fetching data from a json file, stored in Public Directory of React APP.
                    There was a array of objects in the json file. When I declared useState hook, I mistakenly set the initial
                    value as an object. (As shown in below figure)
                </p>
                <p className='text-secondary'> Luckily, I thought that initial value should be an array and so I changed the value as an array. I solved it. Eureka. </p>
                <Row className="border-bottom">
                    <Col lg={6} xs={12}>
                        <img className="w-100 "src={useState} alt="Dynamic Route" />
                        <figcaption className='text-white'>Initial Value: Object</figcaption>
                    </Col>
                   <Col lg={6} xs={12}>
                        <img className="w-100 "src={solveTypeError} alt="Dynamic Route" />
                        <figcaption className='text-white'>Initial Value: Array</figcaption>
                   </Col>
                </Row>
                <p className='text-secondary'>
                    After solving the type error, I faced another problem. No Card is displayed in the error but there
                    had no error in the console window. After some struggle, I discovered that there was a curly braces which 
                    wrapped ExploredCard Component. I removed the curly braces from both sides and 
                </p>
                <Row>
                    <Col lg={6} xs={12}>
                        <img className="w-100 "src={UIShow} alt="Dynamic Route" />
                        <figcaption className='text-white'>Curly Braces</figcaption>
                    </Col>
                   <Col lg={6} xs={12}>
                        <img className="w-100 "src={UISolve} alt="Dynamic Route" />
                        <figcaption className='text-white'>Without Curly Braces</figcaption>
                   </Col>
                </Row>
              
            </Container>
            <Container>
                <h4 className='text-white'> Dynamic Routing in React Router</h4>
                <p className='text-secondary'> 
                    The ':'-symbol is important for dynamic route. Without this symbol the route will not work. 
                    I will remind it next time when will crate dynamic route. I will put ':'-sign before each condition. 
                </p>
                <img className="w-50 "src={DynamicRoute} alt="Dynamic Route" /> 
            </Container>
        </Container>
        </Container>   
    );
};

export default Note;