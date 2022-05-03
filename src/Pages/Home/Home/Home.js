import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import AboutDetails from '../AboutDetails/AboutDetails';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import BlogDetails from '../BlogDetails/BlogDetails';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='wrapper'>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <AboutDetails></AboutDetails>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>
            <BlogDetails></BlogDetails>
            <Footer></Footer>

        </div>
    );
};

export default Home;