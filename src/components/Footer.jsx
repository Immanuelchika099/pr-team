import React from'react';

function Footer(){
    return 
        <footer className="bg-[#050A12] text-white pt-20 pb-12 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">

                    <div className="md:col-span-5 space-y-4">
                        <a href="#home" className="font-anton text-3xl tracking-wider uppercase text-white block">
                            THE <span className="text-[#E50914]">NOISE</span> CLUB.
                        </a>
                        <p className="text-xs text-white/50 max-w-sm leading-relaxed">
                            An independent creative communications agency making brands impossible to ignore through PR, strategy, and culture.
                        </p>
                    </div>
                    
                    <div className="md:col-span-3 space-y-2">
                        <span className="text-xs font-bold tracking-widest text-[#E50914] uppercase block mb-4">
                            NAVIGATE
                        </span>
                        <ul className="space-y-2 text-xs font-semibold text-white/70">
                            <li>
                                <a href="#home" className="hover:text-white">HOME</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white">
                                    ABOUT
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white">SERVICES</a>
                            </li>
                            <li>
                                <a href="#work" className="hover:text-white">WORK</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white">CONTACT</a>
                            </li>
                        </ul>
                        
                    </div>
                    
                    <div className="md:col-span-4 space-y-2">
                        <span className="text-xs font-bold tracking-widest text-[#E50914] uppercase block mb-4">CONNECT</span>
                            <p className="text-xs text-white/70">HELLO@THENOISECLUB.COM</p>
                            <div className="flex gap-4 text-xs font-semibold text-white/70 pt-4">
                                <a href="#" className="hover:text-[#E50914]">INSTAGRAM</a>
                                <a href="#" className="hover:text-[#E50914]">LINKEDIN</a>
                                <a href="#" className="hover:text-[#E50914]">TWITTER / X</a>
                            </div>
                    </div>
                </div>
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/40 tracking-wider">
                    <p>© 2026 THE NOISE CLUB. ALL RIGHTS RESERVED.</p>
                    
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-white">TERMS & CONDITIONS</a>
                    </div>
                </div>
            </div>
        </footer>
}

export default Footer