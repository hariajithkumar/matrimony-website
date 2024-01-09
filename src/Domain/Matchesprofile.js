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

const itemsPerPage = 3;

const data = [
    { id: 1, photo: profile5, name: 'Joaquín Díaz', age: 24, education: 'B.E', place: 'chennai', title: 'New Matches' },
    { id: 2, photo: profile6, name: 'Mohammed Hassa', age: 27, education: 'MBBS', place: 'Nagercoil', title: 'Total Matches' },
    { id: 3, photo: profile7, name: 'Yassin Bankole', age: 29, education: 'B.Sc', place: 'chennai', title: 'Premium Matches' },
    { id: 4, photo: profile8, name: 'Joaquín Díaz', age: 30, education: 'BBA', place: 'kovai', title: 'Mutual Matches' },
    { id: 5, photo: profile9, name: 'Mohammed Hassa', age: 25, education: 'B.E', place: 'chennai', title: 'New Matches' },
    { id: 6, photo: profile10, name: 'Yassin Bankole', age: 22, education: 'MBBS', place: 'chennai', title: 'Total Matches' },
    { id: 7, photo: profile5, name: 'Joaquín Díaz', age: 24, education: 'B.Tech', place: 'kerala', title: 'Mutual Matches' },
    { id: 8, photo: profile6, name: 'Mohammed Hassa', age: 25, education: 'B.E', place: 'kerala', title: 'Mutual Matches' },
];
const searchData = []
const caste = [
    { label: 'All', value: 'All' },
    { label: 'New Matches', value: 'New Matches' },
    { label: 'Total Matches', value: 'Total Matches' },
    { label: 'Premium Matches', value: 'Premium Matches' },
    { label: 'Mutual Matches', value: 'Mutual Matches' },
];
const Matchesprofile = () => {
    const { singleProfile, currentPage, isMatches } = useSelector((state) => state.matrimony)
    const [searchName, setSearchName] = useState('')
    const [findPage, setFindPage] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchResults = data.filter((profile) => profile.name.toLowerCase().includes(searchName) || profile.age <= parseFloat(searchName));
   
    const [filterLenght, setFilterLenght] = useState([]);

    const filterSearch = data.filter((fliterItem) => fliterItem.title === isMatches);
    // console.log(filterSearch)
    useEffect(() => {
        window.scrollTo(0, 0);
        setFilterLenght(filterSearch);
    }, [isMatches, data]);

    const [totalProfile, setTotalProfile] = useState(searchResults.length);

    const itemsPerPage = 6;
    const [currentPages, setCurrentPages] = useState(1);

    const startIndex = (currentPages - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const currentResults = filterSearch ? console.log("ajith") : console.log('kumar');
    let currentResults;
    if (filterSearch) {
        if(isMatches=='All'){
            currentResults = searchResults.filter(item => (item.title === isMatches || isMatches === 'All')).slice(startIndex, endIndex); 
        }else{
            currentResults = filterSearch.filter((profile) => profile.name.toLowerCase().includes(searchName) || profile.age <= parseFloat(searchName))
        }
      } 
    //   const currentResults = filterSearch ? searchResults.filter(item => (item.title === isMatches || isMatches === 'All')).slice(startIndex, endIndex); 
    const totalPages = Math.ceil((filterSearch ? searchResults.filter(item => (item.title === isMatches || isMatches === 'All')).length : 0) / itemsPerPage);
    const handlePageChange = (newPage) => {
        setCurrentPages(newPage);
        setFindPage(newPage)
    };

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
    return (
        <div className='find-profile'>
            <div>
                <div className='row m-0'>
                    <div className='col-4'>
                        <label className='py-2 label-font'>Matches Title</label>
                        <Select
                            options={caste}
                            isSearchable
                            value={{ value: isMatches, label: isMatches }}
                            onChange={(selectedOption) => dispatch(setIsMatches(selectedOption.value))}
                        />
                    </div>
                    <div className='col-2 align-self-center justify-content-center'>
                        <label className='py-2 label-font'>No.of.Profile</label>
                        <input type='text' className='form-control' value={isMatches == 'All' ? searchResults.length : filterSearch.length}/>
                    </div>
                    <div className='col-6 align-self-center justify-content-center'>
                        <label className='py-2 label-font'>Search</label>
                        <input type='search' className='form-control' placeholder='Enter the name,age' onChange={(e) => setSearchName(e.target.value)} />
                    </div>
                    
                </div>
                <div className='row m-0'>
                    {searchResults.length > 0 ?
                        <>
                            {currentResults.map((item, index) => (
                                <div className='col-4 my-3' key={item.id}>
                                    <div className="card border-0 px-2">
                                        <img src={item.photo} className="w-100 profile-img" alt="..." />
                                        <div className="card-body card-content w-100">
                                            <h5>{item.name}</h5>
                                            <h6>Age - {item.age}</h6>
                                            <h6>Education - {item.education}</h6>
                                            <h6>{item.place}</h6>
                                            <div className='text-end'>
                                                <button type='button' className='view-btn' onClick={() => viewprofile(item)}>View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="text-end find-btn">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button className={`action-btn ${i === findPage ? 'active' : ''}`} key={i + 1} onClick={() => handlePageChange(i + 1)}>{i+1}</button>
                                ))}
                            </div>
                        </>
                        :
                        <>
                            <h1 className='text-center my-5'>No search partner</h1>
                        </>
                    }


                </div>

            </div>
        </div >

    );
};

export default Matchesprofile;
