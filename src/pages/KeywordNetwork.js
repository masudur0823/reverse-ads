import React, { useState } from 'react'
import knImg from '../assets/images/keyword-network/keyword-network-inner-page.png'
import keywordApp from '../assets/images/keyword-network/keyword-app-icon.svg'
import keywordDsp from '../assets/images/keyword-network/keyword-dsp-icon.svg'
import complete from '../assets/images/keyword-network/reverseads-compete-icon.svg'
import costper from '../assets/images/keyword-network/cost-per-action-icon.svg'
import KeyowordApp from '../components/KeywordNetwork/KeyowordApp'
import KeywordDsp from '../components/KeywordNetwork/KeywordDsp'
import ReverseAdsCompete from '../components/KeywordNetwork/ReverseAdsCompete'
import CostPerAction from '../components/KeywordNetwork/CostPerAction'
function KeywordNetwork() {
    const [toggleState, setToggleState] = useState(1);
    const [btnBg, setBtnBg] = useState('bg_pink')

    const toggleTab = (index) => {
        setToggleState(index);

        if (index===1) {
            setBtnBg('bg_pink')
        }

        if (index===2) {
            setBtnBg('bg_orange')
        }

        if (index===3) {
            setBtnBg('bg_yellow')
        }

        if (index===4) {
            setBtnBg('bg_green')
        }
    }
    return (
        <>
            {/* section1 */}
            <div className="c_container">
                <div className="row m-0 pt_big pb-5">
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
                        <button className={`btn_pink ${btnBg} px-4 mt-3 mt-md-4`}>DOWNLOAD SOLUTION BROCHURE</button>
                    </div>
                    <div className="col-md-6">
                        <img src={knImg} className="w-100" alt="" />
                    </div>
                </div>
            </div>
            {/* section1 */}

            {/* section2 */}
            <div className="c_container">
                <div className='sec_py'>
                    <h4 className='t_two text-center'>Our Solutions</h4>
                    {/* className='kn_child kn_normal' */}
                    <div className='kn_div'>
                        <div
                            onClick={() => toggleTab(1)}
                            className={toggleState === 1 ? 'kn_child kn_active kn_active_app' : 'kn_child kn_normal'}
                            id="app"
                        >
                            <div>
                                <div className='kn_icon_con'>
                                    <img src={keywordApp} alt="" />
                                </div>
                                <p className='p_two kn_p mb-0 mt-3 mt-md-4'>Keyword App</p>
                            </div>
                        </div>
                        <div
                            onClick={() => toggleTab(2)}
                            className={toggleState === 2 ? 'kn_child kn_active kn_active_dsp' : 'kn_child kn_normal'}
                            id="dsp"
                        >
                            <div>
                                <div className='kn_icon_con'>
                                    <img src={keywordDsp} alt="" />
                                </div>
                                <p className='p_two kn_p mb-0 mt-3 mt-md-4'>Keyword DSP</p>
                            </div>
                        </div>
                        <div
                            onClick={() => toggleTab(3)}
                            className={toggleState === 3 ? 'kn_child kn_active kn_active_com' : 'kn_child kn_normal'}
                            id="com"
                        >
                            <div>
                                <div className='kn_icon_con'>
                                    <img src={complete} alt="" />
                                </div>
                                <p className='p_two kn_p mb-0 mt-3 mt-md-4'>ReverseAds Compete</p>
                            </div>
                        </div>
                        <div
                            onClick={() => toggleTab(4)}
                            className={toggleState === 4 ? 'kn_child kn_active kn_active_cos' : 'kn_child kn_normal'}
                            id="cost"
                        >
                            <div>
                                <div className='kn_icon_con'>
                                    <img src={costper} alt="" />
                                </div>
                                <p className='p_two kn_p mb-0 mt-3 mt-md-4'>Cost Per Action</p>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 1 ? 'd-block  kn_body kn_body_app' : 'd-none'}>
                        <KeyowordApp btnBg={btnBg} />
                    </div>

                    <div className={toggleState === 2 ? 'd-block kn_body kn_body_dsp' : 'd-none'}>
                        <KeywordDsp btnBg={btnBg} />
                    </div>

                    <div className={toggleState === 3 ? 'd-block kn_body kn_body_com' : 'd-none'}>
                        <ReverseAdsCompete btnBg={btnBg} />
                    </div>

                    <div className={toggleState === 4 ? 'd-block kn_body kn_body_cos' : 'd-none'}>
                        <CostPerAction btnBg={btnBg} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default KeywordNetwork