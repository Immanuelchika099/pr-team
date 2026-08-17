import React from 'react';
const galleryImages = ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'];


function Culture() { 
    return (

        <section className="c013 c253 c198 c029 c031">
            <div className="c123 c168 c194 c152">
                <div className="c260 c053 c265 c255 c273 c134">
                <span className="c241">06 /</span> CULTURE
                </div>
                <h2 className="c052 c234 c221 c273 c128">
                    LATEST FROM THE <span className="c241">STUDIO.</span>
                </h2>
                
                <div className="c046 c143 c146 c061 c175 c183 c150">
                    {galleryImages.map((img, i) =>
                        <div key={i} className="c163 c149 c085 c174 c021 c031 c048 group c203">
                            <img src={img} alt={`Culture ${i}`} className="c282 c088 c170 c064 c292 c070 c270 c041" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}


export default Culture