import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import profile5 from '../Common/image/profile-5.jpg';
import profile6 from '../Common/image/profile-6.png';
import profile7 from '../Common/image/profile-7.jpg';
import profile8 from '../Common/image/profile-8.png';
import profile9 from '../Common/image/profile-9.png';
import profile10 from '../Common/image/profile-10.png';

// import '../Common/css/simpleslider.css'


const SimpleSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay:true,
        navigation: {
            nextE1: ".swiper-button-next",
            prevE1: ".swiper-button-prev",
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 556,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            //   {
            //     breakpoint: 425,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1,
            //     },
            //   },
        ],
    };

    return (
        <div className='container-90 owl-theme mt-5'>
            <Slider {...settings}>
                <div class="card border-0 px-2">
                    <img src={profile10} className="w-100 profile-img" alt="..." />
                    <div class="card-body card-content w-100">
                        <h5 className="">Mohammed Hassan</h5>
                        <h6 className="">Age - 27</h6>
                        <h6 className="">B.Tech</h6>
                        <h6 className="">Coimbatore</h6>
                    </div>
                </div>
                <div class="card border-0 px-2">
                    <img src={profile5} className="w-100 profile-img" alt="..." />
                    <div class="card-body card-content w-100">
                        <h5 className="">Joaquín Díaz</h5>
                        <h6 className="">Age - 27</h6>
                        <h6 className="">B.Tech</h6>
                        <h6 className="">Coimbatore</h6>
                    </div>
                </div>
                <div class="card border-0 px-2">
                    <img src={profile6} className="w-100 profile-img" alt="..." />
                    <div class="card-body card-content w-100">
                        <h5 className="">Joaquín Díaz</h5>
                        <h6 className="">Age - 27</h6>
                        <h6 className="">B.Tech</h6>
                        <h6 className="">Coimbatore</h6>
                    </div>
                </div>
                <div class="card border-0 px-2">
                    <img src={profile7} className="w-100 profile-img" alt="..." />
                    <div class="card-body card-content w-100">
                        <h5 className="">Joaquín Díaz</h5>
                        <h6 className="">Age - 27</h6>
                        <h6 className="">B.Tech</h6>
                        <h6 className="">Coimbatore</h6>
                    </div>
                </div>
                <div class="card border-0 px-2">
                    <img src={profile8} className="w-100 profile-img" alt="..." />
                    <div class="card-body card-content w-100">
                        <h5 className="">Yassin Bankole</h5>
                        <h6 className="">Age - 27</h6>
                        <h6 className="">B.Tech</h6>
                        <h6 className="">Coimbatore</h6>
                    </div>
                </div>
                <div class="card border-0 px-2">
                    <img src={profile9} className="w-100 profile-img" alt="..." />
                    <div class="card-body card-content w-100">
                        <h5 className="">Joaquín Díaz</h5>
                        <h6 className="">Age - 27</h6>
                        <h6 className="">B.Tech</h6>
                        <h6 className="">Coimbatore</h6>
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>

    );
};

export default SimpleSlider;
