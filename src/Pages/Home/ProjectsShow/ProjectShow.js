import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProjectShow.css'; 
import HomeImage from '../../../Image/Home.jpg'
import UnitedHospital from '../../../Image/UnitedHos.PNG'
import ProjectCard from './ProjectCard';
const ProjectShow = () => {
  
  return (
    <div className="carousel-wrapper d-sm-none bg-none" id="mobileCarosalView">
            <Carousel axis="vertical" showThumbs={false} interval="5000">
                <div className="d-flex justify-content-center">
                    <ProjectCard 
                      Name="United Hospital Project" 
                      Img={HomeImage} 
                      Css="React Boostrap"
                      JS="React" 
                      Authentication="Google Firebase"
                      Database="MongoDb"
                      Hosting= "Netlify"
                      Backend="Express"
                      > </ProjectCard>
                </div>
                <div className="d-flex justify-content-center">
                <ProjectCard 
                      Name="United Hospital Project" 
                      Img={HomeImage} 
                      Css="React Boostrap"
                      JS="React" 
                      Authentication="Google Firebase"
                      Database="MongoDb"
                      Hosting= "Netlify"
                      Backend="Express"
                      > </ProjectCard>
                </div>
                <div className="d-flex justify-content-center">
                <ProjectCard 
                      Name="United Hospital Project" 
                      Img={HomeImage} 
                      Css="React Boostrap"
                      JS="React" 
                      Authentication="Google Firebase"
                      Database="MongoDb"
                      Hosting= "Netlify"
                      Backend="Express"
                      > </ProjectCard>
                </div>
            </Carousel>
        </div>
  );
};

export default ProjectShow;