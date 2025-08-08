import React from "react";

 function CardsMenores(props) {
  return (
    <>
      <div data-aos={props.effect} data-aos-delay={props.delay} className="flex flex-row items-start justify-center gap-3 text-left w-[280px]">
          <img src="./Done.png" alt="feito" className="" />

        <div>
            <h4 className="text-[14px]">
          {props.tiltle}
        </h4>
        <p className="font-light text-[12px] mt-4 text-[#B8B8B8]">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default CardsMenores
