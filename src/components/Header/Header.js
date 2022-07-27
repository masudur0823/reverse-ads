import React, { useState } from 'react'
import { NavLink  } from "react-router-dom";
import logo from '../../assets/images/menu_bar/reverseads-new-logo.svg'


function Header() {

    const [show, setShow] = useState('-1000px');
    const [humberger, setHumberger] = useState('inactive_hum')


    const handleHumberger = () => {
        if (show === "-1000px") {
            setShow('0px')
            setHumberger('active_hum')
        } else {
            setShow('-1000px')
            setHumberger('inactive_hum')
        }
    }

    return (
        <header>
            <div className='menu_layout'>
                <div>
                    <NavLink to="/"><img src={logo} className="logo" alt="" /></NavLink>
                </div>
                <div>
                    <ul className='list-unstyled menu_ul mb-0' style={{ left: show }}>
                        <li className='dropdown'>
                            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Keyword Network
                            </a>
                            <ul className="dropdown-menu menu_drop">
                                <li><a href="#!">Keyword App</a></li>
                                <li><a href="#!">Keyword DSP</a></li>
                                <li><a href="#!">Compete</a></li>
                                <li><a href="#!">Cost Per Action</a></li>
                            </ul>
                        </li>
                        <li className='dropdown'>
                            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Keyword Data Cloud
                            </a>
                            <ul className="dropdown-menu menu_drop">
                                <li><a href="#!">Keyword DMP</a></li>
                                <li><NavLink to="/keywordcohort">Keyword Cohort</NavLink></li>
                                <li><a href="#!">BlokID</a></li>
                                <li><a href="#!">Decentralized Search</a></li>
                            </ul>
                        </li>
                        <li className='dropdown'>
                            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu menu_drop">
                                <li><NavLink to="/news">News</NavLink></li>
                                <li><a href="#!">Proven Result</a></li>
                            </ul>
                        </li>
                        <li className='dropdown'>
                            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company
                            </a>
                            <ul className="dropdown-menu menu_drop">
                                <li><NavLink to="/about">We Are ReverseAds</NavLink></li>
                                <li><a href="#!">Careers</a></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/termsconditions">Terms and Conditions</NavLink></li>
                                <li><NavLink to="/privacypolicy">Privacy Policy</NavLink></li>
                            </ul>
                        </li>
                        <li className='d-block d-lg-none'>
                            <button className='menu_btn_main_button'>Login</button>
                        </li>
                        <li className='d-block d-lg-none'>
                            <button className='menu_btn_main_button'>Sign up</button>
                        </li>
                        <li className='d-block d-lg-none'>
                            <button className='menu_btn_main_button'>Schedule a Demo</button>
                        </li>
                    </ul>
                </div>

                <div className='menu_btn_main'>
                    <button className='menu_btn_main_button d-none d-lg-block'>Login</button>
                    <button className='menu_btn_main_button d-none d-lg-block'>Sign up</button>
                    <button className='menu_btn_main_button d-none d-lg-block'>Schedule a Demo</button>
                    <div className={`humberger ${humberger}`} onClick={handleHumberger}>
                        <div className="line line1" id="line1"></div>
                        <div className="line line2" id="line2"></div>
                        <div className="line line3" id="line3"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header