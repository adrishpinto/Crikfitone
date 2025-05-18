import React from 'react';
import Image from 'next/image';

export default function Poster() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <img
        src="/images/cricket.jpg"
        alt="Crossfit Banner"
        className="absolute inset-0 w-full h-full object-cover brightness-30"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="mt-39 text-3xl md:text-6xl  tracking-widest">CRIKFITONE</h1>
        <p className="mt-12 text-4xl w-[1200px] tracking-widest leading-3rem">
          Cricket Specific Training | Elite Human Performance | Personalised Program | Online
        </p>
        <button className="mt-22 px-3 py-2 text-sm md:text-base font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
