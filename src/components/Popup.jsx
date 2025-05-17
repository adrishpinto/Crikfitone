import React, { useState, useRef, useEffect } from 'react';

const Popup = ({ onClose }) => {
  const popupRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    countryCode: '+91',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Message sent!');
        onClose();
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred.');
    }
  };

  // Detect clicks outside the popup
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative"
      >
        <button
          className="absolute top-3 right-3 text-gray-500 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">Get in touch</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full border rounded p-2"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full border rounded p-2"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="font-semibold">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select
                name="countryCode"
                className="border rounded-l p-2"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+91">+91 India</option>
                <option value="+1">+1 USA</option>
                <option value="+44">+44 UK</option>
              </select>
              <input
                type="tel"
                name="phone"
                className="w-full border rounded-r p-2"
                placeholder="Enter Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="w-full border rounded p-2"
              placeholder="Enter Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1d241d] text-white py-3 rounded shadow-md hover:bg-[#2a322a]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
