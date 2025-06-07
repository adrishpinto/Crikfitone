import Image from "next/image";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Learning from "./Learning";
import Coaches from "./Coaches";
import Contact from "./ContactForm";
import WhatsAppButton from "./WhatsAppButton";
import TextAnimation from "./TextAnimation";

const Main = () => {
  return (
    <div className="">
      <Image
        src="/images/batsman.png"
        alt="Background Image"
        className="w-full h-screen object-cover brightness-30 mt-20"
        width={1920}
        height={1080}
      />
      <WhatsAppButton />
      <Navbar />
      <Banner />
      <div className="w-[90%] mx-auto">
        <TextAnimation />
        <Learning />
        <Coaches />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
