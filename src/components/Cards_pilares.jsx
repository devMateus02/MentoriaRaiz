import React from "react";

 function CardPilares(props){
    return(
        <>
           <div data-aos={props.effect} data-aos-delay={props.delay} className="flex flex-col items-start sm:w-[420px] sm:h-[380px] p-3 pb-6 sm:p-2 bg-gradient-to-br from-[#300202] via-[#530707] to-[#300202]  border-1 border-[rgb(254,195,0,50%)] rounded-3xl pl-3">
             <h3 className="text-[20px] sm:text-2xl font-semibold text-left mt-4 mb-4">{props.name}</h3>
             <p className="text-left text-[#B8B8B8]">{props.text}</p>
           </div>
        </>
    )
}
 
export default CardPilares