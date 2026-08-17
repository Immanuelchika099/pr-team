import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {Menu,X,ArrowUpRight} from 'lucide-react';


function Navbar(){
    
    const[scrolled,setScrolled]=useState(false);
    const[mobileMenuOpen,setMobileMenuOpen]=useState(false);

    useEffect(()=>{
        const f=()=>setScrolled(window.scrollY>50);
        window.addEventListener('scroll',f);
            return()=>window.removeEventListener('scroll',f)
        },[]);
        
        const navLinks=
        [
            {name:'HOME',href:'#home'},
            {name:'ABOUT',href:'#about'},
            {name:'SERVICES',href:'#services'},
            {name:'WORK',href:'#work'},
            {name:'CONTACT',href:'#contact'}
        ];
        
        return (

            <nav className={`c045 c261 c109 c282 c291 c270 c040 c025 ${scrolled?'c014 c012 c031 c200':'c018 c032 c201'}`}>
                <div className="c123 c168 c194 c152 c046 c099 c102">
                    <a href="#home" className="c046 c099 c056 c052 c232 c268 c253">THE 
                        <span className="c241">NOISE</span> CLUB.
                    </a>
                    
                    <div className="c089 c141 c099 c225 c260 c055 c269 c258">
                        {
                            navLinks.map(l=>
                                <a
                                    key={l.name}
                                    href={l.href}
                                    className="c094 c271 c039"
                                >
                                    {l.name}
                                </a>)
                        }
                    </div>
                    
                    <div className="c089 c141 c099 c062">
                        <a href="#contact" className="group c097 c099 c059 c260 c053 c269 c015 c253 c193 c197 c273 c272 c039 c091 c095">LET'S TALK
                            <ArrowUpRight className="c276 c077 c272 c072 c067"/>
                        </a>
                    </div>
                    
                    <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className="c147 c253 c051" aria-label="Toggle Menu">
                        {mobileMenuOpen?<X className="c280 c082"/>:
                        <Menu className="c280 c082"/>}
                    </button>
                </div>
                
                <AnimatePresence>
                    {
                        mobileMenuOpen &&
                            <motion.div
                                initial={{opacity:0,y:-20}}
                                animate={{opacity:1,y:0}}
                                exit={{opacity:0,y:-20}}
                                className="c045 c098 c264 c013 c290 c194 c195 c046 c047 c102 c147 c029 c031">
                                    <div className="c046 c047 c229">
                                        {
                                            navLinks.map(l=>
                                                <a
                                                    key={l.name}
                                                    href={l.href}
                                                    onClick={()=>setMobileMenuOpen(false)}
                                                    className="c052 c234 c253 c094 c271"
                                                >
                                                    {l.name}
                                                </a> )
                                        }
                                        
                                    </div>
                                    
                                    <a href="#contact" onClick={()=>setMobileMenuOpen(false)} className="c282 c250 c015 c253 c052 c259 c200 c273 c268">
                                        START A PROJECT
                                    </a>
                            </motion.div>
                        }
                    </AnimatePresence>
            </nav>
        ) 
        }


export default Navbar