import React from 'react'
import Footer from './Footer'
import HeroSection from '../components/HeroSection'
import OfferSection from '../components/OfferSection'
import PlanSection from '../components/PlanSection'
import Akumulasi from '../components/Akumulasi'
import GlobeSection from '../components/GlobeSection'
import ReviewSection from '../components/ReviewSection'



export default function Layouts({ children }) {
  return (
    <>
    	<body class="bg-white">
    	<div class="overflow-x-hidden">
      	<HeroSection/>
      	<Akumulasi />
      	<OfferSection />
      	<PlanSection />
      	<GlobeSection />
      	<ReviewSection />
      	<Footer />
      	</div>
      	</body>
    </>
  )
}