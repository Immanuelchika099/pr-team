import React from 'react';
import{motion}from'framer-motion';
import{ArrowDown}from'lucide-react';


function Hero() {
    return
        <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#050A12] border-b border-white/10">
            <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-5 font-anton text-[28vw] leading-none text-white z-0">NOISE
            </div>
            
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
                <div className="lg:col-span-7">
                    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
                        <span className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase block mb-4">WE MAKE</span>
                        <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl xl:text-[110px] leading-[0.9] uppercase text-white mb-6">BRANDS <br/>
                            <span className="text-[#E50914]">IMPOSSIBLE</span> <br/>TO IGNORE<span className="text-[#E50914]">.</span>
                        </h1>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4,duration:.8}} className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wider text-white/70 pt-4 border-t border-white/10 max-w-md">
                        <span>PR</span>
                        <span className="text-[#E50914]">•</span>
                        <span>SOCIAL</span>
                        <span className="text-[#E50914]">•</span>
                        <span>CONTENT</span>
                        <span className="text-[#E50914]">•</span>
                        <span>STRATEGY</span></motion.div>
                </div>
            <div className="lg:col-span-5 relative">
                <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.2}} className="relative z-10">
                    <div className="relative w-full h-[420px] sm:h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80" alt="Editorial Portrait" className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="absolute -bottom-8 -left-8 w-48 h-56 hidden sm:block border-2 border-[#050A12] overflow-hidden shadow-2xl z-20">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" alt="Live Event" className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="absolute top-12 -right-6 bg-[#E50914] text-white p-6 max-w-[200px] z-20 hidden md:block">
                        <p className="font-anton text-lg leading-tight uppercase">WE DON'T FOLLOW TRENDS. WE START CONVERSATIONS.</p>
                    </div>
                    
                    <div className="absolute -top-10 -left-10 w-28 h-28 z-30 pointer-events-none hidden sm:flex items-center justify-center">
                        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
                            <text className="text-[10px] font-bold tracking-widest fill-white uppercase">
                                <textPath href="#circlePath">CREATING CULTURE • MAKING NOISE •</textPath>
                            </text>
                        </svg> 
                    </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-12 flex justify-between items-end relative z-10">
                <div className="flex items-center gap-3 text-xs tracking-widest text-white/50 uppercase">
                    <ArrowDown className="w-4 h-4 text-[#E50914] animate-bounce"/><span>SCROLL TO EXPLORE</span>
                </div>
                
                <div className="text-xs font-anton tracking-widest text-white/40">01 / 05</div>
            </div>
        </section>
    }


export default Hero