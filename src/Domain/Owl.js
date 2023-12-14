import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Common/css/owl.css'
import { useDispatch, useSelector } from 'react-redux';
import { setprofileDetails } from '../Redux/CreateSlice';
import axios from "axios";
import profile1 from '../Common/image/profile-2.png'
const Owl = () => {
    const options = {
        items: 3, // Number of items to display
        loop: true,
        margin: 10,
        center: true,
        autoplay: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    const { profileDetails } = useSelector((state) => state.navButton);
    const dispatch = useDispatch()
    const profileData = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        dispatch(setprofileDetails(data))
    }
    useEffect(() => {
        profileData()
    }, [])

    return (
        <>
            <div className='d-lg-block d-none'>
                <OwlCarousel className="owl-theme mt-5 matrimony-list" {...options}>
                    {profileDetails && profileDetails.map((card) => (
                        <div key={profileDetails.id} className="item container-80">
                            <div className="card card-list p-0">
                                <img src={profile1} className='w-100 img-height' />
                                <h4 className='hidden-content p-3'>Joaquín Díaz</h4>
                                <div className="card-contents">
                                    <h4>Joaquín Díaz</h4>
                                    <h4>Age - 57</h4>
                                    <h4>B.Sc</h4>
                                    <h4>Coimbatore</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
            <div className='d-lg-none d-block'>
                <OwlCarousel className="owl-theme mt-5 matrimony-list" {...options}>
                    {profileDetails && profileDetails.map((card) => (
                        <div key={profileDetails.id} className="item container-80">
                            <div className="card card-list p-0">
                                <img src={profile1} className='w-100 img-height' />
                                <div className="card-view">
                                    <h4>Joaquín Díaz</h4>
                                    <h4>Age - 57</h4>
                                    <h4>B.Sc</h4>
                                    <h4>Coimbatore</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </>

    );
};

export default Owl;
