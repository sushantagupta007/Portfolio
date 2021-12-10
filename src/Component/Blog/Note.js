import React from 'react';
import { Container } from 'react-bootstrap';
import InlineImage from '../../Image/Position/InlineDisplay.png'
import Downward from '../../Image/Position/Downward.png'

const Note = () => {
    return (
        <Container fluid className="border bg-dark border-secondary" id="blog">
        <Container className="p-0">
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
                <div className="d-flex justify-content-between p-2"> 
                    <img src={InlineImage} alt="" />
                    
                    <img src={Downward} alt="" />
                    <img src={InlineImage} alt="" />
                </div>
            </Container>
        </Container>
        </Container>   
    );
};

export default Note;