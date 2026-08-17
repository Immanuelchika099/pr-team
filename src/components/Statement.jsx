import React from 'react';
import {motion} from 'framer-motion';


function Statement(){
    return 
        <section className="bg-[#E50914] text-white py-24 md:py-32 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:.8}}
                >
                    <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase leading-[0.95] tracking-tight">
                        YOUR BRAND DESERVES MORE THAN ATTENTION
                        <span className="text-black">.</span> <br/>
                        <span className="text-black">IT DESERVES CULTURE.</span>
                    </h2>
                </motion.div>
            </div>
        </section>
    }


export default Statement