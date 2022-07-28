import React, { useState } from 'react'
import knImg from '../assets/images/Keyword-data-cloud/keyword-data-cloud-inner-page.png'
import keywordDmp from '../assets/images/Keyword-data-cloud/keyword-dmp.svg'
import keywordcohort from '../assets/images/Keyword-data-cloud/keyword-cohort.svg'
import blockId from '../assets/images/Keyword-data-cloud/blok-id.svg'
import decentralized from '../assets/images/Keyword-data-cloud/decentralized-search.svg'
import KeywordDmp from '../components/KeywordDataCloud/KeywordDmp'
import KeywordCoh from '../components/KeywordDataCloud/KeywordCoh'
import BlokID from '../components/KeywordDataCloud/BlokID'
import Decentralized from '../components/KeywordDataCloud/Decentralized'

function KeywordDataCloud() {

  const [toggleState, setToggleState] = useState(1);
  const [btnBg, setBtnBg] = useState('#084F60')

  const toggleTab = (index) => {
    setToggleState(index);

    if (index === 1) {
      setBtnBg('#084F60')
    }

    if (index === 2) {
      setBtnBg('#00DDE8')
    }

    if (index === 3) {
      setBtnBg('#661CCC')
    }

    if (index === 4) {
      setBtnBg('#0066FF')
    }
  }
  return (
    <>
      {/* section1 */}
      <div className="c_container">
        <div className="row m-0 pt_big pb-5 flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <h1 className='t_one fw-900'>Keyword DATA CLOUD</h1>
            <p className='p_two mt-3 mt-md-4 fw-bold'>
              Access the largest keyword data resource in the world.
            </p>
            <p className='p_two mt-3 mt-md-4'>
              ReverseAds crawls the open internet every day to collect and update keyword information related to audience, search volume and rankings.
            </p>
            <p className='p_two mt-3 mt-md-4'>
              Our backend infrastructure securely processes first-party data to deliver a privacy-first ecosystem that integrates with the top three buying desks.
            </p>
            <p className='p_two mt-3 mt-md-4'>
              Improve keyword buying and campaign performance without relying on third-party cookies.
            </p>
            <button className={`btn_pink px-4 mt-3 mt-md-4`} style={{ background: btnBg }}>DOWNLOAD SOLUTION BROCHURE</button>
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
          <h4 className='t_two text-center mb-4 mb-md-5'>Our Solutions</h4>
          <div className='kn_div'>
            <div
              onClick={() => toggleTab(1)}
              className={toggleState === 1 ? 'kn_child kn_active kn_active_dmp' : 'kn_child kn_normal'}
              id="app"
            >
              <div>
                <div className='kn_icon_con'>
                  <img src={keywordDmp} alt="" />
                </div>
                <p className='p_two kn_p mb-0 mt-3 mt-md-4'>Keyword DMP</p>
              </div>
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={toggleState === 2 ? 'kn_child kn_active kn_active_cohort' : 'kn_child kn_normal'}
              id="dsp"
            >
              <div>
                <div className='kn_icon_con'>
                  <img src={keywordcohort} alt="" />
                </div>
                <p className='p_two kn_p mb-0 mt-3 mt-md-4'>Keyword Cohort</p>
              </div>
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={toggleState === 3 ? 'kn_child kn_active kn_active_block' : 'kn_child kn_normal'}
              id="com"
            >
              <div>
                <div className='kn_icon_con'>
                  <img src={blockId} alt="" />
                </div>
                <p className='p_two kn_p mb-0 mt-3 mt-md-4'>Blok ID</p>
              </div>
            </div>
            <div
              onClick={() => toggleTab(4)}
              className={toggleState === 4 ? 'kn_child kn_active kn_active_Decentralized' : 'kn_child kn_normal'}
              id="cost"
            >
              <div>
                <div className='kn_icon_con'>
                  <img src={decentralized} alt="" />
                </div>
                <p className='p_two kn_p mb-0 mt-3 mt-md-4'>Decentralized Search</p>
              </div>
            </div>
          </div>

          <div className={toggleState === 1 ? 'd-block kn_body kn_body_dmp' : 'd-none'}>
            <KeywordDmp btnBg={btnBg} />
          </div>

          <div className={toggleState === 2 ? 'd-block kn_body kn_body_coh' : 'd-none'}>
            <KeywordCoh btnBg={btnBg} />
          </div>

          <div className={toggleState === 3 ? 'd-block kn_body kn_body_blockId' : 'd-none'}>
            <BlokID btnBg={btnBg} />
          </div>

          <div className={toggleState === 4 ? 'd-block kn_body kn_body_dec' : 'd-none'}>
            <Decentralized btnBg={btnBg} />
          </div>


        </div>
      </div>
      {/* section2 */}
    </>
  )
}

export default KeywordDataCloud