import React from 'react'
import KeywordCohortImg from '../assets/images/KeywordCohort.png'
import kc_img1 from '../assets/images/Card/PersonalizedAds.svg'

function KeywordCohort() {
  return (
    <>
      <div className='sec_mt-100'>
        <div className="c_container">
          <div className="row m-0 flex-column-reverse flex-lg-row">

            <div className="col-lg-6">
              <h1 className='t_one fw-900'>Keyword <br className='d-none d-lg-block' /> Cohort</h1>
              <p className='p_one fw-bold mt-2 mt-md-4'>
                In this post-cookie world, advertisers need new solutions for privacy-forward audience targeting. The ReverseAds Keyword Cohort connects your advertising with highly targeted consumers based on their unique interests and behaviors.
              </p>

              <p className='p_one mt-2 mt-md-4'>
                The ReverseAds Keyword Assignment Amdorithm “pre-categorizes” web pages based on specific topics and device IDs based on cohorts, or groups of people with related attributes or behavior.
              </p>

              <ul className='p_one mt-2 mt-md-4'>
                <li>
                  Identify consumer personas and serve dynamic ads
                  with varying offers across different channels at
                  different times.
                </li>
                <li>
                  Always ensure total privacy, because unlike other
                  cohort solutions, we never place information on the
                  user’s browser.
                </li>
                <li>
                  Target a small number of keywords, but reach a
                  wide range of users that all search for the same
                  topic using different words.
                </li>
                <li>
                  Reach untapped audiences and reduce accidental
                  clicks to run more cost-effective campaigns.
                </li>
              </ul>

              <p className='p_one fw-bold mt-2 mt-md-4'>Why are we different?</p>

              <div className='kc_card_one'>
                <div>
                  <img src={kc_img1} alt="" />
                </div>
                <div>
                  <p className='p_one'>
                    <span className='kc_card_one_title'>Personalized Ads</span>
                    Hyper-targeted Ads using Cohorts
                    ReverseAds (The Keyword Network) revolutionary keyword algorithm can use Cohorts to “pre-categorize” the web pages based on topics (keywords) and the Device IDs to serve a precise ad targeting like no other advertising platform.
                  </p>
                </div>
              </div>

              <div className='kc_card_one'>
                <div>
                  <img src={kc_img1} alt="" />
                </div>
                <div>
                  <p className='p_one'>
                    <span className='kc_card_one_title'>Personalized Ads</span>
                    Hyper-targeted Ads using Cohorts
                    ReverseAds (The Keyword Network) revolutionary keyword algorithm can use Cohorts to “pre-categorize” the web pages based on topics (keywords) and the Device IDs to serve a precise ad targeting like no other advertising platform.
                  </p>
                </div>
              </div>

              <div className='kc_card_one'>
                <div>
                  <img src={kc_img1} alt="" />
                </div>
                <div>
                  <p className='p_one'>
                    <span className='kc_card_one_title'>Personalized Ads</span>
                    Hyper-targeted Ads using Cohorts
                    ReverseAds (The Keyword Network) revolutionary keyword algorithm can use Cohorts to “pre-categorize” the web pages based on topics (keywords) and the Device IDs to serve a precise ad targeting like no other advertising platform.
                  </p>
                </div>
              </div>

              <div className='kc_card_one'>
                <div>
                  <img src={kc_img1} alt="" />
                </div>
                <div>
                  <p className='p_one'>
                    <span className='kc_card_one_title'>Personalized Ads</span>
                    Hyper-targeted Ads using Cohorts
                    ReverseAds (The Keyword Network) revolutionary keyword algorithm can use Cohorts to “pre-categorize” the web pages based on topics (keywords) and the Device IDs to serve a precise ad targeting like no other advertising platform.
                  </p>
                </div>
              </div>

              <p className='p_one fw-bold mt-2 mt-md-4'>How it works</p>

              <ul className='kc_ul'>
                <li className='p_one'>AI-Powered Keyword Algorithm to find common keywords.</li>
                <li className='p_one'>Keyword Cohorts to “Pre-categorize” Websites.</li>
                <li className='p_one'>Contextual Audience targeting based on these Cohorts.</li>
              </ul>

              <div className='p-4'></div>

            </div>

            <div className="col-lg-6 position-relative text-center text-md-end">
              <img src={KeywordCohortImg} className="sticky_img " alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default KeywordCohort