import React from 'react'
import mike from '../assets/images/about/mike.png'
import jennifer from '../assets/images/about/jennifer-2.png'
import james from '../assets/images/about/james-2.png'
import john from '../assets/images/about/john-2.png'
import bill from '../assets/images/about/bill-2.png'
import nusli from '../assets/images/about/nusli-2.png'
import shawn from '../assets/images/about/shawn-2.png'
import Team from '../components/Api/Team'

function About() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* about_section_one start*/}
            <div className="about_sec_one">
                <div className="c_container">
                    <div className='as_part1'>
                        <div>
                            <h1 className='t_one'>WE ARE REVERSEADS</h1>
                            <h4 className='mt-3'>
                                Digital Advertising Company created as an evolution of search
                            </h4>
                            <p className='p_two mt-3'>
                                Our team is comprised of members from 27 countries and counting with offices in Phuket, Canada and The United States of America. Reach out to our team today to discuss how we can help your brand to be everywhere your customers go after search.
                            </p>
                        </div>
                    </div>

                    <h1 className='t_two text_pink text-center fw-900'>FOUNDER</h1>
                    <div className='as_part2'>
                        <div>
                            <h1 className='t_two'>Michael Hahn</h1>
                            <p className='p_two mt-3'>
                                Oracle & Valassis Big Data Executive. Founded & <br />
                                Sold two start ups. 20 years of big data and <br />
                                statistical analysis expertise.
                            </p>
                        </div>
                        <div>
                            <img src={mike} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* about_section_one end*/}

            {/* about_section_two start*/}
            {/* INVESTORS & ADVISORS */}
            <div className="sec_py">
                <div className="c_container">
                    <p className='p_one fw-bold text-center'>INVESTORS & ADVISORS</p>
                    <div className='investor_grid mt-5'>
                        <div>
                            <img src={jennifer} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                        <div>
                            <img src={james} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                        <div>
                            <img src={john} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                        <div>
                            <img src={bill} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                        <div>
                            <img src={nusli} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                        <div>
                            <img src={shawn} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* INVESTORS & ADVISORS */}

            {/* EXECUTIVES */}
            <div className="sec_py">
                <div className="c_container">
                    <p className='p_one fw-bold text-center'>EXECUTIVES</p>
                    <div className='investor_grid executives_grid mt-5'>
                        <div>
                            <img src={shawn} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                        <div>
                            <img src={shawn} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                        <div>
                            <img src={shawn} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                        <div>
                            <img src={shawn} className="team-img" alt="" />
                            <h1 className='team-name'>Jennifer Johnson</h1>
                            <p className='team-desc'>CEO of Franklin Templeton</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* EXECUTIVES */}

            {/* TEAM */}
            <div className="sec_py">
                <div className="c_container">
                    <p className='p_one fw-bold text-center'>TEAM</p>
                    <div className='investor_grid executives_grid mt-5'>

                        {
                            Team.map((t) =>
                                <div key={t.id}>
                                    <img src={`${t.imgUrl}`} className="team-img" alt="" />
                                    <h1 className='team-name'>{t.name}</h1>
                                    <p className='team-desc'>CEO of Franklin Templeton</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* TEAM */}

            {/* about_section_two end*/}
        </>
    )
}

export default About