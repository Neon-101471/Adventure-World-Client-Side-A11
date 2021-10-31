import React from 'react';
import Attractions from '../Attractions/Attractions';
import Banner from '../Banner/Banner';
import MainOffering from '../MainOffering/MainOffering';
import WhyBook from '../WhyBook/WhyBook';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MainOffering></MainOffering>
            <WhyBook></WhyBook>
            <Attractions></Attractions>
        </div>
    );
};

export default Home;