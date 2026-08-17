import React from 'react';


function Marquee(){
    const items=
    [
        'PUBLIC RELATIONS',
        'SOCIAL MEDIA',
        'CONTENT CREATION',
        'BRAND STRATEGY',
        'CAMPAIGNS',
        'INFLUENCER ACTIVATION'
    ];
    
    return (

        <div className="c015 c253 c200 c174 c033 c024">
            <div className="c010 c283 c046 c099">
                {[...items,...items,...items,...items].map((item,i)=>
                
                <div key={i}className="c046 c099 c167">
                    <span className="c052 c232 c219 c268 c273">{item}</span>
                    <span className="c164 c256 c259">•</span>
                </div>)}
            </div>
        </div>
    )
    }


export default Marquee