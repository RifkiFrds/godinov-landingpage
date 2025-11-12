import React from 'react'
import HeroSection from "../sections/HeroSection"
import Banner from '../sections/Banner';
import AboutSection from '../sections/AboutSection';
import ServiceSection from '../sections/ServiceSection';
import PricingSection from '../sections/PricingSection';
import {PortfolioSection} from "../sections/PortfolioSection";

function HomePage(){
	return (
    <>
      <HeroSection />
      <Banner />
      <AboutSection />
      <ServiceSection />
      <PricingSection />
      <PortfolioSection />
    </>
  );
}

export default HomePage