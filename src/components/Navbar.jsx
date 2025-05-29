import Popup from "@/components/Popup";
import { useState } from "react";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleBookNowClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const NavItem = (props) => {
    return (
      <li className="cta">
        <button className="text-gray-200 cursor-pointer hover-underline-animation">
          {props.name}
        </button>
      </li>
    );
  };

  return (
    <div>
      <div className="relative h-[100vh] w-full overflow-hidden ">
        <img
          src="/images/batsman.png"
          alt="No photo"
          className=" w-full h-full object-cover brightness-30"
        />
        {showPopup && <Popup onClose={handleClosePopup} />}
        <div className="absolute top-0">
          <h1 className="mt-5 ml-4 text-5xl font-bold text-gray-200 cursor-pointer">
            Crikfitone
          </h1>
        </div>

        <div className="absolute top-6 right-15 text-2xl">
          <nav className="">
            <ul className="flex space-x-7 tracking-tight font-normal text-2xl">
              <NavItem name="Home" />
              <NavItem name="About" />
              <NavItem name="Gallery" />
              <NavItem name="Events" />
              <NavItem name="Contact Us" />
            </ul>
          </nav>
        </div>
      </div>
      <div className="absolute top-[30%] right-[10%] flex flex-col text-6xl font-bold space-y-2 text-gray-300">
        <h1>PASSION</h1>
        <h1>ALWAYS</h1>
        <h1>DOMINATES</h1>
      </div>

      <div className="absolute top-[70%] right-[8%] flex flex-col text-3xl font-bold space-y-2 text-gray-300">
        <h1>Elite One-on-One Coaching</h1>
        <button
          className="mt-14 text-2xl font-thin w-fit mx-auto px-2 pb-1 border-gray-300 border-2 rounded-lg flex items-center justify-center hover:bg-gray-300  hover:text-black transition duration-300 cursor-pointer"
          onClick={handleBookNowClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
