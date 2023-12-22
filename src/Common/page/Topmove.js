import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import '../css/profile.css'

function Topmove() {
    const [isVisible, setIsVisible] = useState(false);

    const dispatch = useDispatch();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 10; // You can adjust this value based on when you want the button to appear

        if (scrollY > threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '30px' }} className='top-btn'>
                    <FontAwesomeIcon icon={faArrowCircleUp} style={{ color: '#FFF' }} />
                </button>
            )}
        </div>
    )
}

export default Topmove