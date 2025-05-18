import { FaPhone, FaUser, FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = ({ onBookNowClick }) => {
  return (
    <nav className="bg-gray-950 text-white px-8 py-4 flex items-center justify-between sticky top-0 z-[300]">
      <div className="text-3xl font-bold tracking-wide">CRIKFITONE</div>

      <div className=" md:flex gap-8 items-center text-sm font-semibold">
        <a href="/about" className="hover:text-gray-300 text-lg">
          ABOUT
        </a>

        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-gray-300 text-lg">
            OFFERINGS
            <span>▼</span>
          </button>
          <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md p-2 hidden group-hover:block">
            <a href="#option1" className="block px-4 py-2 hover:bg-gray-100">
              Option 1
            </a>
            <a href="#option2" className="block px-4 py-2 hover:bg-gray-100">
              Option 2
            </a>
          </div>
        </div>

        <a href="/testimony" className="hover:text-gray-300 text-lg">
          TESTIMONIALS
        </a>
        <a href="/videos" className="hover:text-gray-300 text-lg">
          YOUTUBE
        </a>
      </div>

      <div className="flex gap-4 items-center text-sm font-semibold ">
        <button
          onClick={onBookNowClick}
          className="text-white  text-[16px] py-1 mr-4 hover:bg-white font-semibold hover:text-black border-2 rounded-lg px-3 border-white cursor-pointer transition duration-500"
        >
          BOOK NOW
        </button>
        <button className="border border-white px-4 py-1 cursor-pointer rounded-full hover:bg-white hover:text-black transition text-lg">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
