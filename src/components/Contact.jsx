import React from'react';

export default function Contact() {
    
    return
        <section id="contact" className="bg-[#F3F3F1] text-[#050505] py-24 md:py-36">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5">
                    <div className="text-xs font-bold tracking-[0.2em] text-black/50 uppercase mb-4">
                      <span className="text-[#E50914]">08 /</span> CONTACT US
                    </div>
                        <h2 className="font-anton text-6xl sm:text-7xl uppercase leading-none mb-6">TELL US <br/>
                            <span className="text-[#E50914]">ABOUT IT.</span>
                        </h2>
                        <p className="text-sm font-manrope text-black/70 max-w-sm">
                            Have a project in mind, a campaign to execute, or simply want to elevate your brand profile? Get in touch.
                        </p>
                </div>

                <div className="lg:col-span-7">
                    <form className="space-y-8" onSubmit={e=>e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[['YOUR NAME *','text'],['EMAIL ADDRESS *','email']].map(([l,t])=>
                            <div key={l}
                                ><label className="text-xs font-bold uppercase tracking-wider block mb-2 text-black/60">{l}</label>
                                <input type={t} required className="w-full bg-transparent border-b border-black/20 focus:border-[#E50914] py-2 outline-none font-manrope text-sm transition-colors"/>
                            </div>)}
                            </div>
                            
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-black/60">
                                            BRAND / COMPANY
                                        </label>
                                        <input type="text" className="w-full bg-transparent border-b border-black/20 focus:border-[#E50914] py-2 outline-none font-manrope text-sm transition-colors"/>
                                    </div>
                                    
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-black/60">
                                            SERVICES NEEDED
                                        </label>
                                        <input type="text" placeholder="PR, Strategy, Social..." className="w-full bg-transparent border-b border-black/20 focus:border-[#E50914] py-2 outline-none font-manrope text-sm transition-colors"/>
                                        </div>
                                        
                                </div>
                            
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-black/60">
                                        TELL US A LITTLE MORE
                                    </label>
                                    <textarea rows="4" className="w-full bg-transparent border-b border-black/20 focus:border-[#E50914] py-2 outline-none font-manrope text-sm transition-colors resize-none">
                                    </textarea>
                                </div>
                            
                            <button type="submit" className="bg-black text-white font-anton text-lg tracking-wider px-10 py-4 uppercase hover:bg-[#E50914] transition-colors">
                                SEND INQUIRY →
                            </button>
                        </form>
                    </div>
            </div>
        </section>
}
