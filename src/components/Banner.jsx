import Popup from "@/components/Popup";
import { useState } from "react";

const Banner = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handleBookNowClick = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return (  
        <div>
            {/* <div className="absolute top-[30%] right-[10%] flex flex-col text-6xl font-bold space-y-2 text-gray-300">
                <h1>PASSION</h1>
                <h1>ALWAYS</h1>
                <h1>DOMINATES</h1>
            </div> */}
            {showPopup && <Popup onClose={handleClosePopup} />}
            <div className="absolute top-[70%] right-[45%] flex flex-col text-3xl font-bold space-y-2 text-gray-300">
                {/* <h1>Elite One-on-One Coaching</h1> */}
                <button
                className="mt-14 text-2xl font-thin w-fit mx-auto px-2 pb-1 border-gray-300 border-2 rounded-lg flex items-center justify-center hover:bg-gray-300  hover:text-black transition duration-300 cursor-pointer"
                onClick={handleBookNowClick}
                >
                Book Now
                </button>
            </div>
        </div>
    );
}
 
export default Banner;