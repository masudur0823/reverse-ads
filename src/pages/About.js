import React from 'react'
import mike from '../assets/images/about/mike.png'

function About() {
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
            {/* team */}
            <div className="sec_py">
                <p className='p_one fw-bold text-center'>INVESTORS & ADVISORS</p>
            </div>
            {/* team */}
            {/* about_section_two end*/}
        </>
    )
}

export default About