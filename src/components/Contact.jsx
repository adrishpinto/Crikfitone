import { useState } from "react";
import { FaInstagram , FaWhatsapp , FaEnvelope , FaPhone} from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phoneNumber,
          message,
        }),
      });
      if (res.ok) {
        alert("Message sent!");
        setName("");
        setPhoneNumber("");
        setMessage("");
        onClose();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <div className="my-10 flex justify-between mx-auto w-[90%]">
      <div className="">
        <h1 className="font-semibold text-xl  ">CONTACT US</h1>
        <div className="flex flex-col-2 ml-2">
          <div className="w-full py-4">
            <div className="mt-2">
              <div className="flex items-center ">
                <MdPhone className="transform scale-y-[-1]" size={20} />  
                <h1 className="w-full ml-2 ">Phone Number</h1>
              </div> 
              <a className="text-sm block mt-2 mx-2">+ 123 456 7890</a>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-500" />
                <h1 className="w-full ml-2 ">Mail</h1>
              </div> 
              <a className="text-sm block mt-2 mx-2 cursor-pointer"
                href="mailto:ujjwaltiga1234@gmail.com"
              >xyz@gmail.com</a>
            </div>
            <div className="mt-4">
              <div className="flex items-center mt-2">
                <FaWhatsapp className="text-green-500" />
                <h1 className="w-full ml-2">WhatsApp</h1>
              </div> 
              <a className="text-sm block mt-2 mx-2 text-green-600"
              href="https://wa.me/7406467941">Coach Name</a>
            </div>
            <div className="mt-4">
              <div className="flex items-center mt-2">
                <FaInstagram className="text-pink-600" />
                <h1 className="w-full ml-2">Instagram</h1>
              </div> 
              <a className="text-sm block mt-2 mx-2 text-pink-500" 
              href="https://www.instagram.com/yourusername " >@Crilfitone</a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold text-xl">LEAVE A MESSAGE</h1>
        <div className="py-4 ">
          <div className="flex mr-2">
            <div className="flex flex-col">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Name"
                  className="border px-2 py-1 rounded outline-none hover:border-blue-400 focus:border-blue-700 focus:bg-slate-50 "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <select
                  name="countryCode"
                  className="border border-r-0 rounded-l px-2 py-1 ml-4 w-fit outline-none hover:border-blue-400 focus:border-blue-700 focus:bg-slate-50"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border px-2 py-1 rounded-r w-full outline-none hover:border-blue-400 focus:border-blue-700 focus:bg-slate-50"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="py-2">
                <textarea
                  name=""
                  id=""
                  placeholder="Your message "
                  rows={8}
                  draggable="false"
                  className="border rounded resize-none w-full mt-4 px-2 py-1 outline-none hover:border-blue-400 focus:border-blue-700 focus:bg-slate-50"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                <br />
                <button
                  onClick={handleSubmit}
                  className="text-white mt-5 bg-cyan-400 hover:bg-blue-700 px-4 pb-1 rounded-lg transition duration-300 cursor-pointer text-[18px]"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
