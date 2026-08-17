import React from'react';

export default function Contact() {
    
    return (

        <section id="contact" className="c016 c239 c198 c155">
            <div className="c123 c168 c194 c152 c065 c066 c119 c058">
                <div className="c115">
                    <div className="c260 c053 c265 c246 c273 c132">
                      <span className="c241">08 /</span> CONTACT US
                    </div>
                        <h2 className="c052 c236 c223 c273 c106 c133">TELL US <br/>
                            <span className="c241">ABOUT IT.</span>
                        </h2>
                        <p className="c252 c054 c248 c126">
                            Have a project in mind, a campaign to execute, or simply want to elevate your brand profile? Get in touch.
                        </p>
                </div>

                <div className="c117">
                    <form className="c230" onSubmit={e=>e.preventDefault()}>
                        <div className="c065 c066 c215 c063">
                            {[['YOUR NAME *','text'],['EMAIL ADDRESS *','email']].map(([l,t])=>
                            <div key={l}
                                ><label className="c260 c053 c273 c268 c020 c130 c247">{l}</label>
                                <input type={t} required className="c282 c018 c025 c028 c050 c196 c173 c054 c252 c271"/>
                            </div>)}
                            </div>
                            
                                <div className="c065 c066 c215 c063">
                                    <div>
                                        <label className="c260 c053 c273 c268 c020 c130 c247">
                                            BRAND / COMPANY
                                        </label>
                                        <input type="text" className="c282 c018 c025 c028 c050 c196 c173 c054 c252 c271"/>
                                    </div>
                                    
                                    <div>
                                        <label className="c260 c053 c273 c268 c020 c130 c247">
                                            SERVICES NEEDED
                                        </label>
                                        <input type="text" placeholder="PR, Strategy, Social..." className="c282 c018 c025 c028 c050 c196 c173 c054 c252 c271"/>
                                        </div>
                                        
                                </div>
                            
                                <div>
                                    <label className="c260 c053 c273 c268 c020 c130 c247">
                                        TELL US A LITTLE MORE
                                    </label>
                                    <textarea rows="4" className="c282 c018 c025 c028 c050 c196 c173 c054 c252 c271 c204">
                                    </textarea>
                                </div>
                            
                            <button type="submit" className="c017 c253 c052 c251 c268 c192 c200 c273 c090 c271">
                                SEND INQUIRY →
                            </button>
                        </form>
                    </div>
            </div>
        </section>
    )
}
