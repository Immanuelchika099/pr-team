import React, {useState} from'react';
import {motion} from 'framer-motion';
import{ArrowUpRight} from 'lucide-react';


const servicesData=
[
    {
        id:'01',
        title:'PUBLIC RELATIONS',
        desc:'Securing top-tier media placement, narrative architecture, and strategic crisis management.',
        image:'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'
    },
    {
        id:'02',
        title:'SOCIAL MEDIA & COMMUNITY',
        desc:'Building social strategies that spark conversation, foster high engagement, and drive cultural momentum.',
        image:'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
    },
    {
        id:'03',
        title:'CONTENT & STORYTELLING',
        desc:'High-end visual production, editorial editorial art direction, film, and photography.',
        image:'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
    },
    {
        id:'04',
        title:'BRAND STRATEGY',
        desc:'Positioning, voice, visual identity systems, and long-term audience roadmap development.',
        image:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    },
    {
        id:'05',
        title:'CAMPAIGNS & ACTIVATIONS',
        desc:'Experiential marketing, experiential pop-ups, launch activations, and viral moments.',
        image:'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    }
];


function Services(){
    
    const[activeService,setActiveService]=useState(0);

    return 
        <section
            id="services"
            className="bg-[#050A12] text-white py-24 md:py-36 border-t border-white/10"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-16">
                    <span className="text-[#E50914]">02 /</span> WHAT WE DO
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 divide-y divide-white/10">
                        {servicesData.map((s,i)=>
                            <div
                                key={s.id}
                                onMouseEnter={()=>setActiveService(i)}
                                className={`group cursor-pointer py-8 transition-colors duration-300 flex items-center justify-between ${activeService===i?'text-[#E50914]':'text-white'}`}>
                                    <div className="flex items-center gap-6">
                                        <span className="font-anton text-xl opacity-40">{s.id}</span>
                                        <h3 className="font-anton text-2xl sm:text-4xl md:text-5xl uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                            {s.title}
                                        </h3>
                                    </div>
                                    <ArrowUpRight className={`w-8 h-8 transition-transform duration-300 ${activeService===i?'rotate-45 text-[#E50914]':'text-white/40'}`}/>
                            </div>
                        )}
                    </div>
                    
                    <div className="lg:col-span-5 sticky top-32 hidden lg:block">
                        <motion.div
                            key={activeService}
                            initial={{opacity:0,scale:.98}}
                            animate={{opacity:1,scale:1}}
                            transition={{duration:.4}}
                            className="bg-white/5 p-6 border border-white/10">
                                <div className="relative h-72 w-full overflow-hidden mb-6">
                                    <img src={servicesData[activeService].image} alt={servicesData[activeService].title} className="w-full h-full object-cover grayscale"/>
                                </div>

                                <h4 className="font-anton text-2xl uppercase mb-3 text-white">
                                    {servicesData[activeService].title}
                                </h4>
                                
                                <p className="text-xs font-manrope text-white/70 leading-relaxed">
                                    {servicesData[activeService].desc}
                                </p>
                                
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    }



export default Services