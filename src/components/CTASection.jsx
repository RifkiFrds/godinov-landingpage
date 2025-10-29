import React from 'react';


export default function CTASection(){
    return(        


        <section class="bg-white pt-12 pb-24">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h2 class="text-3xl font-bold">Tunggu Apa Lagi?</h2>
                        <p class="text-subtle mt-2">
                            Jadwalkan sesi konsultasi gratis sekarang dan temukan solusi website terbaik untuk Bisnis Anda!
                        </p>
                    </div>
                    <a href="#" class="flex-shrink-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 w-full md:w-auto text-center">
                        Jadwalkan Konsultasi Gratis
                    </a>
                </div>
            </div>
        </section>

        )
}