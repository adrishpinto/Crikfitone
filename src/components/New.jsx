import Image from "next/image";
import Navbar from "./Navbar";
import Learning from "./Learning";
import Coaches from "./Coaches";
import Contact from "./Contact";


const New = () => {

    return ( 
        <div>
            <Navbar/>
            <Learning/>
            <Coaches/>
            <Contact/>
        </div>
        
    );
}
 
export default New;