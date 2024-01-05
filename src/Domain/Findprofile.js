import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import profile5 from '../Common/image/profile-5.jpg';
import profile6 from '../Common/image/profile-6.png';
import profile7 from '../Common/image/profile-7.jpg';
import profile8 from '../Common/image/profile-8.png';
import profile9 from '../Common/image/profile-9.png';
import profile10 from '../Common/image/profile-10.png';
import { useNavigate } from 'react-router-dom';
import { setsingleProfile } from '../Redux/CreateSlice';
import { useDispatch, useSelector } from 'react-redux';




// import '../Common/css/Findprofile.css'

const itemsPerPage = 5;

const data = [
    { id: 1, photo: profile5, name: 'Joaquín Díaz', age: 24, education: 'B.E', place: 'chennai' },
    { id: 2, photo: profile6, name: 'Mohammed Hassa', age: 27, education: 'MBBS', place: 'Nagercoil' },
    { id: 3, photo: profile7, name: 'Yassin Bankole', age: 29, education: 'B.Sc', place: 'chennai' },
    { id: 4, photo: profile8, name: 'Joaquín Díaz', age: 30, education: 'BBA', place: 'kovai' },
    { id: 5, photo: profile9, name: 'Mohammed Hassa', age: 25, education: 'B.E', place: 'chennai' },
    { id: 6, photo: profile10, name: 'Yassin Bankole', age: 22, education: 'MBBS', place: 'chennai' },
    { id: 7, photo: profile5, name: 'Joaquín Díaz', age: 24, education: 'B.Tech', place: 'kerala' },
    { id: 8, photo: profile6, name: 'Mohammed Hassa', age: 25, education: 'B.E', place: 'kerala' },
    { id: 9, photo: profile7, name: 'Yassin Bankole', age: 26, education: 'B.E', place: 'chennai' },
    { id: 10, photo: profile8, name: 'Joaquín Díaz', age: 28, education: 'B.E', place: 'chennai' },
    // ... more items
];
const Findprofile = () => {
    const { singleProfile } = useSelector((state) => state.matrimony)
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    console.log(currentPage)
    const viewprofile = (items) => {
        dispatch(setsingleProfile([items]))
    }
    const profileviews = ()=>{
        navigate('/profileview')
    }
    if (singleProfile.length == 1) {
        profileviews()
    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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

    // console.log(singleProfile)
    return (
        <div className='container-90 owl-theme mt-5'>
            <div>
                <Slider {...settings}>
                    {currentItems.map((item) => (
                        <div class="card border-0 px-2">
                            <img src={item.photo} className="w-100 profile-img" alt="..." />
                            <div class="card-body card-content w-100">
                                <h5 className="">{item.name}</h5>
                                <h6 className="">Age - {item.age}</h6>
                                <h6 className="">Education - {item.education}</h6>
                                <h6 className="">{item.place}</h6>
                                <div className='text-end'>
                                    <button className='view-btn' onClick={() => viewprofile(item)}>View</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </Slider>
                <div className='py-5 text-end'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className='action-btn'
                    >
                        Previous
                    </button>

                    <span> Page {currentPage} of {totalPages} </span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className='action-btn'
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Findprofile;
