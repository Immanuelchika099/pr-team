import React from'react';
import { motion } from 'framer-motion';


function Testimonial(){
    return (

        <section className="c013 c253 c198 c155 c029 c031">
            <div className="c123 c168 c194 c152">
                <div className="c260 c053 c265 c255 c273 c129">
                    <span className="c241">07 /</span> TESTIMONIAL
                </div>
                
                <motion.div
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:.8}}
                    className="c065 c066 c119 c063 c101"
                >
                    <div className="c112 c052 c238 c160 c241 c106">“</div>
                    <div className="c111 c230">
                        <h2 className="c052 c234 c222 c158 c273 c108 c267">
                            THEY UNDERSTOOD THE ASSIGNMENT BEFORE WE EVEN FINISHED EXPLAINING IT.
                        </h2>
                        
                        <div className="c046 c099 c061 c190 c029 c031">
                        <div className="c274 c075 c207 c174 c021 c024">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Client Portrait" className="c282 c088 c170"/></div>
                            
                            <div>
                                <div className="c052 c251 c273 c268 c253">JANE DOE</div>
                                <div className="c260 c054 c255 c273">MARKETING DIRECTOR, XYZ BRAND</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
    }


export default Testimonial