import Image from "next/image";
import Navbar from "./Navbar";
import Learning from "./Learning";
import Coaches from "./Coaches";
import Contact from "./Contact";
import WhatsAppButton from "./WhatsAppButton";

const Main = () => {
  return (
    <div className="">
        <WhatsAppButton/>
      <Navbar />
      <div className="w-[90%] mx-auto">
        <Learning />
        <Coaches />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
