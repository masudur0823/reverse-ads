import React from 'react'
import DownloadForm from '../DownloadForm/DownloadForm'
import keywordVideo from '../../assets/images/keyword-network/cost-per-action-3d.mp4'

function CostPerAction(props) {
  const btnBg = props.btnBg;
  return (
    <>
      <div className='kn_grid'>
        <div className='kn_grid_child1'>
          <p className='p_two fw-bold'>
            On average, it takes 22.18 seconds for a user to form
            intent towards the brand on a website.
          </p>
          <p className='p_two'>
            Only pay for these website visitors that demonstrate intent to purchase.
          </p>

          <p className='p_two fw-bold'>
            Why the Cost Per Action?
          </p>

          <p className='p_two'>
            For the first time, you will only pay for visitors that are truly interested in your products and services. Run privacy-forward campaigns that target users based on geography, keyword engagement, and target audience demographics, and stop paying for click fraud, hard bounces, and accidental clicks.   <br /> <br />

            We guarantee a specific number of high intent visitors to your site, with a fixed price for the entire duration of the campaign and a minimum of 200% traffic increase compared to the same budget spent on Google Search Ads.
          </p>

          <p className='p_two fw-bold'>
            How it works
          </p>

          <p className='p_two'>
            With ReverseAds Cost Per Action, you will only pay when
            a user…
          </p>

          <ul className='kc_ul kn_cpa_ul'>
            <li className='p_one'>Spends longer than 22 seconds on your page. </li>
            <li className='p_one'>Visits 3 pages across your site.</li>
            <li className='p_one'>Reaches 100% scroll depth.</li>
          </ul>

        </div>
        <div className='kn_grid_child2'>
          <video loop autoPlay muted>
            <source
              src={keywordVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <DownloadForm btnBg={btnBg} />
    </>
  )
}

export default CostPerAction