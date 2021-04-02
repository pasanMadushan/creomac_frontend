import { Box, Button } from '@chakra-ui/react';
import React from 'react';


import CarouselSection from '../components/LandingPage/CarouselSection.js'
import OurStory from '../components/LandingPage/OurStory.js'
import Stats from '../components/LandingPage/Stats.js'
import Footer from '../components/Footer.js'
import RecentProjects from '../components/LandingPage/RecentProjects.js'
import Quotes from '../components/LandingPage/Quotes.js'
import Newsletter from '../components/LandingPage/Newsletter.js'
import Header from '../components/CommonNavbar.js'

function Home(){
    return(
        <>
            <Header />
            <CarouselSection />
            <OurStory />
            <Stats />
            <RecentProjects />
            <Quotes />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Home;