import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Footer from '../../Shared/Footer/Footer';
import Acceptional from '../Acceptional/Acceptional';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Acceptional></Acceptional> 
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;