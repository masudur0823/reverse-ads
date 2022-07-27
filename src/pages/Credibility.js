import React from 'react'
import CredibilityImg from '../assets/images/Credibility-img.png'
import videoImg from '../assets/images/Credibility/logo-animation.mp4'
import p_logo1 from '../assets/images/Credibility/logo1.png'
import p_logo2 from '../assets/images/Credibility/logo2.png'
import p_logo3 from '../assets/images/Credibility/logo3.png'
import p_logo4 from '../assets/images/Credibility/logo4.png'
import p_logo5 from '../assets/images/Credibility/logo5.png'

function Credibility() {
    return (
        <>
            <div className='sec_mt-100'>
                <div className="c_container">
                    <div className="row m-0 flex-column-reverse flex-lg-row">

                        <div className="col-lg-6">
                            <h1 className='t_one fw-900'>
                                REACH, SCALE<br className='d-none d-lg-block' />
                                AND CREDIBILITY
                            </h1>

                            <ul className='p_one mt-2 mt-md-4'>
                                <li>
                                    Upscale your ad performance by reaching over 30 million websites.
                                </li>
                                <li>
                                    Tap on the untapped 30 million websites on the Open Internet.
                                </li>
                                <li>
                                    Bringing the power of the internet back to the people.
                                </li>
                                <li>
                                    We believe in delivering the best for your marketing campaigns
                                </li>
                                <li>
                                    We are the modern way of Online Advertising.
                                </li>
                            </ul>

                            <div className='dropdown'>
                                <button className='Credibility_btn dropdown-toggle p_one mt-4 mt-md-5' data-bs-toggle="dropdown" aria-expanded="false">Stats for total number</button>
                                <ul className="dropdown-menu Credibility_btn_ul">
                                    <li><a href="#!">Total number of DSPs</a></li>
                                    <li><a href="#!">Total number of DSPs</a></li>
                                    <li><a href="#!">Total number of Publisers</a></li>
                                    <li><a href="#!">Total number of DSPs</a></li>
                                    <li><a href="#!">Total number of DSPs</a></li>
                                    <li><a href="#!">Total number of DSPs</a></li>
                                </ul>
                            </div>

                            <div className='dropdown'>
                                <button className='Credibility_btn dropdown-toggle p_one mt-4 mt-md-5' data-bs-toggle="dropdown" aria-expanded="false">Stats for each region</button>
                                <ul className="dropdown-menu Credibility_btn_ul">
                                    <li><a href="#!">Total number of DSPs</a></li>
                                    <li><a href="#!">Total number of DSPs</a></li>
                                    <li><a href="#!">Total number of Publisers</a></li>
                                    <li><a href="#!">Total number of DSPs</a></li>
                                    <li><a href="#!">Total number of DSPs</a></li>
                                    <li><a href="#!">Total number of DSPs</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-6 position-relative text-center text-md-end">
                            <img src={CredibilityImg} className="w-100 mt-0 mt-md-5" alt="" />
                        </div>

                    </div>

                    <p className='p_one fw-bold text-center mt-4'>
                        TAKING OVER THE AD SPACE/INDUSTRY BY STORM <br className='d-none d-md-block' />
                        WITH 300+ DELIGHTED CUSTOMERS & 100+ PARTNERS IN 37 COUNTRIES
                    </p>

                </div>
            </div>

            {/* logo animation */}
            <video loop autoPlay muted className='h-100 w-100'>
                <source
                    src={videoImg}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            {/* logo animation */}


            {/* partners logo */}
            <div className="c_container">
                <div className='sec_py'>
                    <p className='p_one fw-bold text-center'>PARTNERS</p>
                    <div className="partnersLogo_grid">
                        <div>
                            <a href="#!"><img src={p_logo1} alt="" /></a>
                        </div>
                        <div>
                            <a href="#!"><img src={p_logo2} alt="" /></a>
                        </div>
                        <div>
                            <a href="#!"><img src={p_logo3} alt="" /></a>
                        </div>
                        <div>
                            <a href="#!"><img src={p_logo4} alt="" /></a>
                        </div>
                        <div>
                            <a href="#!"><img src={p_logo5} alt="" /></a>
                        </div>
                    </div>

                    <hr />
                </div>
            </div>
            {/* partners logo */}

            <div className="c_container">
                <p className='p_one fw-bold text-center mt-4'>
                    WITH 300+ DELIGHTED CUSTOMERS & 100+ PARTNERS IN 37 COUNTRIES<br className='d-none d-md-block' />
                    WE HAVE THE CREAM OF THE CROP DSP, DMP, AND PUBLISHERS WEBSITES IN OUR ARSENAL FOR ENHANCED CAMPAIGN PERFORMANCE
                </p>

                <div className='dropdown'>
                    <button className='List_pub_btn dropdown-toggle p_one mx-auto mt-4 mt-md-5' data-bs-toggle="dropdown" aria-expanded="false">List of Publishers</button>
                    <ul className="dropdown-menu Credibility_btn_ul">
                        <li><a href="#!">Synergy Fir</a></li>
                        <li><a href="#!">Synergy Fir</a></li>
                        <li><a href="#!">Synergy Fir</a></li>
                        <li><a href="#!">Synergy Fir</a></li>
                        <li><a href="#!">Synergy Fir</a></li>
                        <li><a href="#!">Synergy Fir</a></li>
                        <li><a href="#!">Synergy Fir</a></li>
                        <li><a href="#!">Synergy Fir</a></li>
                        <li><a href="#!">Synergy Fir</a></li>
                    </ul>
                </div>

                <div className='p-5'></div>
            </div>
        </>
    )
}

export default Credibility