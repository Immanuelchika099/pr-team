import React from 'react';
import { ArrowUpRight } from 'lucide-react';


function CTA(){
    return
        <section className="bg-[#E50914] text-white py-28 md:py-40 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
               
                <div>
                    <span className="text-xs font-bold tracking-[0.2em] text-black uppercase block mb-4">LET'S WORK TOGETHER</span>
                    <h2 className="font-anton text-6xl sm:text-8xl md:text-9xl uppercase leading-none">READY TO MAKE <br/>SOME NOISE?</h2>
                </div>
                
            <a href="#contact" className="group w-40 h-40 rounded-full bg-black text-white flex flex-col items-center justify-center font-anton text-xl tracking-wider uppercase transition-transform hover:scale-110"><span>LET'S TALK</span>
            <ArrowUpRight className="w-6 h-6 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/></a>
            </div>
        </section>
}

export default CTA
