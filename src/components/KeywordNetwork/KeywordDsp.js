import React from 'react'
import DownloadForm from '../DownloadForm/DownloadForm'
import keywordVideo from '../../assets/images/keyword-network/reverseads-keyword-DSP-3d.mp4'

function KeywordDsp(props) {
  const btnBg = props.btnBg;
  return (
    <>
      <div className='kn_grid'>
        <div className='kn_grid_child1'>
          <p className='p_two fw-bold'>
            Accomplish your marketing objective with the
            Keyword Demand-Side Platform
          </p>
          <p className='p_two'>
            The ReverseAds industry-trusted demand-side platform boosts your media buying with high-quality traffic at scale with minimal friction.
          </p>

          <p className='p_two fw-bold'>
            Why the Keyword DSP?
          </p>

          <p className='p_two'>
            Quickly set up campaigns and manage them with ease. ReverseAds is mapping 1 trillion pages of the open internet, empowering you to automatically bid for the websites and publishers that your target audience is most likely to visit. Integrated with all DMPs and ad exchanges, our privacy-forward transparent network delivers guaranteed results for lower media costs.  <br /> <br />

            We deliver an entire world of inventory and data, making precise targeting possible as we map your buyer’s journey based on their engagement with keywords. Brands can purchase and manage ad inventories from 500+ ad networks, ad exchanges and 50+ Demand-side platforms (DSP), supply-side platforms (SSP).  This can make your digital ad experience easier and more cost-effective.
          </p>

          <p className='p_two fw-bold'>
            How it works
          </p>

          <ul className='kc_ul kn_dsp_ul'>
            <li className='p_one'>Personalized advertising experience based on in-house big data insights</li>
            <li className='p_one'>Reach quality traffic at scale through premium DMPs and Ad Exchanges</li>
            <li className='p_one'>Achieving your goal with higher ROI at lower media cost</li>
            <li className='p_one'>Privacy-forward transparent network delivering guaranteed results</li>
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

export default KeywordDsp