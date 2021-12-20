import React, { Fragment } from 'react';
import Navigation from '../../Component/HomeNav/Navigation';
import TopMenu from '../../Component/TopMenu/TopMenu';
import Banner from '../../Component/Banner/Banner';
import AboutMe from './../../Component/About Me/AboutMe';
import Project from '../../Component/Projects/Project';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';



const Header = () => {
    return (
     <Fragment>
         <TopMenu></TopMenu>
         <Navigation></Navigation>
         <Banner></Banner>
         <AboutMe></AboutMe>
         <Project></Project>
         <Contact></Contact>
         <Footer></Footer>
     </Fragment>
    );
};

export default Header;