import Image from "next/image";
import Learning from "./Learning";
import Coaches from "./Coaches";
import Contact from "./Contact";
import Popup from '@/components/Popup';
import { useState } from "react";

const New = () => {

    const [showPopup, setShowPopup] = useState(false);
    
    const handleBookNowClick = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return ( 
        <div>
            <div className="relative h-[100vh] w-full overflow-hidden ">
                <img src="/images/batsman.png" alt="No photo"
                className=" w-full h-full object-cover brightness-30"
            />
                {showPopup && <Popup onClose={handleClosePopup} />}
                <div className="absolute top-0">
                    <h1 className="mt-5 ml-4 text-5xl font-bold text-gray-200 cursor-pointer">Crickfitone</h1>
                </div>

                <div className="absolute top-6 right-15 text-2xl">
                    <nav className="">
                        <ul className="flex space-x-7">
                            <li className="text-gray-200 cursor-pointer hover:border-b-3 border-red-800 ">Home</li>
                            <li className="text-gray-200 cursor-pointer hover:border-b-4 border-red-800 ">About</li>
                            <li className="text-gray-200 cursor-pointer hover:border-b-4 border-red-800 ">Instagram</li>
                            <li className="text-gray-200 cursor-pointer hover:border-b-4 border-red-800 ">Testimony</li>
                            <li className="text-gray-200 cursor-pointer hover:border-b-4 border-red-800 ">Contact Us</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="absolute top-[30%] right-[10%] flex flex-col text-6xl font-bold space-y-2 text-gray-300">
                <h1>PASSION</h1>
                <h1>ALWAYS</h1>
                <h1>DOMINATES</h1>
                <button 
                className="mt-5 text-2xl font-semibold w-fit mx-auto px-2 pb-1 border-white border-2 rounded-lg flex items-center justify-center hover:bg-gray-300  hover:text-black transition duration-300 cursor-pointer"
                onClick={handleBookNowClick}>Book Now</button>
            </div>  
            <Learning/>
            <Coaches/>
            <Contact/>
        </div>
        
    );
}
 
export default New;