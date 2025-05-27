import { MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
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
          email,
          message,
        }),
      });
      if (res.ok) {
        alert("Message sent!");
        setName("");
        setEmail("");
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
    <div className="my-10 flex mx-26">
      <div className="w-1/2">
        <h1 className="font-semibold text-xl ml-2">CONTACT US</h1>
        <div className="flex flex-col-2">
          <MapPinIcon className="h-16 w-6" />
          <div className="w-full p-4">
            <div>
              <h1>Address Information</h1>
              <p className="text-sm">123 Main Street, City, Country</p>
            </div>
            <div className="mt-10">
              <h1 className="w-full">Phone Number</h1>
              <p className="text-sm">+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="font-semibold text-xl">LEAVE A MESSAGE</h1>
        <div className="py-4 ">
          <div className="flex flex-col mr-2">
            <div className="flex ">
              <input
                type="text"
                placeholder="Name"
                className="border px-2 py-2 rounded focus:border-blue-400 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border px-2 py-2 rounded ml-4 w-full focus:border-blue-400 outline-none"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="py-2 ">
              <textarea
                name=""
                id=""
                placeholder="Your message "
                className="border rounded w-full mt-4 p-2 focus:border-blue-400 outline-none"
                value={message}
                rows={6}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <br />
              <button
                onClick={handleSubmit}
                className="border-2 px-5 py-1 rounded-lg text-white bg-black mt-3 hover:bg-slate-700  cursor-pointer transition duration-300 "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
