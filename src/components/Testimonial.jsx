import React from'react';
import { motion } from 'framer-motion';


function Testimonial(){
    return 
        <section className="bg-[#050A12] text-white py-24 md:py-36 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-16">
                    <span className="text-[#E50914]">07 /</span> TESTIMONIAL
                </div>
                
                <motion.div
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:.8}}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                    <div className="lg:col-span-2 font-anton text-8xl md:text-9xl text-[#E50914] leading-none">“</div>
                    <div className="lg:col-span-10 space-y-8">
                        <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase leading-tight tracking-wide">
                            THEY UNDERSTOOD THE ASSIGNMENT BEFORE WE EVEN FINISHED EXPLAINING IT.
                        </h2>
                        
                        <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E50914]">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Client Portrait" className="w-full h-full object-cover"/></div>
                            
                            <div>
                                <div className="font-anton text-lg uppercase tracking-wider text-white">JANE DOE</div>
                                <div className="text-xs font-manrope text-white/50 uppercase">MARKETING DIRECTOR, XYZ BRAND</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    }


export default Testimonial