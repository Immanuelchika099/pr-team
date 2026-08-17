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
    return (

        <section className="c013 c253 c198 c155 c029 c031">
            <div className="c123 c168 c194 c152">
                <div className="c260 c053 c265 c255 c273 c129">
                    <span className="c241">05 /</span> ABOUT THE TEAM
                </div>
                
                <div className="c065 c066 c119 c057 c099">
                    <div className="c115 c230">
                        <h2 className="c052 c235 c222 c273 c108">MEET THE
                            <span className="c241">
                                NOISE MAKERS.
                            </span>
                        </h2>
                        <p className="c252 c054 c257 c107">
                            We are a collective of publicists, creative directors, strategists, and visual artists driven by a single purpose: elevating brands into cultural icons.
                        </p>
                        
                        <div className="c203 c081 c174 c021 c031">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Agency Team" className="c282 c088 c170 c064"/>
                        </div>
                    </div>
                    
                    <div className="c117 c019 c178 c218 c021 c031">
                        <div className="c260 c053 c265 c241 c273 c134">
                            OUR APPROACH
                        </div>
                        <div className="c229">
                            {
                            approachItems.map(item=>
                                <motion.div
                                    key={item.num}
                                    whileHover={{x:6}}
                                    className="c176 c025 c031 c271 c092 c035"
                                >
                                    <div className="c046 c099 c062 c127">
                                        <span className="c052 c241 c251">
                                            {item.num}
                                        </span>
                                        <h3 className="c052 c232 c273 c267">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="c260 c256 c184">
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
    )
    }



export default Team