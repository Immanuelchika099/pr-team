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
    
    return 
        <div className="bg-[#E50914] text-white py-4 overflow-hidden border-y border-[#E50914]">
            <div className="animate-marquee whitespace-nowrap flex items-center">
                {[...items,...items,...items,...items].map((item,i)=>
                
                <div key={i}className="flex items-center mx-6">
                    <span className="font-anton text-2xl sm:text-3xl tracking-wider uppercase">{item}</span>
                    <span className="ml-12 text-white/60 text-xl">•</span>
                </div>)}
            </div>
        </div>
    }


export default Marquee