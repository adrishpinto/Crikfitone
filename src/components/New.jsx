import Image from "next/image";
import Learning from "./Learning";
import Coaches from "./Coaches";
import Contact from "./Contact";

const New = () => {
    return ( 
        <div>
            <div className="relative h-[100vh] w-full overflow-hidden ">
                <img src="/images/batsman.jpg" alt="No photo"
                className=" w-full h-full object-cover brightness-25"
            />
                <div className="absolute top-0">
                    <h1 className="mt-5 ml-4 text-5xl font-bold text-gray-400 cursor-pointer">Crickfitone</h1>
                </div>

                <div className="absolute top-6 right-15 text-2xl">
                    <nav className="">
                        <ul className="flex space-x-7">
                            <li className="text-gray-400 cursor-pointer hover:border-b-4 border-red-400 ">Home</li>
                            <li className="text-gray-400 cursor-pointer hover:border-b-4 border-red-400 ">About</li>
                            <li className="text-gray-400 cursor-pointer hover:border-b-4 border-red-400 ">Instagram</li>
                            <li className="text-gray-400 cursor-pointer hover:border-b-4 border-red-400 ">Instagram</li>
                            <li className="text-gray-400 cursor-pointer hover:border-b-4 border-red-400 ">Contact Us</li>
                        </ul>
                    </nav>
                </div>
                
                <div className="absolute bottotop-1 text-6xl space-x-6 -full">
                   <h1 className="ml-[200px] font-bold text-white">PASSION ALWAYS DOMINATES</h1>
                </div>
                
            </div>
            <div className="absolute top-[30%] right-[10%] flex flex-col text-6xl font-bold space-y-2">
                <h1>PASSION</h1>
                <h1>ALWAYS</h1>
                <h1>DOMINATES</h1>
                <button className="mt-5 text-3xl font-semibold border border-black w-fit mx-auto px-2 py-1 rounded-2xl hover:bg-gray-600 hover:border-3">Book Now</button>
            </div>  
            <Learning/>
            <Coaches/>
            <Contact/>
        </div>
        
    );
}
 
export default New;