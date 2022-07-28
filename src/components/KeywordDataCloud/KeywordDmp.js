import React from 'react'
import keywordAppVideo from '../../assets/images/Keyword-data-cloud/keyword-dmp.mp4'
import KCDownloadForm from '../DownloadForm/KCDownloadForm';

function KeywordDmp(props) {
  const btnBg = props.btnBg;
  return (
    <>
      <div className='kn_grid'>
        <div className='kn_grid_child1'>
          <p className='p_two fw-bold'>Maximize your advertising reach with access to
            1<sup>st</sup> party data and expansive ad networks
          </p>
          <p className='p_two'>
            We account for all significant factors that contribute to creating a comprehensive network of relevant DSP, SSP, publisher websites and more.
          </p>

          <p className='p_two fw-bold'>
            Why the Keyword DMP?
          </p>

          <p className='p_two'>
            With 20 years of relationship building, The Keyword Network has created a unique reach which connects premium publishers, mobile apps, direct advertisers, and 50+ DSPs, providing brand-safe premium traffic across 190 countries worldwide. <br /> <br />

            Includes over 500 ad networks, ad exchanges, demand-side platforms (DSP), supply-side platforms (SSP), and direct publisher relationships with the largest online brands in the world. All networks providing a 80% or greater match back rate to ReverseAds PII onboarded data are selected for maximum scalable impressions, clicks and conversions.
          </p>

          <p className='p_two fw-bold'>
            How it works
          </p>

          <ul className='kc_ul kn_dmp_ul'>
            <li className='p_one'>API interfaces with theTradeDesk, Xandr, DV360 and other leading buying desks.</li>
            <li className='p_one'>Using first party data and expansive ad networks.</li>
            <li className='p_one'>Customized campaign with diverse ad channels and ad formats.</li>
            <li className='p_one'>Connect with over 1 billion open web users worldwide.</li>
            <li className='p_one'>Engage with your target audience online across their smartphones and the open web.</li>
          </ul>

        </div>
        <div className='kn_grid_child2'>
          <video loop autoPlay muted>
            <source
              src={keywordAppVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <KCDownloadForm btnBg={btnBg} />
    </>
  )
}

export default KeywordDmp