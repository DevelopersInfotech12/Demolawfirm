"use client";

import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import LearnAbout from '../Components/LearnAbout';
import HomePracticeAreas from '../Components/HomePracticeAreas';
import WhyChooseUs from '../Components/WhyChooseUs';
import ExpertAttorneys from '../Components/ExpertAttornery';
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';
import AmendmentBanner from '../Components/AmendmentBanner';
// import Navbar from '../app/Components/Navbar'


const HomeScreen = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <Hero/>
            <LearnAbout/>
            <HomePracticeAreas/>
            <WhyChooseUs/>
            <ExpertAttorneys/>
            <AmendmentBanner/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default HomeScreen
