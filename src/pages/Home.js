import React from 'react'
import keywordNetworkHome from '../assets/images/homePage/keyword-network-home.png'
import keywordDataCloud from '../assets/images/homePage/keyword-data-cloud.png'
import heroVideo from '../assets/images/homePage/hero-video.mp4'
import videoImg from '../assets/images/homePage/world-reach-section.mp4'
import google from '../assets/images/homePage/google-homescreen.png'
import aboutHome from '../assets/images/homePage/about-us-home.png'
import NewsCard from '../components/NewsCard/NewsCard'
import hCardImg1 from '../assets/images/homePage/AI-Driven-icon.svg'
import hCardImg2 from '../assets/images/homePage/Privacy-Compliant-icon.svg'
import hCardImg3 from '../assets/images/homePage/Cookie-less-icon.svg'

function Home() {
  return (
    <>
      {/* google page*/}
      <img src={google} className="google_homescreen" alt="" />
      {/* google page*/}
      {/* home_sec_one start*/}
      <div className="home_sec_one image_bg">
        <video loop autoPlay muted>
          <source
            src={heroVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className='home_sec_first'>
          <h1 className='home_sec_one_title'>The Keyword NeTWORK</h1>
        </div>

        <div className='home_sec_second'>
          <div className='c_container'>
            <div className='text-center'>
              <h1 className='t_one text-white'>
                The Only Predictive Roadmap <br />
                to the Open Internet
              </h1>

              <p className='p_one text-white mt-2 mt-md-4'>
                ReverseAds data mines over 1 million sites across the open internet every hour.
              </p>
              <p className='p_one text-white mt-2 mt-md-4'>
                Our Keyword Assignment Algorithm analyzes every word, image and video,<br className='d-none d-sm-block' /> and assigns a value  br based on search engagement metrics and IAB Industry<br className='d-none d-sm-block' /> category. Whenever a consumer engages with these keywords, we determine<br className='d-none d-sm-block' /> their intent to purchase a specific product or service, allowing brands to<br className='d-none d-sm-block' /> deliver valuable insight at the ideal moment.
              </p>

              <div className='home_sec_second_grid mt-3 mt-md-5 mb-3 mb-md-5 '>
                <div>
                  <img src={hCardImg1} alt="" />
                  <p className='p_one text-white mt-2 mt-md-3'>A.I. Driven</p>
                </div>
                <div>
                  <img src={hCardImg2} alt="" />
                  <p className='p_one text-white mt-2 mt-md-3'>Privacy Compliant</p>
                </div>
                <div>
                  <img src={hCardImg3} alt="" />
                  <p className='p_one text-white mt-2 mt-md-3'>Cookie-less</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* home_sec_one end*/}

      {/*home_sec_two start*/}
      <div className="home_sec_two image_bg  d-flex align-items-center">
        <div className="c_container">
          <div className="row m-0">
            <div className="col-sm-6">
              <div>
                <h1 className='t_one'>
                  The Power of <br />
                  the Open Internet
                </h1>
                <p className='p_one mt-3'>
                  Scale your advertising across the fastest growing part of the internet, where consumers have the most receptive mindset for advertising. <br /> <br />
                  Data Mining Keywords on 1 Trillion Pages.
                </p>

                <button className='btn_pink btn_hover1 mt-3 mt-md-4'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*home_sec_two end*/}

      {/*home_sec_three start*/}
      <div className="home_sec_three image_bg">
        <div className='h_s_three_child h_s_three_child1'>
          <div>
            <h1 className='t_one'>The Keyword <br /> Network</h1>
            <p className='p_one mt-3'>
              The Next Generation of <br />
              Open Internet Advertising
            </p>
            <img src={keywordNetworkHome} className="h_s_t_img mt-3" alt="" />
            <button className='btn_pink mt-3 mt-md-4'>Read More</button>
          </div>
        </div>
        <div className='h_s_three_child h_s_three_child2'>
          <div>
            <h1 className='t_one'>
              The Keyword <br />
              Data Cloud
            </h1>
            <p className='p_one mt-3'>
              Access the largest keyword data <br /> resource in the world
            </p>
            <img src={keywordDataCloud} className="h_s_t_img mt-3" alt="" />
            <button className='btn_pink mt-3 mt-md-4'>Read More</button>
          </div>
        </div>
      </div>
      {/*home_sec_three end*/}

      {/*home_sec_four start*/}
      <div className="home_sec_four image_bg text-center d-flex align-items-center justify-content-center sec_py">
        <div className='c_container'>
          <h1 className='t_one text-white'>The Importance of Keywords</h1>
          <p className='h_s_f_subDesc mt-2 mt-md-4 text-white'>Consumers search for keywords everytime they have a need online</p>
          <p className='p_one text-white'>
            The Keyword Network matches advertisements with users based <br className='d-none d-sm-block' />
            on their engagement with keywords on the billions of pages that <br className='d-none d-sm-block' />
            we are data mining for real-time content.
          </p>
        </div>
      </div>
      {/*home_sec_four end*/}

      {/*home_sec_five start*/}
      <div className="home_sec_five image_bg">
        <video loop autoPlay muted>
          <source
            src={videoImg}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="c_container sec_py">
          <div className="row m-0">
            <div className="col-lg-7 col-md-6"></div>
            <div className="col-lg-5 col-md-6">
              <h1 className='t_one text-white'>
                Reach, Scale <br />
                and Credibility
              </h1>
              <p className='p_one text-white mt-2 mt-md-4'>
                We have harnessed the power of the open web and created an ever-reaching ecosystem with our clients, partners and networks, to bring scale and reach like no other Ad product.
              </p>
              <table className='home_sec_five_table text-white mt-2 mt-md-4'>
                <tr>
                  <td className='text_green fw-bold'>Total stats of all clients </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Impressions:  </td>
                  <td>1,596,079,945</td>
                </tr>
                <tr>
                  <td>Clicks:  </td>
                  <td>5,968,638</td>
                </tr>
                <tr>
                  <td>Visitors more than 22 seconds:  </td>
                  <td>68,461</td>
                </tr>
                <tr>
                  <td>Conversions:  </td>
                  <td>5,388</td>
                </tr>
                <tr>
                  <td>CTR:  </td>
                  <td>0.37</td>
                </tr>
              </table>

              <table className='home_sec_five_table text-white mt-2 mt-md-4'>
                <tr>
                  <td className='text_green fw-bold'>Stats for </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Total number of partners:  </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Total number of DSPs:  </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Total number of clients:  </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Total number of publishers:  </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Total number of campaigns:  </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Total number of countries:   </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Total number of languages:    </td>
                  <td>100</td>
                </tr>
              </table>

              <button className='btn_pink btn_hover1 mt-3 mt-md-4'>Read More</button>

            </div>
          </div>
        </div>
      </div>
      {/*home_sec_five end*/}

      {/*home_sec_six start*/}
      <div className="home_sec_six image_bg">
        <div className='home_sec_six_child1'>
          {/* <img src={accountteam} alt="" /> */}
        </div>
        <div className='home_sec_six_child2'>
          <div>
            <h1 className='t_one text_purple'>Account team</h1>
            <p className='p_one fst-italic mt-2 mt-md-4 home_sec_six_i_text'>
              “At ReverseAds, we believe business is about
              providing excellent customer service. That’s why we have a team of highly experienced Account Managers to help guide you in implementing effective advertising strategies to drive
              great results.”
            </p>
            <p className='p_one fw-bold'>— Chris Martin, COO at ReverseAds</p>
          </div>
        </div>
      </div>
      {/*home_sec_six end*/}

      {/*home_sec_seven start*/}
      <div className="home_sec_seven image_bg">
        <div className="c_container sec_py">
          <div className="row m-0 flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <h1 className='t_one mt-4 mt-lg-0'>About us</h1>

              <div className="row g-4 mt-0 mt-md-4">
                <div className="col-md-6">
                  <div>
                    <p className='p_one text_pink fw-bold mb-1 mb-md-4'>MISSION</p>
                    <p>
                      To restore balance to the advertising industry and create a freer and more open internet through privacy-forward AdTech solutions.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <p className='p_one text_pink fw-bold mb-1 mb-md-4'>CULTURE</p>
                    <p>
                      We strive for innovation, equality and diversity of thought, always working toward our collective mission while delivering our clients solutions that outperform all competitors.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <p className='p_one text_pink fw-bold mb-1 mb-md-4'>TEAM</p>
                    <p>
                      ReverseAds is a growing team of international advertising, big data and technology professionals. Headquartered in Phuket Thailand, our team works with global leaders across industries to deploy best-in-class advertising campaigns.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <p className='p_one text_pink fw-bold mb-1 mb-md-4'>INVESTORS</p>
                    <p>
                      We are backed by some of the world’s most successful and respected business leaders, with a shared vision of a free and open internet for all.
                    </p>
                  </div>
                </div>
              </div>

              <button className='btn_pink btn_hover1 mt-3 mt-md-4'>Read More</button>

            </div>
            <div className="col-lg-6">
              <img src={aboutHome} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*home_sec_seven end*/}

      {/*home_sec_eight start*/}
      <div className="home_sec_eight image_bg">
        <div className="c_container sec_py">
          <div className="col-lg-5 col-md-6">
            <h1 className='t_one text-white'>NEWS</h1>
            <p className='p_one text-white mt-2 mt-lg-4'>
              Explore the list of global brands that have worked with ReverseAds to improve their ad campaigns at a fraction of the cost of traditional search ads.
            </p>

            <button className='btn_pink btn_hover1 mt-2 mt-lg-4'>Read More</button>

          </div>
          <div className='NewsCard_main'>
            <NewsCard />
          </div>
        </div>
      </div>
      {/*home_sec_eight end*/}
    </>
  )
}

export default Home