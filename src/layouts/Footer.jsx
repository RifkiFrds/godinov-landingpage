import React from 'react'





export default function Footer(){
	return(

		<footer class="bg-white border-t border-gray-100">
            <div class="container mx-auto px-4 pt-16 pb-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="md:col-span-2">
                        <a href="#" class="flex items-center gap-2">
                            <img src="./images/logo.png" alt="Logo Godinov" class="h-10 w-10"></img>
                            <span class="font-bold text-2xl text-slate-800">Godinov</span>
                        </a>
                        <p class="text-subtle mt-4 max-w-sm">
                            Godinov Adalah Sebuah Perusahaan Startup Di Bidang Web dan App Development.
                        </p>
                        <div class="flex gap-4 mt-6">
                            <a href="#" class="text-gray-400 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.565-.665 2.458 0 1.999 1.018 3.76 2.56 4.798-.943-.03-1.828-.29-2.6-.722v.065c0 2.79 1.983 5.122 4.608 5.658-.48.13-.99.198-1.52.198-.37 0-.73-.037-1.08-.103.732 2.29 2.848 3.96 5.352 4.008-1.97 1.54-4.464 2.45-7.16 2.45-.46 0-.91-.026-1.36-.08.254 1.63 5.56 2.66 9.1 2.66 10.92 0 16.89-9.04 16.89-16.89 0-.256-.006-.51-.017-.764.16-.118 1.11-.8 1.53-1.582z"/></svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919 1.266.058 1.646.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/></svg>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="font-bold text-lg text-slate-800">Tech Stack</h4>
                        <ul class="mt-4 space-y-2">
                            <li><a href="#" class="text-subtle hover:text-slate-900">HTML</a></li>
                            <li><a href="#" class="text-subtle hover:text-slate-900">TailwindCSS</a></li>
                            <li><a href="#" class="text-subtle hover:text-slate-900">JS</a></li>
                            <li><a href="#" class="text-subtle hover:text-slate-900">REACT</a></li>
                            <li><a href="#" class="text-subtle hover:text-slate-900">LARAVEL</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-bold text-lg text-slate-800">About Us</h4>
                        <ul class="mt-4 space-y-2">
                            <li><a href="#" class="text-subtle hover:text-slate-900">Employee</a></li>
                            <li><a href="#" class="text-subtle hover:text-slate-900">Company Profile</a></li>
                        </ul>
                    </div>
                </div>

                <div class="mt-12 border-t border-gray-100 pt-8 text-center">
                    <p class="text-subtle text-sm">
                        ©2025 Godinov Corporation. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>

	);
}