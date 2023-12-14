import React from 'react'

import search from '../image/profile-search.png'
import call from '../image/profile-call.png'
import message from '../image/profile-message.png'

function benefit() {
    return (
        <div className='user-position'>
            <div className='account-details benifit-details px-3 py-3'>
                <h2 className='text-center'>You are <span>missing</span> out on the premium benefits!</h2>
                <div>
                    <ul className='m-0 p-0'>
                        <li className='list-group-item'>
                            <img src={message} className='float-start me-4' /> Get upto 3x more profile views
                        </li>
                        <li className='list-group-item'>
                            <img src={call} className='float-start me-4' /> Unlimited voice & Video calls
                        </li>
                        <li className='list-group-item'>
                            <img src={message} className='float-start me-4' /> Get access to contact details
                        </li>
                        <li className='list-group-item'>
                            <img src={search} className='float-start me-4' /> Perform unlimited searches
                        </li>
                    </ul>
                    <h1>Flat 50% OFF till 2023</h1>
                    <div className='text-center'>
                        <button>Upgrade Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default benefit