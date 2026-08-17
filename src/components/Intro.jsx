import React from 'react';
import{motion}from'framer-motion';
import{ArrowUpRight}from'lucide-react';


function Intro(){
    return (

        <section id="about" className="c016 c239 c198 c155">
            <div className="c123 c168 c194 c152">
                <div className="c260 c053 c265 c240 c273 c128 c046 c099 c060">
                    <span className="c241">01 /</span> WHO WE ARE
                </div>
                
                <div className="c065 c066 c119 c057 c101">
                    <motion.div
                        initial={{opacity:0,y:20}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{duration:.8}}
                        className="c116"
                    >
                        <h2 className="c052 c235 c222 c158 c104 c273">WE DON'T JUST CREATE CONTENT<span className="c241">.</span> <br/>
                           <span className="c241">WE CREATE ATTENTION.</span>
                        </h2></motion.div><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8,delay:.2}} className="c113 c229 c252 c054 c249 c107">
                        
                        <p>The Noise Club is an independent creative communications studio helping modern brands become impossible to ignore through strategy, storytelling, and culture-driven campaigns.</p>
                        <a href="#about" className="c097 c099 c059 c052 c252 c239 c094 c271 c026 c027 c092 c179 c273 c268">ABOUT US <ArrowUpRight className="c276 c077"/></a>
                    </motion.div>
                    
                    <motion.div
                        initial={{opacity:0,scale:.95}}
                        whileInView={{opacity:1,scale:1}}
                        viewport={{once:true}}
                        transition={{duration:.8,delay:.3}}
                        className="c113 c203"
                    >
                        <div className="c203 c081 c282 c174 c064 c293 c270 c041">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Creative Studio Team" className="c282 c088 c170"/>
                        </div>
                        
                        <div className="c008 c001 c005 c015 c253 c176 c052 c260 c273 c269">EST. 2024
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
    }


export default Intro