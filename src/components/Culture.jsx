import React from 'react';
const galleryImages = ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'];


function Culture() { 
    return 
    <section className="bg-[#050A12] text-white py-24 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-8">
              <span className="text-[#E50914]">06 /</span> CULTURE
            </div>
              <h2 className="font-anton text-4xl sm:text-5xl uppercase mb-12">
                LATEST FROM THE <span className="text-[#E50914]">STUDIO.</span>
              </h2>
              
              <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-6 md:pb-0">
                {galleryImages.map((img, i) =>
                    <div key={i} className="min-w-[240px] md:min-w-0 h-80 overflow-hidden border border-white/10 flex-shrink-0 group relative">
                        <img src={img} alt={`Culture ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                    </div>
                )}
            </div>
        </div>
    </section>
}


export default Culture