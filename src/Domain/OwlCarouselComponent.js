import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
// import OwlCarousel from 'react-owl-carousel2';

import profile from '../Common/image/profile-2.png';
import profile1 from '../Common/image/profile-1.jpg';

import '../Common/css/simpleslider.css';

function OwlCarouselComponent() {
    const options = {
        items: 1,
        margin: 10,
        loop: true,
        autoplay: true,
        dots:false,
        nav:true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    };

    // const items = [
    //     <div key="1" className="item"><img src={profile} alt="item5" /></div>,
    //     <div key="2" className="item"><img src={profile1} alt="item5" /></div>,
    //     // Add more items as needed
    // ];

    return (
        <OwlCarousel className="owl-theme container-90" {...options}>
            <div key="1" className="item"><img src={profile} alt="item5" /></div>
            <div key="2" className="item"><img src={profile1} alt="item5" /></div>
            <div key="2" className="item"><img src={profile} alt="item5" /></div>
            {/* Add more items as needed */}
        </OwlCarousel>
    );
}

export default OwlCarouselComponent;
