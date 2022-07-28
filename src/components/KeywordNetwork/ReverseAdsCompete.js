import React from 'react'
import DownloadForm from '../DownloadForm/DownloadForm'
import keywordVideo from '../../assets/images/keyword-network/reverseads-compete-3d.mp4'

function ReverseAdsCompete(props) {
  const btnBg = props.btnBg;
  return (
    <>
      <div className='kn_grid'>
        <div className='kn_grid_child1'>
          <p className='p_two fw-bold'>
            Target the exact buyers searching and engaging with
            your top competitors and leading industry websites
          </p>
          <p className='p_two'>
            Reach these buyers before your competitors with multiple conversion opportunities across the open internet.
          </p>

          <p className='p_two fw-bold'>
            Why the ReverseAds Compete?
          </p>

          <p className='p_two'>
            There is a world of data fueling your competition. ReverseAds Compete empowers businesses to access this data and engage visitors that interact with competitor’s content. As these qualified buyers contemplate their purchase decision, your brand can be front and center, giving you the opportunity to convert these buyers before the competition.
          </p>

          <p className='p_two fw-bold'>
            How it works
          </p>

          <ul className='kc_ul kn_rac_ul'>
            <li className='p_one'>ReverseAds pinpoints your competition, acquires data from each website identified, and uploads this data to our network for keyword mapping. </li>
            <li className='p_one'>We identify the keywords that drive 90% of your competitors’ traffic, assigning them to the qualified buyers that interact with their content.</li>
            <li className='p_one'>Qualified buyers are served advertisements across all relevant platforms and sites, giving you multiple opportunities to convert.</li>
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

export default ReverseAdsCompete