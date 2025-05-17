import { FaPhone, FaUser, FaBars } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = ({ onBookNowClick }) => {
  return (
    <nav className="bg-[#1d241d] text-white px-8 py-4 flex items-center justify-between">
      <div className="text-3xl font-bold">Crossfit Today</div>

      <div className=" md:flex gap-8 items-center text-sm font-semibold">
        <a href="/about" className="hover:text-gray-300 text-xl">ABOUT</a>

        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-gray-300 text-xl">
            OFFERINGS
            <span>▼</span>
          </button>
          <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md p-2 hidden group-hover:block">
            <a href="#option1" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
            <a href="#option2" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
          </div>
        </div>

        <a href="/testimony" className="hover:text-gray-300 text-xl">TESTIMONIALS</a>
        <a href="/videos" className="hover:text-gray-300 text-xl">YOUTUBE</a>
      </div>

      <div className="flex gap-4 items-center text-sm font-semibold">
        <button onClick={onBookNowClick} className="text-white hover:text-gray-300 text-xl">BOOK NOW</button>
        <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition text-xl">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
