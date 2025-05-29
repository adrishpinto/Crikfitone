import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9902884066"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 right-0 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg z-50 transition duration-300"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;
