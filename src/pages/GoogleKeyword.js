import React from 'react'
import googleImg from '../assets/images/google-inner-page.png'

function GoogleKeyword() {
  return (
    <>
      <div className='sec_mt-100'>
        <div className="c_container">
          <div className="row m-0 flex-column-reverse flex-lg-row">

            <div className="col-lg-6">
              <h1 className='t_one fw-900'>
                THE
                <span style={{ color: '#4E86EC' }}> G</span>
                <span style={{ color: '#D95040' }}>O</span>
                <span style={{ color: '#F3BD42' }}>O</span>
                <span style={{ color: '#58A55C' }}>G</span>
                <span style={{ color: '#4E86EC' }}>L</span>
                <span style={{ color: '#D95040' }}>E</span>
                <br className='d-none d-lg-block' />
                KEYWORD CHALLENGE
              </h1>
              <p className='p_one fw-bold mt-2 mt-md-4'>
                The Keyword Network is consistently outperforming Google Search Ads for a fraction of the cost. We are so confident in this that we are putting our technology to the test.
              </p>

              <p className='p_one mt-2 mt-md-4'>
                Choose any 10 keywords in considered purchase industries, and we guarantee that we will outperform Google over 90 days or provide a 100% refund (terms & conditions apply).
              </p>

              <ul className='kc_ul gk_ul'>
                <li className='p_one'>Submit Your Keywords</li>
                <li className='p_one'>Schedule a Consultation with a Keyword Specialist</li>
                <li className='p_one'>Provide Access to Google Analytics</li>
              </ul>

              <div className='p-4'></div>

            </div>

            <div className="col-lg-6 position-relative text-center text-md-end">
              <img src={googleImg} className="sticky_img mt-0 mt-md-5" alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default GoogleKeyword