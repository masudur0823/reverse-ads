import React from 'react'
import keywordAppVideo from '../../assets/images/Keyword-data-cloud/keyword-cohort-3d.mp4'
import KCDownloadForm from '../DownloadForm/KCDownloadForm';

function KeywordCoh(props) {
  const btnBg = props.btnBg;
  return (
    <>
      <div className='kn_grid'>
        <div className='kn_grid_child1'>
          <p className='p_two fw-bold'>
            Forget about behavioral cohorts, and harness the
            power of keyword data.
          </p>
          <p className='p_two'>
            Connect your ads with highly targeted consumers based
            on their engagement with keywords.
          </p>

          <p className='p_two'>
            ReverseAds pinpoints the highest-ranking clusters
            keywords, delivering accuracy around what people are
            thinking about buying.
          </p>

          <p className='p_two fw-bold'>
            How it works
          </p>

          <ul className='kc_ul kn_coh_ul'>
            <li className='p_one'>AI-Powered Keyword Algorithm to find common keywords.</li>
            <li className='p_one'>Keyword Cohorts to “Pre-categorize” Websites.</li>
            <li className='p_one'>Contextual Audience targeting based on these Cohorts.</li>
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

export default KeywordCoh