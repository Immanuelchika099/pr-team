import React from 'react';
import{motion}from'framer-motion';
import{ArrowUpRight}from'lucide-react';


function Intro(){
    return
        <section id="about" className="bg-[#F3F3F1] text-[#050505] py-24 md:py-36">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-xs font-bold tracking-[0.2em] text-[#050505]/60 uppercase mb-12 flex items-center gap-3">
                    <span className="text-[#E50914]">01 /</span> WHO WE ARE
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <motion.div
                        initial={{opacity:0,y:20}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:.8}}
                        className="lg:col-span-6"
                    >
                        <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl leading-[0.95] uppercase">WE DON'T JUST CREATE CONTENT<span className="text-[#E50914]">.</span> <br/>
                           <span className="text-[#E50914]">WE CREATE ATTENTION.</span>
                        </h2></motion.div><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8,delay:.2}} className="lg:col-span-3 space-y-6 text-sm font-manrope text-black/80 leading-relaxed">
                        
                        <p>The Noise Club is an independent creative communications studio helping modern brands become impossible to ignore through strategy, storytelling, and culture-driven campaigns.</p>
                        <a href="#about" className="inline-flex items-center gap-2 font-anton text-sm text-[#050505] hover:text-[#E50914] transition-colors border-b-2 border-black hover:border-[#E50914] pb-1 uppercase tracking-wider">ABOUT US <ArrowUpRight className="w-4 h-4"/></a>
                    </motion.div>
                    
                    <motion.div
                        initial={{opacity:0,scale:.95}}
                        whileInView={{opacity:1,scale:1}}
                        viewport={{once:true}}
                        transition={{duration:.8,delay:.3}}
                        className="lg:col-span-3 relative"
                    >
                        <div className="relative h-64 w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Creative Studio Team" className="w-full h-full object-cover"/>
                        </div>
                        
                        <div className="absolute -bottom-6 -right-4 bg-[#E50914] text-white p-4 font-anton text-xs uppercase tracking-widest">EST. 2024
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    }


export default Intro