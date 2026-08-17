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
    return (

        <section id="work" className="c013 c253 c198 c155 c029 c031">
            <div className="c123 c168 c194 c152">
                <div className="c046 c047 c142 c148 c102 c129 c062">
                    <div>
                        <div className="c260 c053 c265 c255 c273 c132">
                            <span className="c241">03 /</span>
                                SELECTED WORK
                        </div>
                        
                        <h2 className="c052 c235 c222 c273">SELECTED
                            <span className="c241">PROJECTS.</span>
                        </h2>
                    </div>
                    
                    <a href="#work" className="c097 c099 c059 c052 c252 c273 c253 c094 c271 c025 c030 c092 c179">
                        VIEW ALL WORK <ArrowUpRight className="c276 c077"/>
                    </a>
                    
                </div>
                
                <div className="c227">
                    {
                        projects.map((p,i)=>
                            <motion.div
                                key={p.id}
                                initial={{opacity:0,y:40}}
                                whileInView={{opacity:1,y:0}} 
                                viewport={{once:true}}
                                transition={{duration:.8}}
                                className="group c035 c065 c066 c119 c063 c099">
                                    <div className={`c118 c174 c203 c021 c031 ${i%2===1?'c121':''}`}>
                                        <div className="c086 c216 c282 c174">
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="c282 c088 c170 c064 c292 c069 c270 c042"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className={`c114 c228 ${i%2===1?'c120':''}`}>
                                        <span className="c052 c233 c241 c020">{p.id}</span>
                                        <div className="c260 c055 c269 c255 c273">
                                            {p.category} — {p.year}
                                        </div>
                                        <h3 className="c052 c234 c221 c273 c108 c071 c271">
                                            {p.title}
                                        </h3>
                                        
                                        <div className="c189">
                                            <span className="c097 c099 c059 c052 c260 c269 c273 c258 c071">VIEW CASE STUDY
                                                <ArrowUpRight className="c276 c077 c073 c068 c272"/>
                                            </span>
                                        </div>
                                    </div>
                                    
                            </motion.div>)
                    }
                </div>

            </div>
        </section>
    )
    }



export default SelectedWork