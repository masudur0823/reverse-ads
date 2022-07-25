import React, { useState } from 'react'
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
                    <img src={logo} className="logo" alt="" />
                </div>
                <div>
                    <ul className='list-unstyled menu_ul mb-0' style={{ left: show }}>
                        <li className='dropdown'>
                            <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Keyword Network
                            </a>
                            <ul class="dropdown-menu menu_drop">
                                <li><a href="#!">Keyword App</a></li>
                                <li><a href="#!">Keyword DSP</a></li>
                                <li><a href="#!">Compete</a></li>
                                <li><a href="#!">Cost Per Action</a></li>
                            </ul>
                        </li>
                        <li className='dropdown'>
                            <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Keyword Data Cloud
                            </a>
                            <ul class="dropdown-menu menu_drop">
                                <li><a href="#!">Keyword DMP</a></li>
                                <li><a href="#!">Keyword Cohort</a></li>
                                <li><a href="#!">BlokID</a></li>
                                <li><a href="#!">Decentralized Search</a></li>
                            </ul>
                        </li>
                        <li className='dropdown'>
                            <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul class="dropdown-menu menu_drop">
                                <li><a href="#!">News</a></li>
                                <li><a href="#!">Proven Result</a></li>
                            </ul>
                        </li>
                        <li className='dropdown'>
                            <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company
                            </a>
                            <ul class="dropdown-menu menu_drop">
                                <li><a href="#!">We Are ReverseAds</a></li>
                                <li><a href="#!">Careers</a></li>
                                <li><a href="#!">Contact</a></li>
                                <li><a href="#!">Terms and Conditions</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
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
                    <div class={`humberger ${humberger}`} onClick={handleHumberger}>
                        <div class="line line1" id="line1"></div>
                        <div class="line line2" id="line2"></div>
                        <div class="line line3" id="line3"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header