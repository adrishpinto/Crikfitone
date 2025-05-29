import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef, useEffect } from "react";

const Coaches = () => {
  return (
    <div className="p-8 mt-20">
      <h2 className="text-4xl font-extrabold text-cyan-900 mb-6 border-b-4 border-cyan-500 pb-2" >
        Our Coaches
      </h2>
      <p className="mb-10 text-lg text-gray-800 font-medium">
        Our coaching team consists of{" "}
        <span className="font-semibold text-cyan-600">
          experienced professionals
        </span>{" "}
        dedicated to nurturing talent and instilling a strong foundation in
        cricket. Each coach brings a{" "}
        <span className="font-semibold text-cyan-600">unique approach</span> and
        a shared commitment to developing well-rounded athletes.
      </p>

      <div className="space-y-12">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-8 border-cyan-400 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-cyan-800 mb-3">
            Unni William – Founder
          </h3>
          <p className="text-gray-700 leading-relaxed font-normal mb-4">
            A dedicated coach with{" "}
            <span className="font-semibold text-cyan-600">
              4+ years of coaching
            </span>{" "}
            experience and over{" "}
            <span className="font-semibold text-cyan-600">
              10+ years of playing
            </span>{" "}
            experience.{" "}
            <span className="block">
              He brings a player-first, development-focused approach to cricket
              coaching.
            </span>{" "}
            He emphasizes skill-building, fitness, and integrity, helping young
            athletes grow both on and off the field.
          </p>
          <p className="text-cyan-800 font-semibold mb-2">Certifications:</p>
          <ul className="list-disc list-inside text-gray-600 font-[300] space-y-1">
            <li>Level 1 Cricket Coaching</li>
            <li>
              ASCA Level 1 (Australia - Strength & Conditioning Association)
            </li>

            <li>COVID Safe Sport Coaches & Officials</li>
            <li>Sport Integrity Australia – Anti-Doping Fundamentals</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-8 border-cyan-400 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-cyan-700 mb-3">
            Tasleem Rasool – Cricket Coach
          </h3>
          <p className="text-gray-700 leading-relaxed font-normal ">
            A passionate cricket coach with{" "}
            <span className="font-semibold text-cyan-600">
              10+ years of experience
            </span>{" "}
            in developing young players (U12, U14, U16, U-19 & U23).
          </p>
          <p className="text-gray-700 leading-relaxed font-normal mb-4">
            Known for structured training, discipline, and a strong focus on
            skill and character building.
          </p>
          <p className="text-cyan-700 font-semibold mb-2">Certifications:</p>
          <ul className="list-disc list-inside text-gray-600 font-[300] space-y-1">
            <li>KSCA Level O & A Cricket Coaching</li>
            <li>B.A. in Physical Education (Cricket Specialization)</li>
            <li>Bachelor of Physical Education </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-8 border-cyan-400 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-cyan-700 mb-3">
            Dishanth Naik – Yoga Instructor
          </h3>
          <p className="text-gray-700 leading-relaxed font-normal ">
            A passionate yoga instructor with{" "}
            <span className="font-semibold text-cyan-600">
              5+ years of experience
            </span>{" "}
            {/* in developing young players (U12, U14, U16, U-19 & U23). */}
          </p>
          <p className="text-gray-700 leading-relaxed font-normal mb-4">
            Certified and experienced Yoga professional specializing in Kriyas, Asanas, Pranayamas, Bandhas, and Mudras. Adept at training children, adults, and seniors with tailored practices to suit each age group. Gold medallist in state-level Yogasana competitions and national-level participant. Actively involved in national and international yoga seminars.
          </p>
          <p className="text-cyan-700 font-semibold mb-2">Certifications:</p>
          <ul className="list-disc list-inside text-gray-600 font-[300] space-y-1">
            <li>M.Sc. in Yogic Science</li>
            <li>YIC – S-VYASA (2020)</li>
            <li>B.Com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
