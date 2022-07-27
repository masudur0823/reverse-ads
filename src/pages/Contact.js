import React from 'react'
import { FaFacebookF } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <div className='pt_medium pb-5'>
                <div className="c_container">
                    <div className="row m-0 g-3 g-md-5">
                        <div className="col-lg-6">
                            <div>
                                <h1 className='t_one fw-900'>CONNECT WITH US</h1>
                                <p className='p_two mt-4'>
                                    The ReverseAds team of data intelligence and ad tech specialists is ready to deliver scalable and transformative privacy-first advertising solutions. <br /> <br />
                                    <span className='fw-bold'>SINGAPORE</span> (Headquarters) 
                                    <br />
                                    531A Upper Cross Street #04-95 Hong Lim Complex, Singapore 051531
                                    <br />
                                    <br />
                                    <span className='fw-bold'>THAILAND</span>
                                    <br />
                                    41/7-8 Moo1, Rawai, Muang Phuket, Phuket, Thailand 83130
                                    <br />
                                    <br />
                                    <span className='fw-bold'>Contact</span><br />
                                    info@reverseads.com <br />
                                    (800) 982-1439 +66 <br />
                                    (0) 63 081 5945 
                                    <br />
                                    <br />
                                    <span className='fw-bold'>Follow Us</span><br />

                                    <div className='contact_social'>
                                        <a href="#!"><FaFacebookF className='cs_icon'/></a>
                                        <a href="#!"><FaFacebookF className='cs_icon'/></a>
                                        <a href="#!"><FaFacebookF className='cs_icon'/></a>
                                        <a href="#!"><FaFacebookF className='cs_icon'/></a>
                                        <a href="#!"><FaFacebookF className='cs_icon'/></a>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <div className="contact_one">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" placeholder='First Name*' className='input_style_one w-100' />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Last Name*' className='input_style_one w-100' />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" placeholder='Email*' className='input_style_one w-100' />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Company Name*' className='input_style_one w-100' />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Country*' className='input_style_one w-100' />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" placeholder="How can we help you?*" className='input_style_one w-100' />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="" id="" cols="30" rows="4" placeholder='Your message' className='input_style_one w-100'></textarea>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn_pink btn_hover2 mt-3 mt-md-4'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact