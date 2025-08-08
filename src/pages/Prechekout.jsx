import React, { useState } from "react";
import Footer from "../components/Footer"
export default function Precheckout() {
  const [openForm, setOpenForm] = useState(false);
  const [profissao, setProfissao] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [outraProfissao, setOutraProfissao] = useState("");

  return (
    <>
      {/* Página principal */}
      <main className="flex flex-col items-center pt-[18%] sm:pt-[0] bg-gradient-to-bl from-[#350e0e] via-[#630303] to-[#350e0e] min-h-screen text-white px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold mt-[8%] sm:w-[40ch] text-center">
          Parabéns por decidir investir em você e no seu futuro, empreendedor!!
        </h1>

        <p className="mt-7">
          Sua inscrição na{" "}
          <span className="text-[#CC8C05] font-medium">Mentoria Raiz</span> está
          quase completa.
        </p>

        <ul className="w-full pl-5 mt-12  text-left">
          <p className="mb-7">
            Preencha seus dados com atenção e finalize sua inscrição para
            garantir:
          </p>
          <li className="flex items-center gap-1.5 mb-2">
            <img className="w-[30px]" src="check.png" alt="" /> Encontros ao
            vivo quinzenais com Thalyta Eloah.
          </li>
          <li className="flex items-center gap-1.5 mb-2">
            <img className="w-[30px]" src="check.png" alt="" /> Acesso ao grupo
            exclusivo de mentorados(as).
          </li>
          <li className="flex items-center gap-1.5 mb-2">
            <img className="w-[30px]" src="check.png" alt="" /> Materiais
            práticos e exercícios de implementação.
          </li>
          <li className="flex items-center gap-1.5 mb-2">
            <img className="w-[30px]" src="check.png" alt="" /> Desafios mensais
            com foco em progresso real.
          </li>
          <li className="flex items-center gap-1.5 mb-2">
            <img className="w-[30px]" src="check.png" alt="" /> Uma jornada de 4
            meses de transformação, com profundidade, estratégia e identidade.
          </li>
        </ul>

        <p className="mt-6">
          Nos vemos do outro lado. É hora de construir com raiz e com verdade.
        </p>

        <div className="pro-scale scale-[.9] mt-16 border-1 border-yellow-600 p-8 rounded-[6px] font-light text-center">
          <p>
          <span className="font-semibold ">Promoção:</span> de <span className="font-medium line-through">R$ 3.597</span> para <span className="font-medium">2.997</span> para os <span className="text-[18px] font-medium">"5 primeiros inscritos"</span>
          </p>
          <p className="text-yellow-600 font-semibold text-[10px]"><span className="text-[12px]">Atenção:</span> promoção valida apenas para individual</p>
        </div>

        <button
          onClick={() => setOpenForm(true)}
          className="text-[18px] text-white font-semibold p-3 cursor-pointer bg-gradient-to-bl from-[#8a6c21] to-[#886e08] mt-10 mb-10 rounded-[10px]"
        >
          INSCREVA-SE
        </button>
      </main>
       <Footer/>

      {/* MODAL - sempre no DOM */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/75 bg-opacity-70 transition-opacity duration-500 ${
          openForm ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white text-black rounded-lg p-8 w-[90%] max-w-md relative transform transition-all duration-500 ${
            openForm ? "scale-100" : "scale-95"
          }`}
        >
          <button
            onClick={() => setOpenForm(false)}
            className="absolute top-2 right-3 text-gray-700 text-2xl font-bold hover:text-red-600 cursor-pointer"
          >
            &times;
          </button>

          <h2 className="text-xl font-semibold mb-4">Preencha seus dados:</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full border border-gray-600 placeholder-gray-600 rounded p-2"
              required
            />

            <input
              type="text"
              placeholder="Idade"
              className="w-full border border-gray-600 placeholder-gray-600 rounded p-2"
              required
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-gray-600 placeholder-gray-600 rounded p-2"
              required
            />

            <input
              type="text"
              placeholder="WhatsApp com DDD"
              className="w-full border border-gray-600 placeholder-gray-600 rounded p-2"
              required
            />

            <select
              value={profissao}
              onChange={(e) => setProfissao(e.target.value)}
              className="w-full border border-gray-600 placeholder-gray-600 rounded p-2"
              required
            >
              <option value="">Selecione sua profissão</option>
              <option value="advogado">Advogado(a)</option>
              <option value="designer">Designer</option>
              <option value="psicologo">Psicólogo(a)</option>
              <option value="empreendedor">Empresário(a)</option>
              <option value="outro">Outro</option>
            </select>

            {profissao === "empreendedor" && (
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full border border-gray-600 placeholder-gray-600 rounded p-2"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            )}

            {profissao === "outro" && (
              <input
                type="text"
                placeholder="Digite sua profissão"
                className="w-full border border-gray-600 placeholder-gray-600 rounded p-2"
                value={outraProfissao}
                onChange={(e) => setOutraProfissao(e.target.value)}
              />
            )}

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 cursor-pointer"
            >
              Finalizar inscrição
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
