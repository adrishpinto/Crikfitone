import React, { useState } from 'react';
import Image from 'next/image';


export default function Coach() {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4 mt-5">
      
      {/* Left Image */}
      <div className="flex-shrink-0 shadow-lg border-[3px] border-[#1d241d] rounded-lg overflow-hidden">
        <Image
          src="/images/coach.jpg"
          className="w-72 h-80 object-cover" width={72} height={80} />
        {/* <img
          src={CoachImg} // Replace with your image path
          alt="No picture"
          className="w-72 h-80 object-cover"
        /> */}
      </div>

      {/* Right Content */}
      <div className="flex-1 text-gray-800">
        <h2 className="text-3xl font-bold">
          About <span className="text-[#1d241d] font-extrabold">Yatharth Singh</span>
        </h2>

        <p className="mt-2 border-b border-red-500 pb-2 text-sm font-semibold text-gray-700">
          Cricket Specific Training | Elite Human Performance | Personalised Program | Online
        </p>

        <p className={`mt-4 text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
          Yatharth Singh is a Strength & Conditioning Accredited Coach from Australian Strength & Conditioning Association
          <strong> (ASCA Level 1 Human Performance Coach)</strong>, providing the most intense and complete athletic experience.
          Everything you need to unlock your maximum potential. He is also a professional cricketer. He has represented Delhi (DDCA)
          Mens U-25 Team for One Day Tournament and has been a member of the India Under 19 Cricket Academy.
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm text-gray-600 hover:text-black focus:outline-none"
        >
          {expanded ? 'Read Less ▲' : 'Read More ▼'}
        </button>

        {/* <div className="mt-6 flex gap-6 text-xl text-gray-700">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-pink-500" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-red-600" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-sky-500" />
          </a>
          <a href="#" aria-label="Website">
            <FaGlobe className="text-green-600" />
          </a>
        </div> */}
      </div>
    </div>
  );
}
