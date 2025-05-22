import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Popup from '@/components/Popup';

const Navbar = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleBookNowClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const [expanded, setExpanded] = useState(false);

  const router = useRouter();

  const handelNavHome = () => {
    router.push("/about");
  };

  return (
    <div>
      <nav className="bg-gray-950 text-white px-8 py-4 flex items-center justify-between sticky top-0 z-[300]">
        <div className="text-3xl font-bold tracking-wide cursor-pointer " onClick={handelNavHome}>CRIKFITONE</div>
        <div className=" md:flex gap-8 items-center text-sm font-semibold">
          <a href="/about" className="hover:text-gray-300 text-lg">
            ABOUT
          </a>
          <a href="/testimony" className="hover:text-gray-300 text-lg">
            INSTAGRAM
          </a>
          <a href="/testimony" className="hover:text-gray-300 text-lg">
            TESTIMONIALS
          </a>
          <a href="/videos" className="hover:text-gray-300 text-lg">
            CONTACT US
          </a>
        </div>
        <div className="flex gap-4 items-center text-sm font-semibold ">
          <button
            onClick={handleBookNowClick}
            className="text-white  text-[16px] py-1 mr-4 hover:bg-white font-semibold hover:text-black border-2 rounded-lg px-3 border-white cursor-pointer transition duration-500"
          >
            BOOK NOW
          </button>
          <button className="border border-white px-4 py-1 cursor-pointer rounded-full hover:bg-white hover:text-black text-lg transition duration-500">
            Login
          </button>
        </div>
      </nav>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <div className="relative h-[90vh] w-full overflow-hidden ">
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
               
    </div>
    
  );
};

export default Navbar;
