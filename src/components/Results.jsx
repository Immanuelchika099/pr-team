import React from'react';
import{motion}from'framer-motion';

const stats=
    [
        {
            id:'01',
            number:'20+',
            label:'GLOBAL BRANDS',
            sub:'Serviced across Europe, US, and Asia'
        },
        
        {
            id:'02',
            number:'50+',
            label:'CAMPAIGNS',
            sub:'From viral launches to long-term PR'
        },
        {
            id:'03',
            number:'100%',
            label:'COMMITMENT',
            sub:'Every project receives creative focus'
        }
    ];
    
function Results(){
    return 
        <section className="bg-[#F3F3F1] text-[#050505] py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-xs font-bold tracking-[0.2em] text-black/50 uppercase mb-16">
                  <span className="text-[#E50914]">04 /</span>
                    RESULTS THAT SPEAK
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-black/10">
                    {
                        stats.map((s,i)=>
                        <motion.div
                            key={s.id}
                            initial={{opacity:0,y:20}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{once:true}} 
                            transition={{duration:.6,delay:i*.2}}
                            className="pt-8 md:pt-0 md:px-8 first:px-0">
                                <div className="font-anton text-7xl sm:text-8xl lg:text-9xl text-[#E50914] mb-2">
                                    {s.number}
                                </div>
                                
                                <div className="font-anton text-2xl uppercase tracking-wider mb-2">
                                    {s.label}
                                </div>
                                
                                <p className="text-xs font-manrope text-black/70">
                                    {s.sub}
                                </p>
                        </motion.div> )
                    }
                </div>
            </div>
        </section>
    }



export default Results