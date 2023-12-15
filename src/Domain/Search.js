import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Common/page/Header';
import Footer from '../Common/page/Footer';
import '../Common/css/style.css'
import '../Common/css/search.css'
import profilesearch from '../Common/image/profile_search.png'
import adavancesearch from '../Common/image/adavance_search.png'
import userid from '../Common/image/user_id.png'
import Profileheader from '../Common/page/Profileheader';
import Tophome from './Tophome';
import Topheader from '../Common/page/Topheader';
import ResponsiveNav from './ResponsiveNav';
function Search() {
  const { isClass1Show } = useSelector((state) => state.navButton)
  const [key, setKey] = useState('home');
  const dispatch = useDispatch();

  return (
    <div className='section-search'>
      <Topheader />
      <div className='header-bg-img header-content'>
        <h2 className='text-center mb-sm-3'>Search Your Partner Here</h2>
      </div>
      <div className=''>

        <div className='my-3'>
          <div className='container-80 search-card d-lg-block d-md-block d-sm-block d-none'>
            <Tabs
              id="controlled-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="home" title={<><img src={profilesearch} className='px-2 w-25' /><span>Regular search</span></>}>
                <div className='p-5 bg-active-tabs'>
                  <div className='row m-0'>
                    <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>I’m Looking for a</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Religion *</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Caste *</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Height from</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Height to</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Age from (yrs)</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Age to (yrs)</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button className='search-btn'>Search</button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title={<><img src={adavancesearch} className='px-2 w-25' /><span>advanced search</span></>}>
                <div className='bg-active-tabs'>
                  <div className='container-80 p-3'>
                    <div className='adavance-accordion my-5'>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button accordion-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              basic details
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <div className='row m-0'>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>I’m Looking for a</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Height from</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Height to</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Age from (yrs)</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Age to (yrs)</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <hr />
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Marital Status</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Religion *</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Caste *</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed accordion-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Education & Occupation
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Education Category</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Employed In</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Job Category</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed accordion-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Location
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>Country</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                  <label className='py-2 label-font'>State</label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-center'>
                      <button className='search-btn'>SEARCH</button>
                    </div>
                  </div>
                </div>

              </Tab>
              <Tab eventKey="messages" title={<><img src={userid} className='px-2 w-25' /><span>ID search</span></>}>
                <div className='bg-active-tabs'>
                  <div className='container-80 py-5'>
                    <div className='text-center'>
                      <label for="exampleInputEmail1" class="form-label">Search ID *</label>
                      <input type="text" className="form-control w-25 mx-auto" />
                      <div className='text-center'>
                        <button className='search-btn'>SEARCH</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className='container-80 search-card d-lg-none d-md-none d-sm-none d-block'>
            <Tabs
              id="controlled-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="home" title={<><span>Regular search</span></>}>
                <div className='p-5 '>
                  <div className='row m-0'>
                    <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>I’m Looking for a</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Religion *</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Caste *</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Height from</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Height to</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Age from (yrs)</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                      <label className='py-2 label-font'>Age to (yrs)</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button className='search-btn'>Search</button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title={<><span>advanced search</span></>}>
                <div className='container-80'>
                  <div className='adavance-accordion my-5'>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button accordion-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            basic details
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <div className='row m-0'>
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>I’m Looking for a</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Height from</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Height to</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Age from (yrs)</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-3 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Age to (yrs)</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <hr />
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Marital Status</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Religion *</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Caste *</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed accordion-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Education & Occupation
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <div className='row'>
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Education Category</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Employed In</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Job Category</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed accordion-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Location
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <div className='row'>
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>Country</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-12 py-3'>
                                <label className='py-2 label-font'>State</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button className='search-btn'>SEARCH</button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="messages" title={<><span>ID search</span></>}>
                <div className='container-80 pt-5'>
                  <div className='text-center'>
                    <label for="exampleInputEmail1" class="form-label">Search ID *</label>
                    <input type="text" className="form-control w-50 mx-auto" />
                    <div className='text-center'>
                      <button className='search-btn'>SEARCH</button>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search