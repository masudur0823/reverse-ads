import React from 'react'
import knImg from '../assets/images/keyword-network/keyword-network-inner-page.png'

function KeywordNetwork2() {
    return (
        <>
            {/* section1 */}
            <div className="c_container">
                <div className="row m-0 pt_big pb-5 flex-column-reverse flex-md-row">
                    <div className="col-md-6">
                        <h1 className='t_one fw-900'>KEYWORD NETWORK</h1>
                        <p className='p_two mt-3 mt-md-4 fw-bold'>
                            The Next Generation of Open Internet Advertising
                        </p>
                        <p className='p_two mt-3 mt-md-4'>
                            Success is more than a Keyword. Access the world’s largest keyword marketplace, and drive advertising results through multi-channel brand experiences.
                        </p>
                        <p className='p_two mt-3 mt-md-4'>
                            The ReverseAds Keyword Network is an end-to-end AI-powered platform for robust advertising campaigns using premium inventory across channels.
                        </p>
                        <button className={`btn_pink px-4 mt-3 mt-md-4`}>DOWNLOAD SOLUTION BROCHURE</button>
                    </div>
                    <div className="col-md-6">
                        <img src={knImg} className="w-100" alt="" />
                    </div>
                </div>
            </div>
            {/* section1 */}

        </>
    )
}

export default KeywordNetwork2