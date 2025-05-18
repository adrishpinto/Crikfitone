import { useState } from 'react';
import Navbar from'@/components/Navbar';
import Popup from '@/components/Popup';
import Coach from '@/components/Coach';
import Poster from '@/components/Poster';

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleBookNowClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <Navbar onBookNowClick={handleBookNowClick} />  
      <Poster />
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Coach />
    </>
  );
}
