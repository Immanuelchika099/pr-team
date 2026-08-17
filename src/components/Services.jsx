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

    return (

        <section
            id="services"
            className="c013 c253 c198 c155 c029 c031"
        >
            <div className="c123 c168 c194 c152">
                <div className="c260 c053 c265 c255 c273 c129">
                    <span className="c241">02 /</span> WHAT WE DO
                </div>
                
                <div className="c065 c066 c119 c057 c101">
                    <div className="c117 c038 c037">
                        {servicesData.map((s,i)=>
                            <div
                                key={s.id}
                                onMouseEnter={()=>setActiveService(i)}
                                className={`group c035 c202 c271 c040 c046 c099 c102 ${activeService===i?'c241':'c253'}`}>
                                    <div className="c046 c099 c062">
                                        <span className="c052 c259 c171">{s.id}</span>
                                        <h3 className="c052 c232 c220 c157 c273 c267 c074 c272 c040">
                                            {s.title}
                                        </h3>
                                    </div>
                                    <ArrowUpRight className={`c281 c084 c272 c040 ${activeService===i?'c206 c241':'c254'}`}/>
                            </div>
                        )}
                    </div>
                    
                    <div className="c115 c231 c263 c089 c110">
                        <motion.div
                            key={activeService}
                            initial={{opacity:0,scale:.98}}
                            animate={{opacity:1,scale:1}}
                            transition={{duration:.4}}
                            className="c019 c177 c021 c031">
                                <div className="c203 c083 c282 c174 c133">
                                    <img src={servicesData[activeService].image} alt={servicesData[activeService].title} className="c282 c088 c170 c064"/>
                                </div>

                                <h4 className="c052 c232 c273 c131 c253">
                                    {servicesData[activeService].title}
                                </h4>
                                
                                <p className="c260 c054 c257 c107">
                                    {servicesData[activeService].desc}
                                </p>
                                
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
    }



export default Services