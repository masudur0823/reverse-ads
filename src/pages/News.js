import React from 'react'
import cardImg1 from '../assets/images/news/Neuromarketing-Advertising-Strategies.jpg'
import { Link } from 'react-router-dom'

function News() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* News section1 start */}
            <div className="news_sec_one image_bg">
                <div className="c_container">
                    <div className="col-md-5">
                        <h1 className='t_one fw-900'>NEWS</h1>
                        <h4 className='news_sub_title mt-2 mt-md-4'>
                            Your customer’s mindset is the key to summer sales
                        </h4>

                        <p className='p_one mt-2 mt-md-4'>
                            The real-time mindset of a customer dramatically influences their decisions. The content they engage with, the content they share, and the purchases they make always align with their current state of mind.
                        </p>

                        <a href="https://reverseads.com/blog/your-customers-mindset-is-the-key-to-summer-sales/" target='_blank' rel="noreferrer">
                            <button className='btn_pink btn_hover2 mt-3 mt-md-4'>Read More</button>
                        </a>

                    </div>
                </div>
            </div>
            {/* News section1 end */}

            {/* News card area start */}
            <div className="newsCard_main">
                <div className="c_container sec_py">
                    <div className='news_Card_grid'>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='news_Card'>
                            <img src={cardImg1} alt="" />
                            <div className='newsCard_body p-3'>
                                <h4>5 Neuromarketing Advertising Strategies That Will Create The Highest Impact For Your Brand</h4>
                                <p className='mt-2'>
                                    Every B2B marketer knows that guesswork is not enough to get results from their ad campaigns…
                                </p>

                                <div>
                                    <Link to="/newsdetails"><button className='btn_purple'>Read More</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* pagination start */}
                    <div className="_pagination">
                        <ul className='list-unstyled mt-3 mt-md-4 text-end'>
                            <li className='ms-0'> &#60; Previous</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>...</li>
                            <li>10</li>
                            <li className='me-0'> Next &#62;</li>
                        </ul>
                    </div>
                    {/* pagination end */}

                </div>
            </div>
            {/* News card area end */}
        </>
    )
}

export default News