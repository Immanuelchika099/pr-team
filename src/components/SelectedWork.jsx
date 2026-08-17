import React from 'react';
import {motion} from 'framer-motion';
import {ArrowUpRight} from 'lucide-react';


const projects=
    [
        {
            id:'01',
            title:'SHEIN SUMMER CAMPAIGN',
            category:'PR / SOCIAL / CONTENT',
            year:'2025',
            image:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id:'02',
            title:'KINETIC AUDIO LABS',
            category:'BRAND STRATEGY & EXPERIENTIAL',
            year:'2025',
            image:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id:'03',
            title:'VANGUARD VISION REPAIR',
            category:'DIGITAL CAMPAIGN',
            year:'2024',
            image:'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80'
        }
    ];
    
function SelectedWork(){
    return
        <section id="work" className="bg-[#050A12] text-white py-24 md:py-36 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-4">
                            <span className="text-[#E50914]">03 /</span>
                                SELECTED WORK
                        </div>
                        
                        <h2 className="font-anton text-5xl sm:text-6xl uppercase">SELECTED
                            <span className="text-[#E50914]">PROJECTS.</span>
                        </h2>
                    </div>
                    
                    <a href="#work" className="inline-flex items-center gap-2 font-anton text-sm uppercase text-white hover:text-[#E50914] transition-colors border-b border-white hover:border-[#E50914] pb-1">
                        VIEW ALL WORK <ArrowUpRight className="w-4 h-4"/>
                    </a>
                    
                </div>
                
                <div className="space-y-24">
                    {
                        projects.map((p,i)=>
                            <motion.div
                                key={p.id}
                                initial={{opacity:0,y:40}}
                                whileInView={{opacity:1,y:0}} 
                                viewport={{once:true}}
                                transition={{duration:.8}}
                                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    <div className={`lg:col-span-8 overflow-hidden relative border border-white/10 ${i%2===1?'lg:order-2':''}`}>
                                        <div className="h-[350px] sm:h-[500px] w-full overflow-hidden">
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className={`lg:col-span-4 space-y-4 ${i%2===1?'lg:order-1':''}`}>
                                        <span className="font-anton text-3xl text-[#E50914] block">{p.id}</span>
                                        <div className="text-xs font-semibold tracking-widest text-white/50 uppercase">
                                            {p.category} — {p.year}
                                        </div>
                                        <h3 className="font-anton text-4xl sm:text-5xl uppercase leading-tight group-hover:text-[#E50914] transition-colors">
                                            {p.title}
                                        </h3>
                                        
                                        <div className="pt-4">
                                            <span className="inline-flex items-center gap-2 font-anton text-xs tracking-widest uppercase text-white/80 group-hover:text-[#E50914]">VIEW CASE STUDY
                                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                                            </span>
                                        </div>
                                    </div>
                                    
                            </motion.div>)
                    }
                </div>

            </div>
        </section>
    }



export default SelectedWork