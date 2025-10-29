import React from 'react'

function Navbar(){

	return(

	    <nav class="bg-white sticky top-0 z-60 h-18 b">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center transition-all duration-300">
                    <a href="#" class="flex items-center gap-2">
                        <img src="./images/logo.png" alt="Godinov" class="h-15 mt-1 w-15"></img>
                        <span class="font-bold text-4xl text-slate-800 ">Godinov</span>
                    </a>
                    
                    <div class="hidden md:flex items-center gap-8 ">
                        <a href="#home" class="text-subtle hover:text-slate-900">Home</a>
                        <a href="#feature" class="text-subtle hover:text-slate-900">Fitur</a>
                        <a href="#plan" class="text-subtle hover:text-slate-900">Paket</a>
                    </div>
                </div>
            </div>
        </nav>
);
		

}

export default Navbar