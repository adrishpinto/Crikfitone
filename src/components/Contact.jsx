import { MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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
                <h1 className='font-semibold text-xl ml-2'>CONTACT US</h1>
                <div className='flex flex-col-2'>
                    <MapPinIcon className="h-16 w-6" />
                    <div className='w-full p-4'>
                        <div>
                            <h1>Address Information</h1>
                            <p className='text-sm'>123 Main Street, City, Country</p>
                        </div>
                        <div className='mt-10'>
                            <h1 className='w-full'>Phone Number</h1>
                            <p className='text-sm'>+123 456 7890</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="">
                <h1 className='font-semibold text-xl'>LEAVE A MESSAGE</h1>
                <div className='py-4 '>
                    <div className='flex mr-2'>
                        <div className="flex flex-col" >
                            <div className='flex'>
                                <input type="text"
                                    placeholder='Name'
                                    className='border px-2 py-1 rounded outline-none hover:border-blue-400 focus:border-blue-700 focus:bg-slate-50 '
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                    <select
                                        name="countryCode"
                                        className="border rounded-l px-2 py-1 ml-4 outline-none hover:border-blue-400 focus:border-blue-700 focus:bg-slate-50"
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                    >
                                        <option value="+91">+91 India</option>
                                        <option value="+1">+1 USA</option>
                                        <option value="+44">+44 UK</option>
                                    </select>
                                    <input type="text"
                                        placeholder='Phone Number'
                                        className='border  px-2 py-1 rounded-r w-full outline-none hover:border-blue-400 focus:border-blue-700 focus:bg-slate-50'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />     
                            </div>
                                <div className='py-2'>
                                <textarea name="" id="" 
                                    placeholder='Your message ' 
                                    className='border rounded w-full mt-4 px-2 py-1 outline-none hover:border-blue-400 focus:border-blue-700 focus:bg-slate-50'
                                    value={message}
                                    onChange={(e)=>{setMessage(e.target.value)}} >
                                </textarea><br />
                                <button 
                                onClick={handleSubmit}
                                className='border-1 px-3 rounded-lg mt-3 hover:bg-black hover:text-white cursor-pointer transition duration-300 '>
                                Send</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}
 
export default Contact;
