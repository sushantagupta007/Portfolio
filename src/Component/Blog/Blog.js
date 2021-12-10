import React, { Fragment } from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Project from '../Projects/Project';
import Navigation from '../TopNavigation/Navigation';

import TopMenu from '../TopNavigation/TopMenu';
import Note from './Note';
import AboutMe from './../About Me/AboutMe';
import NavigationBlog from './../TopNavigation/NavigationBlog';




const Blog = () => {
    return (
    <Fragment>
        <TopMenu></TopMenu>
        <NavigationBlog></NavigationBlog>
        <Note></Note>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
    </Fragment>
       
       
       
    );
};

export default Blog;