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
        
        return 
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled?'bg-[#050A12]/90 backdrop-blur-md border-white/10 py-4':'bg-transparent border-white/5 py-6'}`}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-1 font-anton text-2xl tracking-wider text-white">THE 
                        <span className="text-[#E50914]">NOISE</span> CLUB.
                    </a>
                    
                    <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-widest text-white/80">
                        {
                            navLinks.map(l=>
                                <a
                                    key={l.name}
                                    href={l.href}
                                    className="hover:text-[#E50914] transition-colors duration-200"
                                >
                                    {l.name}
                                </a>)
                        }
                    </div>
                    
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#contact" className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest bg-[#E50914] text-white px-5 py-2.5 uppercase transition-transform duration-200 hover:bg-white hover:text-black">LET'S TALK
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
                        </a>
                    </div>
                    
                    <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white focus:outline-none" aria-label="Toggle Menu">
                        {mobileMenuOpen?<X className="w-7 h-7"/>:
                        <Menu className="w-7 h-7"/>}
                    </button>
                </div>
                
                <AnimatePresence>
                    {
                        mobileMenuOpen &&
                            <motion.div
                                initial={{opacity:0,y:-20}}
                                animate={{opacity:1,y:0}}
                                exit={{opacity:0,y:-20}}
                                className="fixed inset-0 top-[73px] bg-[#050A12] z-40 px-6 py-12 flex flex-col justify-between md:hidden border-t border-white/10">
                                    <div className="flex flex-col space-y-6">
                                        {
                                            navLinks.map(l=>
                                                <a
                                                    key={l.name}
                                                    href={l.href}
                                                    onClick={()=>setMobileMenuOpen(false)}
                                                    className="font-anton text-4xl text-white hover:text-[#E50914] transition-colors"
                                                >
                                                    {l.name}
                                                </a> )
                                        }
                                        
                                    </div>
                                    
                                    <a href="#contact" onClick={()=>setMobileMenuOpen(false)} className="w-full text-center bg-[#E50914] text-white font-anton text-xl py-4 uppercase tracking-wider">
                                        START A PROJECT
                                    </a>
                            </motion.div>
                        }
                    </AnimatePresence>
            </nav>
        }


export default Navbar