import React from "react"


export default function Footer(){
      return(
        <>
        <footer className="bg-[#330808] flex flex-col items-center gap-4 p-5  border-t border-yellow-600/20">
               <img className="w-[100px]" src="logo_nav.png" alt="logo mentoria raiz" />
               <p className="font-medium" >
                Empreender com verdade, estratégia e propósito
                </p>
                <p className=" text-[12px] font-light">© 2025 Mentoria Raiz - Thalyta Eloah. Todos os direitos reservados.</p>
                <p className=" text-[12px]" >Desenvolvido por <a  className="font-semibold underline" href="https://mateuscelestinoportifolio.vercel.app/">Mateus celestino</a></p>
        </footer>
        </>
      )
}