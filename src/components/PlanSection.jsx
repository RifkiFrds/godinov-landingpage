import React from 'react'





export default function PlanSection(){
	return(   <section class="bg-white py-16 md:py-24" id="plan">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-4xl font-bold">Daftar Paket</h2>
                <p class="text-subtle mt-6">
                    Mari cari paket yang sesuai dengan kebutuhan bisnis kamu!
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    <div class="border border-gray-200 rounded-2xl p-6 text-left">
                        <img src="./images/bronze.png" alt="Paket Bronze" class="h-24"></img>
                        <h3 class="text-2xl font-bold mt-4">Paket Bronze</h3>
                        <p class="text-subtle mt-2 h-20">Cocok sebagai profil bisnis anda agar terlihat professional dan dapat menjangkau lebih banyak pelanggan!</p>
                        <ul class="mt-6 space-y-3">
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Tampilan Professional</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Hosting 1 Tahun</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Responsive</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Menggunakan Teknologi Terbaru</span>
                            </li>
                        </ul>
                        <div class="text-2xl font-bold text-slate-800 mt-8">500rb - 1JT</div>
                            <a href="#" class="block w-full text-center border border-red-500 text-red-500 font-semibold py-3 rounded-lg mt-6 hover:bg-red-50 transition duration-300">
                                Select
                            </a>
                        </div>
                    
                    <div class="border border-gray-200 rounded-2xl p-6 text-left">
                        <img src="./images/silver.png" alt="Paket Silver" class="h-24"></img>
                        <h3 class="text-2xl font-bold mt-4">Paket Silver</h3>
                        <p class="text-subtle mt-2 h-20">Dengan sistem CRUD, dan bermain Data. Cocok untuk anda yang ingin semua resource bisnis nya lebih efisien</p>
                        <ul class="mt-6 space-y-3">
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Landing Page Professional</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Dashboard Admin</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Responsive</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Menggunakan Teknologi Terbaru</span>
                            </li>
                             <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Integrasi API</span>
                            </li>
                             <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Hosting 1 Tahun</span>
                            </li>
                        </ul>
                        <div class="text-2xl font-bold text-slate-800 mt-8">1.1JT - 3JT</div>
                        <a href="#" class="block w-full text-center border border-red-500 text-red-500 font-semibold py-3 rounded-lg mt-6 hover:bg-red-50 transition duration-300">
                            Select
                        </a>
                    </div>
                    
                    <div class="border-2 border-red-500 rounded-2xl p-6 text-left relative">
                        <img src="./images/gold.png" alt="Paket Gold" class="h-24"></img>
                        <h3 class="text-2xl font-bold mt-4">Paket Gold</h3>
                        <p class="text-subtle mt-2 h-20">Cocok untuk anda yang memiliki perusahaan dan membutuhkan sebuah sistem yang kompleks</p>
                        <ul class="mt-6 space-y-3">
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">ERP</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Keamanan Tinggi</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Data Tracking (Audit)</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Integrasi API</span>
                            </li>
                             <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Menggunakan Teknologi Terbaru</span>
                            </li>
                             <li class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" /></svg>
                                <span class="text-subtle">Implementasi pada Perusahaan</span>
                            </li>
                        </ul>
                        <div class="text-2xl font-bold text-slate-800 mt-8">Dinegosiasikan</div>
                        <a href="#" class="block w-full text-center bg-red-500 text-white font-semibold py-3 rounded-lg mt-6 hover:bg-red-600 transition duration-300">
                            Select
                        </a>
                    </div>
                </div>
            </div>
        </section>

        );
}