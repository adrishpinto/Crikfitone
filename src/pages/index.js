import { useState } from 'react';
import Navbar from'@/components/Navbar';
import Popup from '@/components/Popup';
import Coach from '@/components/Coach';

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  // Show the popup when the "Book Now" button is clicked
  // and hide it when the close button in the popup is clicked.

  const handleBookNowClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <Navbar onBookNowClick={handleBookNowClick} />  
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Coach />
    </>
  );
}
