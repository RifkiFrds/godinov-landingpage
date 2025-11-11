import React from 'react'
import HeroSection from "../sections/HeroSection"
import Banner from '../sections/Banner';
import AboutSection from '../sections/AboutSection';
import ServiceSection from '../sections/ServiceSection';
import PricingSection from '../sections/PricingSection';

function HomePage(){
	return(
		<>
		<HeroSection />
		<Banner />
		<AboutSection />
		<ServiceSection />
		<PricingSection />
		</>
		);
}

export default HomePage