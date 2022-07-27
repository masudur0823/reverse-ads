import React from 'react'
import NewsImg from '../assets/images/news/Neuromarketing-Digital-Advertising.jpg'
import recentImg from '../assets/images/news/Marketing-Secret.jpg'

function NewsDetails() {
    return (
        <>
            <div className="newsDetails pb-5">
                <div className="c_container">
                    <p className='p_two fw-bold'>ReverseAds News</p>

                    <div className="NewsDetails_layout">
                        <div className="newsD_child">
                            <div>
                                <h1 className='t_two text_purple'>
                                    Understanding Your Customer’s Brain on Advertising
                                </h1>
                                <p className='p_two fw-semibold mt-2 mt-md-3 mb-0'>June 1, 2022</p>
                                <img src={NewsImg} className="w-100 py-2 py-md-4" alt="" />

                                <p className='p_two fst-italic'>
                                    Have you considered the mindset of your advertising audience? How do consumers think about engagement across the internet and what inspires them to make specific decisions? Consumer behavior data and artificial intelligence are being combined to improve the advertising experience for consumers and campaign performance for advertisers.
                                </p>

                                <p className='p_two fw-bold mt-4 mb-1'>The Average Consumer</p>
                                <p className='p_two'>
                                    Our real-time mindset dramatically impacts our decisions. The content we engage with, the content we share and the purchases we make are all informed by our current state of mind.
                                </p>

                                <p className='p_two fw-bold mt-4 mb-1'>Brands & Advertisers</p>
                                <p className='p_two'>
                                    It is our mission to connect with as many new audiences as possible and inspire them to engage. The content that we create for this purpose must be designed and deployed in a way that appeals to the right people at their most receptive moments.
                                </p>

                                <p className='p_two fw-bold mt-4 mb-1'>Focusing on the Brain</p>
                                <p className='p_two'>
                                    Advancements in technology allow us to unlock new information on the brain of advertising audiences, and deploy campaigns that improve experience and increase engagement with your brand. With the right tools, businesses of all sizes can run intelligent campaigns across the open internet that appeal to audiences in a personalized manner by leaning on learnings found in neuromarketing research.
                                </p>

                                <p className='p_two fst-italic'>
                                    So pour yourself a drink, and get ready to dig into your customer’s brain on advertising.
                                </p>


                                <p className='p_two text_purple fw-bold mt-4 mb-1'>What is Neuromarketing?</p>
                                <p className='p_two'>
                                    “Neuromarketing” is a relatively new term that was coined by renowned Harvard Business School Professor, Gerald Zaltman, in 2002. Zaltman’s experiments in the 1990’s around the human subconscious and emotional response to images paved the way for advertising strategy at hundreds of major companies including Coca-Cola, General Motors, Nestle and beyond.
                                </p>
                                <p className='p_two mt-4'>
                                    Today, neuromarketing has become known as a field of commercial marketing that studies consumer cognitive, sensorimotor and affective response (AR) to marketing stimuli. While research and strategy in this area has changed over the last 20 years, so has technology. The current state of data and online engagement habits is allowing brands to improve communication with consumers on both a conscious and unconscious level.
                                </p>
                                <p className='p_two mt-4'>
                                    Thanks to neuroscience, we can pinpoint precise reactions to advertising content that prompt emotional responses, activate memories and draw attention. Artificial intelligence and machine learning allow us to use this neuroscience data to determine exact elements that make an ad effective in order to deepen impact and boost ROI.
                                </p>


                                <p className='p_two text_purple fw-bold mt-4 mb-1'>Neuromarketing Tools</p>
                                <p className='p_two'>
                                    Collecting and measuring neuromarketing data requires a few common tools to scan the brain, assess neural activity, track physiological patterns and measure eye movement.
                                </p>

                                <p className='p_two text_purple fw-bold mt-4 mb-1'>Historic Neuromarketing Findings</p>
                                <p className='p_two'>
                                    All of the tools outlined above make it possible to unlock valuable lessons on consumer engagement. Researchers have found that engaging content triggers similar responses across most individuals, creating a signature that can identify a successful ad. These signatures can be broken down into four primary categories:
                                </p>
                                <p className='p_two mt-4'>
                                    Emotional: Ad creates positive emotional associations <br />
                                    Attention: Ad uses captivating branding to stimulate the brain <br />
                                    Memory: Ad inspires attention and recall of information, shaping and sustaining memories <br />
                                    Valuation: Ad clarifies the cost vs. benefit analysis at the core of decision making
                                    A few select studies standout as important moments in the field of neuromarketing.
                                </p>

                                <p className='p_two text_purple fw-bold mt-4 mb-1'>The Future of Neuromarketing</p>
                                <p className='p_two'>
                                    Having expanded in scope since the term was coined, neuromarketing is continuing to advance thanks to emerging technologies. Artificial intelligence is becoming a great tool to further this advancement due to the ability to sort billions of data points and illuminate patterns. As digital consumers, data is left in the wake of our online path from social media to e-commerce sites to platform memberships and online services we’ve signed up for.
                                </p>
                                <p className='p_two mt-4'>
                                    We are in a prime position to improve the marketing experience for advertisers and consumers. Advertising experiences will become more personalized and enjoyable, tailoring the path to purchase for receptive and happy audiences. Brands will have new ways of serving content to accurately matched audiences, increasing engagement and conversions.
                                </p>

                                <p className='p_two text_purple fw-bold mt-4 mb-1'>The Social Media Mindset</p>
                                <p className='p_two'>
                                    For many internet users, the instinctual engagement happens on our favorite social media platforms. We unconsciously take out our phones to scroll Instagram, Twitter or TikTok and get that dopamine hit, consistently allowing us to detach from our surroundings for the moment and enter a limitless digital world.
                                </p>
                                <p className='p_two mt-4'>
                                    The addictive nature of these platforms has us spending hours of our day opening them up and passing time, but still we don’t trust them. Most of the time spent there is passive engagement that requires little critical thought, as content is served to us on a silver platter that uses neuromarketing to inspire engagement at any cost.
                                </p>

                                <p className='p_two text_purple fw-bold mt-4 mb-1'>The Open Internet Mindset</p>
                                <p className='p_two'>
                                    The term “Open Internet” might still be new to many marketers, but it is quickly becoming a defining factor in advertising strategies across industries. The term refers to a fundamental network and a concept of neutrality that’s applied to ensure services are free from biases that could slow or block sites in order to favor certain participants.
                                </p>

                            </div>
                        </div>
                        <div className="newsD_child">

                            {/* Catagory */}
                            <div className='dropdown'>
                                <button className='Credibility_btn dropdown-toggle p_one w-100 border-0 rounded-0' data-bs-toggle="dropdown" aria-expanded="false">Category</button>
                                <ul className="dropdown-menu Credibility_btn_ul">
                                    <li><a href="#!">Category</a></li>
                                    <li><a href="#!">Company Newsletter</a></li>
                                    <li><a href="#!">Company Updates</a></li>
                                    <li><a href="#!">Customer’s Story</a></li>
                                    <li><a href="#!">Data and Trends</a></li>
                                    <li><a href="#!">Online Marketing and Advertising</a></li>
                                    <li><a href="#!">Press Releases</a></li>
                                    <li><a href="#!">Privacy and Data Protection</a></li>
                                    <li><a href="#!">Product Updates</a></li>
                                    <li><a href="#!">Uncategorized</a></li>
                                    <li><a href="#!">Webinars</a></li>
                                </ul>
                            </div>

                            <p className='p_one fw-bold mt-4'>Understanding Your Customer’s Brain on Advertising</p>

                            <ul className='list-unstyled p_one nd_cat_ul'>
                                <li><a href="#!" className='text-decoration-none text_blue'>What is Neuromarketing?</a></li>
                                <li><a href="#!" className='text-decoration-none text_blue'>Neuromarketing Tools</a></li>
                                <li><a href="#!" className='text-decoration-none text_blue'>Historic Neuromarketing Findings</a></li>
                                <li><a href="#!" className='text-decoration-none text_blue'>The Future of Neuromarketing</a></li>
                                <li><a href="#!" className='text-decoration-none text_blue'>The Social Media Mindset</a></li>
                                <li><a href="#!" className='text-decoration-none text_blue'>The Open Internet Mindset</a></li>
                            </ul>
                            {/* Catagory */}

                            {/* recent post */}
                            <p className='p_one fw-bold mt-4 mb-0'>Recent Post</p>
                            <div className='nw_recent_post'>
                                <div>
                                    <h4 className='p_two text_pink'>Building Your Brand’s Diehard Fans with…</h4>
                                    <p className='nw_date'>May 31, 2022</p>
                                </div>
                                <img src={recentImg} alt="" />
                            </div>
                            <div className='nw_recent_post'>
                                <div>
                                    <h4 className='p_two text_pink'>Building Your Brand’s Diehard Fans with…</h4>
                                    <p className='nw_date'>May 31, 2022</p>
                                </div>
                                <img src={recentImg} alt="" />
                            </div>
                            <div className='nw_recent_post'>
                                <div>
                                    <h4 className='p_two text_pink'>Building Your Brand’s Diehard Fans with…</h4>
                                    <p className='nw_date'>May 31, 2022</p>
                                </div>
                                <img src={recentImg} alt="" />
                            </div>
                            <div className='nw_recent_post'>
                                <div>
                                    <h4 className='p_two text_pink'>Building Your Brand’s Diehard Fans with…</h4>
                                    <p className='nw_date'>May 31, 2022</p>
                                </div>
                                <img src={recentImg} alt="" />
                            </div>
                            <div className='nw_recent_post'>
                                <div>
                                    <h4 className='p_two text_pink'>Building Your Brand’s Diehard Fans with…</h4>
                                    <p className='nw_date'>May 31, 2022</p>
                                </div>
                                <img src={recentImg} alt="" />
                            </div>
                            {/* recent post */}

                            {/* subscribe */}
                            <p className='p_one fw-bold mt-4 mb-0'>Be first to receive our insights:</p>

                            <form action="" onSubmit={(e)=> console.log(e.defaultprevented)}>
                                <input type="text" className='w-100 input_style_one mt-4' placeholder='Email*' />
                                <input type="text" className='w-100 input_style_one mt-4' placeholder='First name' />
                                <input type="text" className='w-100 input_style_one mt-4' placeholder='Last name' />

                                <label className="nd_check_container mt-4">I agree to share my information with you and Understand it will be used as described in ReverseAds’ <a href="#!" className='text_purple fw-bold text-decoration-none'>privacy policy. *</a>
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <button className='btn_pink btn_hover2 w-100 mt-2 mt-md-3 mt-lg-4'>Subscribe</button>
                            </form>
                            {/* subscribe */}

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewsDetails