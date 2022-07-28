import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/foooter_logo.svg'
import linkedin from '../../assets/images/icons/linkedin-icon.svg'
import youtube from '../../assets/images/icons/youtube-icon.svg'
import instagram from '../../assets/images/icons/instagram-icon.svg'
import facebook from '../../assets/images/icons/facebook-icon.svg'

function Footer() {
  return (
    <footer>
      <div className="c_container">
        <div className='foot_top'>
          <img src={logo} alt="" />
          <div className="row g-2 g-md-5  m-0 mt-4">
            <div className="col-md-6 col-lg-4">
              <div>
                <h5 className='foot_title'>Company</h5>
                <div className='foot_horizontal_line'></div>
                <ul className='list-unstyled foot_ul'>
                  <li><a href="#!">We are ReverseAds</a></li>
                  <li><a href="#!">Careers</a></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/termsconditions">Terms & Conditions</NavLink></li>
                  <li><a href="#!">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div>
                <h5 className='foot_title'>Keyword Network</h5>
                <div className='foot_horizontal_line'></div>
                <ul className='list-unstyled foot_ul'>
                  <li><NavLink to="/keywordnetwork">Keyword App</NavLink></li>
                  <li><a href="#!">Keyword DSP</a></li>
                  <li><a href="#!">ReverseAds Compete</a></li>
                  <li><a href="#!">Cost Per Action</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div>
                <h5 className='foot_title'>Resources</h5>
                <div className='foot_horizontal_line'></div>
                <ul className='list-unstyled foot_ul'>
                  <li><a href="#!">News</a></li>
                  <li><a href="#!">Proven Results</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">

            </div>

            <div className="col-md-6 col-lg-4">
              <div>
                <h5 className='foot_title'>Keyword Network</h5>
                <div className='foot_horizontal_line'></div>
                <ul className='list-unstyled foot_ul'>
                  <li><a href="#!">Keyword DMP</a></li>
                  <li><a href="#!">Keyword Cohort</a></li>
                  <li><a href="#!">Blok ID</a></li>
                  <li><a href="#!">Decentralized Search</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className='foot_follow_us'>
                <h5 className='foot_title'>Follow Us</h5>
                <div className='foot_social'>
                  <a href="#!"><img src={linkedin} alt="" /></a>
                  <a href="#!"><img src={youtube} alt="" /></a>
                  <a href="#!"><img src={instagram} alt="" /></a>
                  <a href="#!"><img src={facebook} alt="" /></a>
                </div>
              </div>
              <a href="#!" className='subscribe_button'>SUBSCRIBE OUR NEWSLETTER</a>
            </div>

          </div>

          <div className='foot_horizontal_line'></div>

          <small className='foot_copyright_text'>© 2021 ReverseAds Inc. All rights reserved. Various trademarks held by their respective owners. 531A Upper Cross Street #04-95 Hong Lim Complex, Singapore 051531</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer