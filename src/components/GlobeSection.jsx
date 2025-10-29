import React from 'react';


export default function GlobeSection(){
	return(
	<div>
        <section class="bg-white py-16 md:py-24">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-4xl font-bold">Buka Akses Pasar Global<br></br>untuk Bisnis Anda</h2>
                <p class="text-subtle mt-6 max-w-xl mx-auto">
                    Dengan website, bisnis Anda siap menjangkau pelanggan baru di seluruh dunia, 24/7.
                </p>
                
                <div class="mt-12">
                    <img src="./images/world.png" alt="Peta Dunia" class="mx-auto max-w-full h-auto"></img>
                </div>
            </div>
        </section>

        <section class="bg-gray-50 py-16">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" class="h-12 md:h-16 grayscale opacity-60"></img>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" class="h-10 md:h-12 grayscale opacity-60"></img>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" class="h-12 md:h-16 grayscale opacity-60"></img>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel Logo" class="h-12 md:h-16 grayscale opacity-60"></img>
                </div>
            </div>
        </section>
    </div>
	)
}