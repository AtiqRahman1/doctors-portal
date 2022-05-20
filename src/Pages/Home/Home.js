import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Banner/Contact';
import Exception from './Banner/Exception';
import Footer from '../Shared/Footer';
import MakeAppointment from './Banner/MakeAppointment';
import Testimonials from './Banner/Testimonials';
import Info from './Info/Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exception></Exception>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;