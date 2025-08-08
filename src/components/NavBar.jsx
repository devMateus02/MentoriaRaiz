import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css'

export default function Navbar(){

  const [openBtnmenu, setOpenBtnMenu] = useState(false)
    return(
        <>
          <nav className={`fixed flex items-center justify-around gap-[15em] top-0 z-[1000] w-full border-b border-yellow-600/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 ${openBtnmenu ? 'border-b-0' : 'borde-1'} `}>
           <div className="flex items-center justify-around gap-[12em] w-[95%] sm:justify-around sm:gap-[15em]">
             <Link to="/"><img className="w-[120px]" src="logo_nav.png" alt="mentoria Raiz"/></Link>
            <ul className=" hidden sm:gap-4  sm:flex ">
              <li><Link to="/">Home</Link></li>
              <li><Link smooth to="/#mentora">Mentora</Link></li>
              <li><Link smooth to="/#comoFunciona">Como funciona</Link></li>
              <li><Link smooth to="/#FAQ">FQA</Link></li>
            </ul>
            <Link className="hidden transition-all duration-500 ease-in-out 
             bg-gradient-to-r from-yellow-700 to-yellow-500 
             text-[18px] font-semibold p-[10px] rounded-[20px] 
             hover:scale-105 focus:scale-105 hover:shadow-lg sm:inline-block "smooth to="/#chamado">QUERO PARTIPAR</Link>
             {/*botão mobile*/}
             <button onClick={()=>setOpenBtnMenu(!openBtnmenu)} className="sm:hidden transition-all duration-[5s] ease-in-out cursor-pointer w-6 h-6 text-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[25px] before:h-[5px] before:rounded-2xl before:border-1 before:border-white hover:before:bg-white active:before:bg-white  after:absolute after:content-[''] after:w-[25px] after:h-[5px] after:border-1 after:rounded-2xl after:top-[9.5px] after:left-0 hover:after:bg-white  "></button>
           {/*Menu mobile*/}  
          <ul className={`menu-mobile transition-all duration-300 ease-in-out fixed top-[-2px] left-0 z-[-10]  flex  flex-col items-center justify-center w-[100%]  bg-[#350e0e]  ${openBtnmenu ? 'translate-y-[71px] opacity-100 pointer-events-auto border-b-1 border-yellow-600/20' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                 <li><Link to="/" onClick={()=>setOpenBtnMenu(false)}>Home</Link></li>
              <li><Link smooth to="/#mentora" onClick={()=>setOpenBtnMenu(false)}>Mentora</Link></li>
              <li><Link smooth to="/#comoFunciona" onClick={()=>setOpenBtnMenu(false)}>Como funciona</Link></li>
              <li><Link smooth to="/#FAQ" onClick={()=>setOpenBtnMenu(false)}>FQA</Link></li>
          </ul>
           </div>
          </nav>
        </>
    )
}