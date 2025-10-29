import React from 'react'

export default function HeroSection() {
  return (
 	<header class="relative">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center pt-12 pb-24 md:pt-20 md:pb-32">
                    <div class="w-full md:w-1/2 text-center md:text-left">
                        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
                            Branding Bukan cuman logo!
                        </h1>
                        <p class="text-subtle mt-6 text-lg max-w-lg mx-auto md:mx-0">
                            Mau usaha atau personal makin di kenal & di percaya? Yuk kenalan sama branding yang beneran nempel di ingatan orang!
                        </p>
                        <a href="#" class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg mt-10 text-lg transition duration-300">
                            Konsultasi Gratis!
                        </a>
                    </div>
                    
                    <div class="w-full md:w-1/2 mt-12 md:mt-0">
                        <img src="./images/hero.png" alt="Ilustrasi Hero" class="mx-auto"></img>
                    </div>
                </div>
            </div>
        </header>

  );
}
