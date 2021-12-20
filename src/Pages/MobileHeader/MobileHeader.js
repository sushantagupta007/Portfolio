import React, { Fragment } from 'react';
import Navigation from '../../Component/HomeNav/Navigation';
import TopMenu from '../../Component/TopMenu/TopMenu';
import Banner from './../../Component/Banner/Banner';
import AboutMe from './../../Component/About Me/AboutMe';
import Project from '../../Component/Projects/Project';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';


const MobileHeader = () => {
    return (
        <Fragment>
            <Navigation></Navigation>
            <TopMenu></TopMenu>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default MobileHeader;