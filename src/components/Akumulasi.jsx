import React from 'react';



export default function Akumulasi(){
	return (  <section class="bg-white py-16">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div class="flex items-center justify-center gap-4 py-6 md:py-0">
                        <div class="bg-red-100 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-slate-800">10+</div>
                            <div class="text-subtle">Project</div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-4 py-6 md:py-0">
                        <div class="bg-red-100 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
                                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 5.16-4.252l.067-.101a.75.75 0 0 0-.88-1.127l-.088.065a15.46 15.46 0 0 1-4.402 3.32 15.46 15.46 0 0 1-4.402-3.32l-.088-.065a.75.75 0 0 0-.88 1.127l.067.101a16.975 16.975 0 0 0 5.16 4.252Z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-slate-800">5+</div>
                            <div class="text-subtle">Clients</div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-4 py-6 md:py-0">
                        <div class="bg-red-100 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.217 1.655L4.63 15.62l-.003.004c.002.002.004.004.006.006l.002.002a.75.75 0 0 0 1.06 1.06l.006-.006.004-.003.002-.002 6.168-4.406a1.875 1.875 0 0 1 1.655-.217l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-1.372c-.86 0-1.61-.586-1.819-1.42l-1.105-4.423a1.875 1.875 0 0 1 .217-1.655l4.14-5.908-.002-.003a.75.75 0 0 0-1.06-1.06l-.003.002-5.908 4.14a1.875 1.875 0 0 1-1.655.217l-4.423-1.105a2.25 2.25 0 0 0-1.819-1.42V4.5Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-slate-800">50+</div>
                            <div class="text-subtle">Tech Stack</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}