import React from'react';
import { motion } from 'framer-motion';

const approachItems=
    [
        {
            num:'01',
            title:'LISTEN',
            desc:'We dissect your brand DNA and market context.'
        },
        {
            num:'02',
            title:'STRATEGIZE',
            desc:'We formulate angles that demand media and audience focus.'
        },
        {
            num:'03',
            title:'CREATE',
            desc:'We execute visual and written narrative with high precision.'
        },
        {
            num:'04',
            title:'AMPLIFY',
            desc:'We launch across key PR, social, and cultural channels.'
        }
    ];
    

function Team(){
    return 
        <section className="bg-[#050A12] text-white py-24 md:py-36 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-16">
                    <span className="text-[#E50914]">05 /</span> ABOUT THE TEAM
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-8">
                        <h2 className="font-anton text-5xl sm:text-6xl uppercase leading-tight">MEET THE
                            <span className="text-[#E50914]">
                                NOISE MAKERS.
                            </span>
                        </h2>
                        <p className="text-sm font-manrope text-white/70 leading-relaxed">
                            We are a collective of publicists, creative directors, strategists, and visual artists driven by a single purpose: elevating brands into cultural icons.
                        </p>
                        
                        <div className="relative h-64 overflow-hidden border border-white/10">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Agency Team" className="w-full h-full object-cover grayscale"/>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 bg-white/5 p-8 sm:p-12 border border-white/10">
                        <div className="text-xs font-bold tracking-[0.2em] text-[#E50914] uppercase mb-8">
                            OUR APPROACH
                        </div>
                        <div className="space-y-6">
                            {
                            approachItems.map(item=>
                                <motion.div
                                    key={item.num}
                                    whileHover={{x:6}}
                                    className="p-4 border-b border-white/10 transition-colors hover:border-[#E50914] cursor-pointer"
                                >
                                    <div className="flex items-center gap-6 mb-1">
                                        <span className="font-anton text-[#E50914] text-lg">
                                            {item.num}
                                        </span>
                                        <h3 className="font-anton text-2xl uppercase tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-white/60 pl-12">
                                        {item.desc}
                                    </p>
                                </motion.div> 
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }



export default Team