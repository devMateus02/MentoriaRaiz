import React from "react";
import "./Home.css"
import CardPilares from "../components/Cards_pilares.jsx";
import CardsMenores from "../components/CardsMenores.jsx";
import Footer from "../components/Footer.jsx";
import Accordion from "../components/Acordeon.jsx";
import { HashLink as Link } from 'react-router-hash-link';
export default function Home() {
  return (
    <>
      <div className="w-[100%] overflow-x-hidden">
        <header className="relative hero-banner bg-gradient-to-bl from-[#350e0e] via-[#630303] to-[#350e0e] py-20 md:py-32 min-h-[100vh] p-[0px_10px]">
        <div className="max-w-[100%] flex flex-col-reverse sm:flex-row justify-around flex-wrap sm:flex-nowrap
         items-center gap-[2em] sm:gap-[8em]">
          <div className="text-center sm:text-left">
            <h1 data-aos='fade-right' data-aos-delay='200'  className=" text-2xl font-semibold text-center sm:text-left sm:text-5xl sm:w-[22ch] leading-[1.6em]">
              Empreender com{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                verdade
              </span>{" "}
              não é utopia
            </h1>
            <p data-aos='fade-right' data-aos-delay='250'  className="mt-2 mb-2 text-[18px] text text-gray-200 font-semibold">
              É raiz, é realidade — e é possível.
            </p>
            <p data-aos='fade-right' data-aos-delay='300' className="mb-8 text-[12px] sm:text-lg text-gray-300">
              Mentoria com Thalyta Eloah
            </p>

            <Link data-aos='fade-right' data-aos-delay='350'
               smooth to="/#chamado"
              className="glow-button relative inline-flex items-center gap-4 px-5 py-2 text-white text-[16px] sm:text-[18px] font-medium  transition-all duration-500 ease-in-out hover:bg-yellow-600 active:bg-yellow-600 rounded-md overflow-hidden"
            >
              <span>QUERO PARTICIPAR</span>
              <img 
                className="w-[40px]"
                src="Right_branco.png"
                alt="seta para a direita"
              />

              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
              <span className="line line-4"></span>
            </Link>
          </div>

          <img data-aos='fade-right' src="hero_banner.png" alt="mentora thalyta" className="  rounded-tl-[176px] rounded-tr-[76px] rounded-br-[176px] border-1 border-[#EFB107]"/>
        </div>
      </header>
       <section className="bg-[#350e0e] text-center flex flex-col items-center px-2.5 ">
            <h2 data-aos='fade-left'  className="font-semibold text-[22px] sm:text-3xl mt-8 mb-8 lg:w-[35ch]">
                Destravando a sua jornada empreendedora com estratégia, clareza, consistência, identidade e propósito!
            </h2>

           <div className="text-left text-[20px] Lg:w-[70vw] text-[#dddada] ">
             <p data-aos='fade-right'  className="lg:w-[75ch] mb-14">
                Empreender exige mais do que técnica. É sobre decisão, estratégia e coragem. A mentoria Raiz nasce como um espaço seguro, prático e profundo, para quem quer empreender com estratégia e propósito, sem perder a lucidez da vida real.
            </p>
            <p data-aos='fade-left'   className="lg:w-[75ch] mb-14">
                Aqui, vamos além do "como fazer". Vamos entender o "por que fazer", o "o que evitar" e principalmente: "como se sustentar no processo". Essa mentoria é para quem cansou de conteúdo raso, promessas milagrosas e fórmulas prontas. É para quem está pronto(a) para construir com identidade, estratégia e verdade.
            </p>
            <p data-aos='fade-right'  className="lg:w-[75ch] mb-14">
                Durante 4 meses, você estará ao lado de uma mentora que conhece a base do direito e a alma do empreendedorismo. Chegou a hora de dar estrutura ao que você já carrega no peito: sua vocação.
            </p>
           </div>
       </section>
       <section id="mentora" className=" flex flex-col sm:flex-row justify-around items-center sm:gap-[7em] pt-20 pb-9  bg-gradient-to-br from-[#350e0e] via-[#630303] to-[#350e0e]">
        <div className=" sm:w-[50%] px-2.5">
             <h3 data-aos='fade-right' data-aos-delay='150' className=" inline-block text-[#FEC300] text-[12px] p-[8px] mb-4 rounded-[15px] transition-all duration-100 ease-in-out border-1 border-[#FEC300] bg-[rgb(254,195,0,10%)] hover:bg-[rgb(254,195,0,25%)] focus:bg-[rgb(254,195,0,25%)]">Sobre a mentora</h3>

             <h2 data-aos='fade-right' data-aos-delay='20' className="text-4xl font-semibold mb-5">Thalyta Eloah</h2>

             <p data-aos='fade-right' data-aos-delay='80' className="mb-5 border-l-3 border-[#FEC300] sm:ml-3 p-3 text-[18px] text-[#FEC300] sm:w-[40ch]  " >
                "Raiz no Direito. Realidade no Empreendedorismo. Verdade na Caminhada."
             </p>

             <div className="text-left  sm:w-[70vw] text-[#ffffff] sm:ml-3">
                <p data-aos='fade-right' data-aos-delay='150' className="sm:w-[75ch] mb-5">  Advogada, professora, mentora, estrategista de negócios e apaixonada por transformação real. Thalyta Eloah construiu sua trajetória sem atalhos, enfrentando os desafios da advocacia empreendedora com coragem, foco e muito pé no chão.
                </p>

                <p data-aos='fade-right' data-aos-delay='250' className="sm:w-[75ch] mb-5">  Conhecida por sua abordagem direta, ética e profundamente humana, ela tem sido referência para advogados e empreendedores que não querem apenas "crescer rápido", mas crescer com estrutura, com senso de responsabilidade e com autenticidade.
                </p>

                <p data-aos='fade-right' data-aos-delay='350' className="sm:w-[75ch] mb-5">  Com experiência prática em diferentes áreas do Direito, forte atuação com empresas e empresários e uma escuta atenta às dores e dúvidas da nova geração, Thalyta desenvolveu a mentoria Raiz como resposta a uma necessidade urgente: ajudar empreendedores a construir negócios sustentáveis, conscientes e coerentes com seus valores.
                </p>

                <p data-aos='fade-right' data-aos-delay='450' className="sm:w-[75ch] mb-10">  Se você está buscando uma mentora que fala a língua da prática, que respeita seus processos e que tem coragem de te puxar pra cima — sem ilusão —, você está no lugar certo.
                </p>
             </div>


        </div>
        <img data-aos='fade-left' data-aos-delay='150' className="h-[70%] sm:h-[500px] px-3 " src="mentora.png" alt="" />

       </section>
       <section className="bg-[#4d0808] text-center pt-15 pb-15 px-2" id="comoFunciona">
          <h2 data-aos='fade-right' data-aos-delay='150' className=" text-2xl sm:text-4xl font-semibold mb-5 ">Como funciona a mentoria "Raiz"</h2>
          <p data-aos='fade-left' data-aos-delay='250' className="text-[#CCCCCC] mb-5">
               <span className="font-semibold"> Duração:</span> 3 meses – de 11 de setembro a 11 dezembro
          </p>
          <p data-aos='fade-right' data-aos-delay='350' className="text-[#CCCCCC] mb-5">
               <span className="font-semibold"> Formato:</span> Online, com encontros ao vivo em grupo e individuais.
          </p>
          <p data-aos='fade-left' data-aos-delay='450' className="text-[#9e9e9e] mb-5">
               A mentoria será dividida em três pilares fundamentais:
          </p>

          <div className="flex justify-center flex-wrap sm:flex-nowrap gap-5">
                <CardPilares effect='fade-right' delay='450' name='RAIZ – O que sustenta' text='Vamos trabalhar sua base: mentalidade empreendedora, posicionamento estratégico, organização financeira, e identidade profissional. Você vai aprender a construir um negócio que respeite seus limites, seus valores e sua verdade.'/>

                <CardPilares effect='fade-right' delay='550' name='REALIDADE – Verdades duras que sustentam trajetórias fortes.' text='Chega de romantizar o empreender. Vamos falar sobre medo, erros, comparações, crises, burnout e tudo aquilo que atravessa a jornada empreendedora, mas que ninguém ensina. Trataremos dessas dores em encontros individuais, falando apenas sobre o seu negócio e em grupo, trazendo exemplos práticos do que fazer e do que não fazer. A realidade também educa.'/>

                <CardPilares effect='fade-right' delay='650' name='AÇÃO – O que te faz crescer de verdade!' text='Você terá acompanhamento para estruturar sua atuação, precificar com consciência, melhorar seu atendimento, construir autoridade com propósito e montar estratégias reais para crescer com consistência.'/>
          </div>

          <div className="flex flex-wrap justify-around mt-8 gap-5">
              <CardsMenores effect='fade-left' delay='650' tiltle='Encontros individuais e virtuais, realizados quinzenalmente' text='com espaço para tratarmos casos e situações específicas do seu negócio'/>
              <CardsMenores effect='fade-left' delay='750'tiltle='Encontros em grupo e virtuais (ao vivo) realizados mensalmente ' text='com espaço para conteúdo e troca direta'/>
              <CardsMenores effect='fade-left' delay='850' tiltle='Grupo exclusivo para mentorados' text='com interação, apoio e acompanhamento da mentora'/>
              <CardsMenores effect='fade-left' delay='950' tiltle='Exercícios, desafios e metas' text='para manter o foco e gerar progresso'/>
          </div>
       </section>
       <section id='FAQ'className="flex flex-col justify-center items-center pb-10 bg-[#330808]">
          <h2 data-aos='fade-right' data-aos-delay='150' className="text-center sm:text-left text-3xl font-semibold m-10">FAQ - Perguntas Frequentes</h2>

             <Accordion effect='fade-left' delay='350' />

             <a data-aos='fade-right' data-aos-delay='150'  href="#" className="flex flex-row gap-2 items-center font-semibold mt-5"><img className="w-[40px]" src="WhatsApp.png" alt="icone do WhatsApp" /><span>Para mais duvidas, acesse aqui.</span></a>
       </section>
       <section  id="chamado" className="flex flex-col items-center justify-center text-black bg-gradient-to-bl from-[#CC8C05] via-[#FACC15] to-[#CA8A04] px-2">
                <h2  data-aos='fade-right' data-aos-delay='150' className="text-2xl sm:text-3xl sm:w-[45ch] text-center font-semibold mt-14 mb-10">Sua jornada empreendedora merece estrutura, propósito e coragem.</h2>
                <p  data-aos='fade-left' data-aos-delay='250' className="font-semibold text-[18px] sm:w-[55ch] text-center mb-9">Se você sente que está pronto(a) para viver uma nova fase — com direção, clareza e consistência —, a mentoria Raiz é pra você.</p>

                <div  data-aos='fade-right' data-aos-delay='350' className=" flex flex-col items-center bg-[linear-gradient(to_bottom_right,_#C18C08_0%,_#D8AB0F_68%)]  shadow-[0_5px_5px_rgb(0,0,0,.4)] p-4 w-[90%] sm:w-[85%] rounded-[40px] ">
                       
                    <div className=" flex flex-wrap gap-5 sm:gap-0 text-center items-center sm:p-6">

                    <div className="flex flex-row gap-1.5 items-center justify-center w-[350px]">
                        <img className="w-[25px]" src="Box_Important.png" alt="importante"/>
                        <p className="font-medium w-[250px]">Vagas limitadas para garantir proximidade e qualidade no acompanhamento.</p>
                    </div>

                    <div className="flex flex-row gap-1.5 items-center justify-center w-[350px]">
                        <img className="w-[25px]" src="Planner.png" alt="Data de início"/>
                        <p className="font-medium">Início: 11 de setembro</p>
                    </div>

                    <div className="flex flex-row gap-1.5 items-center justify-center w-[350px]">
                        <img className="w-[25px]" src="Video_Call.png" alt="formato online"/>
                        <p className="font-medium">Formato 100% online</p>
                    </div>

                    </div>
                        <p className="text-center font-medium mt-4">
                           clique no botão abaixo e garanta a sua vaga
                        </p>

                        <img className="arrow h-[30px] mt-6 mb-6" src="Arrow_bottom.png" alt="seta para baixo" />
                </div>

                <Link  data-aos='fade-left' data-aos-delay='350' className="text-[20px] text-[#CC8C05] font-semibold p-5 bg-black mt-10 mb-10 rounded-[10px]" smooth to={'/prechekout'}>QUERO PARTICIPAR</Link>
       </section>
       
       <Footer/>

      </div>
    </>
  );
}
