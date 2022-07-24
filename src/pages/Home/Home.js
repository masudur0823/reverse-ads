import React from 'react'
import keywordNetworkHome from '../../assets/images/homePage/keyword-network-home.png'
import keywordDataCloud from '../../assets/images/homePage/keyword-data-cloud.png'
import videoImg from '../../assets/images/homePage/world-reach-section.mp4'
import accountteam from '../../assets/images/homePage/account-team.png'

function Home() {
  return (
    <>
      {/* home_sec_one start*/}
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

              <button className='btn_pink mt-3 mt-md-4'>Read More</button>

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

        </div>
      </div>
      {/*home_sec_seven end*/}

      {/*home_sec_eight start*/}
      <div className="home_sec_eight image_bg">
        <div className="c_container sec_py">

        </div>
      </div>
      {/*home_sec_eight end*/}
    </>
  )
}

export default Home