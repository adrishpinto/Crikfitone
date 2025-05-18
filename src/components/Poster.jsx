import React from "react";

export default function Poster() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <img
        src="/images/cricket.jpg"
        alt="Crossfit Banner"
        className="relative w-full h-full object-cover brightness-30"
      />

      <div className="absolute top-[3%] left-[10%] z-10  text-white px-4 text-center">
        <div>
          <p className="mt-12 font-semibold text-left text-7xl tracking-wide leading-[3rem]">
            PASSION
          </p>
          <p className="mt-8 font-semibold text-left text-7xl tracking-wide leading-[3rem]">
            ALWAYS
          </p>
          <p className="mt-8 font-semibold text-blue-300 text-left text-7xl tracking-wide leading-[3rem]">
            DOMINATES
          </p>
        </div>
      </div>
      <div className="absolute top-[16%] right-[10%] z-10  text-white px-4 text-center">
        <p className="mt-12 font-[300] text-7xl tracking-wide leading-[3rem]  text-center">
          CRIKFITONE
        </p>
      </div>

      <div className="absolute bottom-[10%] flex flex-center items-center flex-col w-[90%] z-10 left-[5%] text-white px-4 text-center">
        <div>
          <p className="mt-12 font-semibold text-left text-3xl   tracking-wide leading-[3rem]">
            Cricket Specific Training | Elite Human Performance | Personalised
            Program
          </p>
        </div>
        <button className="mt-4 w-fit px-3 py-2 text-sm md:text-base font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
