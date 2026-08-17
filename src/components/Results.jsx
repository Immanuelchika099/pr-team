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
    return (

        <section className="c016 c239 c198 c154">
            <div className="c123 c168 c194 c152">
                <div className="c260 c053 c265 c246 c273 c129">
                  <span className="c241">04 /</span>
                    RESULTS THAT SPEAK
                </div>
                
                <div className="c065 c066 c145 c057 c038 c140 c139 c036">
                    {
                        stats.map((s,i)=>
                        <motion.div
                            key={s.id}
                            initial={{opacity:0,y:20}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{once:true}} 
                            transition={{duration:.6,delay:i*.2}}
                            className="c191 c151 c153 c044">
                                <div className="c052 c237 c224 c122 c241 c130">
                                    {s.number}
                                </div>
                                
                                <div className="c052 c232 c273 c268 c130">
                                    {s.label}
                                </div>
                                
                                <p className="c260 c054 c248">
                                    {s.sub}
                                </p>
                        </motion.div> )
                    }
                </div>
            </div>
        </section>
    )
    }



export default Results