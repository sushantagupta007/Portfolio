import React from 'react';
import Blog from '../Blog/Blog';
import Navigation from '../Navigation/Navigation';

import ProjectShow from './../ProjectsShow/ProjectShow';
import Skilled from './../Skilled/Skilled';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ProjectShow></ProjectShow>
            <Skilled></Skilled>
        </div>
    );
};

export default Home;