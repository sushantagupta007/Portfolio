import React, { Fragment } from 'react';
import AboutMe from '../About Me/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Project from '../Projects/Project';
import Navigation from '../TopNavigation/Navigation';
import TopMenu from '../TopNavigation/TopMenu';
import Banner from './../TopNavigation/Banner';

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