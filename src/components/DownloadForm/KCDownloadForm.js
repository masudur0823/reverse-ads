import React from 'react'

function KCDownloadForm(props) {
    const btnBg = props.btnBg;
    return (
        <>
            <form action="" onSubmit={(e) => console.log(e.preventDefault)}>
                <div className='download_main'>
                    <div>
                        <h1>DOWNLOAD SOLUTION BROCHURE</h1>
                        <p>
                            Discover why marketers love Reverse Search Ads and how we have been helping brands to enhance their business growth.
                        </p>

                        <input type="text" placeholder='Email' className='input_style_one w-100 mt-3 mt-md-4' name="" id="" />
                        <input type="text" placeholder='First name' className='input_style_one w-100 mt-3 mt-md-4' name="" id="" />
                        <input type="text" placeholder='Company name' className='input_style_one w-100 mt-3 mt-md-4' name="" id="" />
                        <input type="text" placeholder='Country' className='input_style_one w-100 mt-3 mt-md-4' name="" id="" />

                        <div className='text-center'>
                            <button className={`btn_pink btn_hover2 mt-3 mt-md-4 px-3`} style={{background:btnBg}}>Download Brochure</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default KCDownloadForm