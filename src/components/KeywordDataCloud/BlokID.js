import React from 'react'
import keywordAppVideo from '../../assets/images/Keyword-data-cloud/Blok-ID.mp4'
import KCDownloadForm from '../DownloadForm/KCDownloadForm';

function BlokID(props) {
  const btnBg = props.btnBg;
  return (
    <>
      <div className='kn_grid'>
        <div className='kn_grid_child1'>
          <p className='p_two fw-bold'>An Attribution & Analytics Platform Built for
            Data-Driven Marketers.
          </p>
          <p className='p_two'>
            BlokID is a blockchain-powered marketing attribution platform designed to alleviate the non-legally binding privacy restrictions of the post-cookie and privacy-centric world. Now, users will be rewarded with cryptocurrency for the sharing of their data, using a solution that guarantees user privacy.
          </p>

          <p className='p_two fw-bold'>
            Why the Blok ID?
          </p>

          <p className='p_two'>
            As third-party cookies are going away, marketers need new solutions for secure attribution that maintain 100% privacy for users. By utilizing blockchain technology and smart contracts, BloKID replaces the third-party cookie with BlokID tokens. These tokens collect important information on user engagement and behavior to enable precise tracking of touchpoints, with transparent and immutable data sharing without the risk of fraud. <br /><br />

            BlokID respects international privacy laws and regulations such as GDPR, CCPA, and others that impact ad networks, publishers and advertisers.
          </p>

          <p className='p_two fw-bold'>
            How it works
          </p>

          <ul className='kc_ul kn_blockId_ul'>
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

export default BlokID