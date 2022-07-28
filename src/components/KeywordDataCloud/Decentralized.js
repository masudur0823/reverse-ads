import React from 'react'
import keywordAppVideo from '../../assets/images/Keyword-data-cloud/decentralized-search.mp4'
import KCDownloadForm from '../DownloadForm/KCDownloadForm';

function Decentralized(props) {
  const btnBg = props.btnBg;
  return (
    <>
      <div className='kn_grid'>
        <div className='kn_grid_child1'>
          <p className='p_two fw-bold'>A privacy-first advertising solution built for the
            decentralized and cookie-less future of the
            open internet.
          </p>
          <p className='p_two'>
            Tap into the open internet with a new kind of advertising campaign.
          </p>

          <p className='p_two fw-bold'>
            Why Decentralized Search?
          </p>

          <p className='p_two'>
            Instead of serving ads, deliver personalized product and service options based on keyword usage, geolocation, and interests. <br /><br />

            Use AI to pinpoint where most internet users spend their time actively researching products or services aligned with your offerings. As soon as a consumer makes their choice, they are directed to the business’s landing page to engage and convert.<br /><br />

            This transforms ads from a nuisance that consumers avoid to a source of knowledge that consumers desire.
          </p>

          <p className='p_two fw-bold'>
            How it works
          </p>

          <ul className='kc_ul kn_dec_ul'>
            <li className='p_one'>Map the Open Internet based on engagement with keywords.</li>
            <li className='p_one'>Use predictive A.I. to identify sites that are common decision points, where consumers look for information on purchase options.</li>
            <li className='p_one'>Place hyper specific decision engines that assist consumers with their choices on specific products and services.</li>
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

export default Decentralized