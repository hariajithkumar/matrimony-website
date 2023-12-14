import React from 'react'
import '../Common/css/login.css'
import Topheader from '../Common/page/Topheader';
import logo from '../Common/image/Logo-white.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../Common/page/Footer';
function Login() {
    const navigate = useNavigate()
    const register = () => {
        navigate('/register')
    }
    const login = () => {
        navigate('/Myprofile')
    }
    return (
        <div>
            <Topheader />
            {/* <!-- Main Content --> */}
            <div className="container-fluid login-section">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h4 className="company_title"><img src={logo} /></h4>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Log In</h2>
                                <hr className='my-3'/>
                            </div>
                            <div className="row">
                                <form control="" className="form-group">
                                    <div className="row">
                                        <input type="text" name="username"  className="form-control my-4" placeholder="Username" />
                                    </div>
                                    <div className="row">
                                        {/*<span className="fa fa-lock"></span> */}
                                        <input type="password" name="password" id="password" className="form-control my-4" placeholder="Password" />
                                    </div>
                                    <div className="row">
                                        <div className="mb-3">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label text-dark text-start mx-2" for="exampleCheck1">Remember Me!</label>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <input type="submit" value="Submit" className="btn" onClick={()=>login()}/>
                                    </div>
                                </form>
                            </div>
                            <div className="text-center">
                                <p>Don't have an account? <a href="#" className='register' onClick={()=>register()}>Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login