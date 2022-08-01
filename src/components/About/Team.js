import React from 'react'

function Team() {
    const team = [
        {
            imgUrl: require('../../assets/images/staff_images/Alma_Bautista_Vargas,Head_of_LATAM Sales.png'),
            name: 'Alma Bautista Vargas',
            designation: 'Head_of_LATAM Sales'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Amine Belkhayat  Zoukari,Head of Industry Cannabis.png'),
            name: 'Amine Belkhayat  Zoukari',
            designation: 'Head of Industry Cannabis'
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        },
        {
            imgUrl:require('../../assets/images/staff_images/'),
            name: '',
            designation: ''
        }
    ]

    return (
        <div className="sec_py">
            <div className="c_container">
                <p className='p_one fw-bold text-center'>TEAM</p>
                <div className='investor_grid executives_grid mt-5'>

                    {
                        team.map((t) => {
                            return (
                                <div key={t.id}>
                                    <img src={t.imgUrl} className="team-img" alt="" />
                                    <h1 className='team-name'>{t.name}</h1>
                                    <p className='team-desc'>{t.designation}</p>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Team