import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Common/css/style.css'
import Home from './Domain/Home';
import Search from './Domain/Search';
import Faqpage from './Domain/Faqpage';
import Package from './Domain/Package';
import About from './Domain/About';
import Contact from './Domain/Contact';
import Register from './Domain/Register';
import Login from './Domain/Login';
import Tophome from './Domain/Tophome';
import Myprofile from './Domain/Myprofile';
import Partner from './Domain/Partner';
import Photoupload from './Domain/Photoupload';
import Proofverify from './Domain/Proofverify';
import Imagecrop from './Domain/Imagecrop';
import Finalcrop from './Domain/FinalCrop';
import Resizeimage from './Domain/Resizeimage';
import OwlCarouselComponent from './Domain/OwlCarouselComponent';
import SimpleSlider from './Domain/SimpleSlider ';
import Searchprofile from './Domain/Searchprofile';
import Profileview from './Domain/Profileview';
function App() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.slide-up, .slide-left, .slide-right');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;

        if (isVisible) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path='' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='package' element={<Package />} />
          <Route path='faq' element={<Faqpage />} />
          <Route path='search' element={<Search />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='Tophome' element={<Tophome />} />
          <Route path='Myprofile' element={<Myprofile />} />
          <Route path='Partner' element={<Partner />} />
          <Route path='Photoupload' element={<Photoupload />} />
          <Route path='Proofverify' element={<Proofverify />} />
          {/* <Route path='Imagecrop' element={<Imagecrop />} /> */}
          <Route path='Finalcrop' element={<Finalcrop />} />
          <Route path='resize' element={<Resizeimage />} />
          <Route path='owl' element={<OwlCarouselComponent />} />
          <Route path='SimpleSlider' element={<SimpleSlider />} />
          <Route path='searchprofile' element={<Searchprofile />} />
          <Route path='profileview' element={<Profileview />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
