
import React from 'react';
import { Button } from 'react-bootstrap';
import TypewriterComponent from 'typewriter-effect';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-wrap">
            <div className="banner-content d-flex flex-column justify-content-center align-items-center"> 
                <div>
                <h1 className="text-white"> Sushanta Gupta</h1>
                <h5 className="text-warning"> Front-End Web Developer</h5>
                <div className="fs-4 customFont fw-bold"> 
                    <TypewriterComponent
                    id="customTypeWriteStyle"
                    options={{
                        strings: ['Need Help For WebSite?'],
                        autoStart: true,
                        loop: true,
                        skipAddStyles:true
                    }}
                />
                    <TypewriterComponent
                    id="customTypeWriteStyle"
                    options={{
                        strings: ['Right People For You'],
                        autoStart: true,
                        loop: true,
                        skipAddStyles:true
                    }}
                />
                </div>
                <a id="customButton" href="https://drive.google.com/file/d/1OKLwYls50O44kz3iafsecMoW2imoqHpg/view" download="CV.pdf" className="btn btn-primary p-2 mt-3">More Info</a> 
                </div>
            </div>    
        </div>
    );
};

export default Banner;