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

const HomeScreen = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* === ADD IDs HERE === */}
            <section id="hero">
                <Hero />
            </section>

            <section id="about">
                <LearnAbout />
            </section>

            <section id="why-choose-us">
                <WhyChooseUs />
            </section>

            <section id="expertise">
                <HomePracticeAreas />
            </section>

            <section id="team">
                <ExpertAttorneys />
            </section>

            <section id="faq">
                <Faq />
            </section>

            <section id="contact">
                <Footer />
            </section>

        </div>
    )
}

export default HomeScreen