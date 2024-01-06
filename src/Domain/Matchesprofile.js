import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Select from 'react-select';

import profile5 from '../Common/image/profile-5.jpg';
import profile6 from '../Common/image/profile-6.png';
import profile7 from '../Common/image/profile-7.jpg';
import profile8 from '../Common/image/profile-8.png';
import profile9 from '../Common/image/profile-9.png';
import profile10 from '../Common/image/profile-10.png';
import { useNavigate } from 'react-router-dom';
import { setCurrentPage, setsingleProfile, setIsMatches } from '../Redux/CreateSlice';
import { useDispatch, useSelector } from 'react-redux';




// import '../Common/css/Matchesprofile.css'

const itemsPerPage = 20;

const data = [
    { id: 1, photo: profile5, name: 'Joaquín Díaz', age: 24, education: 'B.E', place: 'chennai', title: 'New Matches' },
    { id: 2, photo: profile6, name: 'Mohammed Hassa', age: 27, education: 'MBBS', place: 'Nagercoil', title: 'Total Matches' },
    { id: 3, photo: profile7, name: 'Yassin Bankole', age: 29, education: 'B.Sc', place: 'chennai', title: 'Premium Matches' },
    { id: 4, photo: profile8, name: 'Joaquín Díaz', age: 30, education: 'BBA', place: 'kovai', title: 'Mutual Matches' },
    { id: 5, photo: profile9, name: 'Mohammed Hassa', age: 25, education: 'B.E', place: 'chennai', title: 'New Matches' },
    { id: 6, photo: profile10, name: 'Yassin Bankole', age: 22, education: 'MBBS', place: 'chennai', title: 'Total Matches' },
    { id: 7, photo: profile5, name: 'Joaquín Díaz', age: 24, education: 'B.Tech', place: 'kerala', title: 'Premium Matches' },
    { id: 8, photo: profile6, name: 'Mohammed Hassa', age: 25, education: 'B.E', place: 'kerala', title: 'Mutual Matches' },
];
const caste = [
    { label: 'New Matches', value: 'New Matches' },
    { label: 'Total Matches', value: 'Total Matches' },
    { label: 'Premium Matches', value: 'Premium Matches' },
    { label: 'Mutual Matches', value: 'Mutual Matches' },
];
const Matchesprofile = () => {
    const { singleProfile, currentPage, isMatches } = useSelector((state) => state.matrimony)

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        dispatch(setCurrentPage(newPage));
    }
    const viewprofile = (items) => {
        dispatch(setsingleProfile([items]))
        localStorage.setItem('singleProfile', JSON.stringify(items));
    }
    const profileviews = () => {
        navigate('/profileview')
    }
    if (singleProfile.length == 1) {
        profileviews()
        dispatch(setsingleProfile([]))
    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        loop: true,
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
        ],
    };

    // console.log(singleProfile)
    return (
        <div className='find-profile'>
            <div>
                <div className='row m-0'>
                    <div className='col-6'>
                        <label className='py-2 label-font'>Matches Title</label>
                        <Select
                            options={caste}
                            isSearchable
                            onChange={(selectedOption) => dispatch(setIsMatches(selectedOption.value))}
                        />
                    </div>
                    <div className='col-6'>
                    </div>
                </div>
                <div className='row m-0'>
                    {isMatches.length == 0 ?
                        <>
                            {currentItems.map((item, index) => (  // Added index to ensure unique keys
                                    
                                        <div className='col-4 my-3' key={item.id}>
                                            <div className="card border-0 px-2">
                                                <img src={item.photo} className="w-100 profile-img" alt="..." />
                                                <div className="card-body card-content w-100">
                                                    <h5 className="">{item.name}</h5>
                                                    <h6 className="">Age - {item.age}</h6>
                                                    <h6 className="">Education - {item.education}</h6>
                                                    <h6 className="">{item.place}</h6>
                                                    <div className='text-end'>
                                                        <button type='button' className='view-btn' onClick={() => viewprofile(item)}>View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            ))}
                        </>
                        :
                        <>
                            {currentItems.map((item, index) => (  // Added index to ensure unique keys
                                item.title == isMatches ?
                                    <>
                                        <div className='col-4 my-3' key={item.id}>
                                            <div className="card border-0 px-2">
                                                <img src={item.photo} className="w-100 profile-img" alt="..." />
                                                <div className="card-body card-content w-100">
                                                    <h5 className="">{item.name}</h5>
                                                    <h6 className="">Age - {item.age}</h6>
                                                    <h6 className="">Education - {item.education}</h6>
                                                    <h6 className="">{item.place}</h6>
                                                    <div className='text-end'>
                                                        <button type='button' className='view-btn' onClick={() => viewprofile(item)}>View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                    :


                                    <></>


                            ))}
                        </>
                    }

                </div>
                {/* {isMatches.length == 0 ?
                    <></>


                    : */}
                    <>
                        <div className='py-5 text-end'>
                            <button
                                type='button'
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className='action-btn'
                            >
                                Previous
                            </button>
                            <span> Page {currentPage} of {totalPages} </span>
                            <button
                                type='button'
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className='action-btn'
                            >
                                Next
                            </button>
                        </div>
                    </>

                {/* } */}

            </div>
        </div >

    );
};

export default Matchesprofile;
