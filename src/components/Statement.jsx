import React from 'react';
import {motion} from 'framer-motion';


function Statement(){
    return (
        
        <section className="c015 c253 c198 c154 c174 c203">
            <div className="c123 c168 c194 c152 c203 c287 c250 c161">
                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:.8}}
                >
                    <h2 className="c052 c235 c223 c159 c284 c273 c104 c266">
                        YOUR BRAND DESERVES MORE THAN ATTENTION
                        <span className="c245">.</span> <br/>
                        <span className="c245">IT DESERVES CULTURE.</span>
                    </h2>
                </motion.div>
            </div>
        </section>
    )
    }


export default Statement