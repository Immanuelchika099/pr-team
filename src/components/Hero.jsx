import React from 'react';
import{motion}from'framer-motion';
import{ArrowDown}from'lucide-react';


function Hero() {
    return (

        <section id="home" className="c203 c162 c188 c182 c046 c047 c102 c174 c013 c025 c031">
            <div className="c008 c205 c034 c208 c185 c172 c052 c244 c106 c253 c286">NOISE
            </div>
            
            <div className="c123 c168 c194 c152 c282 c203 c287 c065 c066 c119 c057 c099 c169">
                <div className="c117">
                    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
                        <span className="c260 c055 c265 c256 c273 c020 c132">WE MAKE</span>
                        <h1 className="c052 c236 c223 c159 c285 c105 c273 c253 c133">BRANDS <br/>
                            <span className="c241">IMPOSSIBLE</span> <br/>TO IGNORE<span className="c241">.</span>
                        </h1>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4,duration:.8}} className="c046 c049 c099 c061 c260 c055 c268 c257 c189 c029 c031 c125">
                        <span>PR</span>
                        <span className="c241">•</span>
                        <span>SOCIAL</span>
                        <span className="c241">•</span>
                        <span>CONTENT</span>
                        <span className="c241">•</span>
                        <span>STRATEGY</span></motion.div>
                </div>
            <div className="c115 c203">
                <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.2}} className="c203 c287">
                    <div className="c203 c282 c087 c216 c174 c064 c293 c270 c042 c021 c031">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80" alt="Editorial Portrait" className="c282 c088 c170"/>
                    </div>
                    
                    <div className="c008 c002 c004 c278 c079 c089 c212 c022 c023 c174 c211 c288">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" alt="Live Event" className="c282 c088 c170"/>
                    </div>
                    
                    <div className="c008 c262 c006 c015 c253 c177 c124 c288 c089 c135">
                        <p className="c052 c251 c108 c273">WE DON'T FOLLOW TRENDS. WE START CONVERSATIONS.</p>
                    </div>
                    
                    <div className="c008 c007 c003 c275 c076 c289 c185 c089 c213 c099 c103">
                        <svg className="c282 c088 c011" viewBox="0 0 100 100">
                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
                            <text className="c243 c053 c269 c043 c273">
                                <textPath href="#circlePath">CREATING CULTURE • MAKING NOISE •</textPath>
                            </text>
                        </svg> 
                    </div>
                    </motion.div>
                </div>
            </div>

            <div className="c123 c168 c194 c152 c282 c186 c046 c102 c100 c203 c287">
                <div className="c046 c099 c060 c260 c269 c255 c273">
                    <ArrowDown className="c276 c077 c241 c009"/><span>SCROLL TO EXPLORE</span>
                </div>
                
                <div className="c260 c052 c269 c254">01 / 05</div>
            </div>
        </section>
    )
    }


export default Hero