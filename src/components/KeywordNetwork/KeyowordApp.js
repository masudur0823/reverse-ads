import React from 'react'
import DownloadForm from '../DownloadForm/DownloadForm'
import keywordAppVideo from '../../assets/images/keyword-network/keyword-app.mp4'

function KeyowordApp(props) {
    const btnBg = props.btnBg;
    return (
        <>
            <div className='kn_grid'>
                <div className='kn_grid_child1'>
                    <p className='p_two fw-bold'>A Privacy-forward and Transparent Ad Solution
                        Delivering Guaranteed Results for Lower Costs.
                    </p>
                    <p className='p_two'>
                        Small and medium sized businesses need the same powerful advertising solutions as the biggest and most dominant brands. The Keyword App delivers access to the world’s largest keyword marketplace, empowering SMBs to deploy robust multi-channel advertising campaigns across billions of pages on the open internet.
                    </p>

                    <p className='p_two fw-bold'>
                        Why the Keyword App?
                    </p>

                    <p className='p_two'>
                        Easily create, deploy and optimize ad campaigns with an entire world of inventory and data at your fingertips. Securely target precise audiences, as ReverseAds maps your buyer’s journey based on their engagement with keywords. Automatically bid on websites and publishers that your audience frequents, so that you can achieve your goals with a higher ROI.
                    </p>

                    <p className='p_two'>
                        The Keyword App integrates with all DMPs and enables the purchase of ad inventories from 500+ ad networks, ad exchanges and 50+ DSPs and SSPs.
                    </p>

                    <p className='p_two fw-bold'>A Privacy-forward and Transparent Ad Solution
                        Delivering Guaranteed Results for Lower Costs.
                    </p>
                    <p className='p_two'>
                        Small and medium sized businesses need the same powerful advertising solutions as the biggest and most dominant brands. The Keyword App delivers access to the world’s largest keyword marketplace, empowering SMBs to deploy robust multi-channel advertising campaigns across billions of pages on the open internet.
                    </p>

                    <p className='p_two fw-bold'>
                        Why the Keyword App?
                    </p>

                    <p className='p_two'>
                        Easily create, deploy and optimize ad campaigns with an entire world of inventory and data at your fingertips. Securely target precise audiences, as ReverseAds maps your buyer’s journey based on their engagement with keywords. Automatically bid on websites and publishers that your audience frequents, so that you can achieve your goals with a higher ROI.
                    </p>

                    <p className='p_two'>
                        The Keyword App integrates with all DMPs and enables the purchase of ad inventories from 500+ ad networks, ad exchanges and 50+ DSPs and SSPs.
                    </p>

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
            <DownloadForm btnBg={btnBg} />
        </>
    )
}

export default KeyowordApp