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
            imgUrl:require('../../assets/images/staff_images/Anantasak  Wareesri,Junior Graphic Designer.png'),
            name: 'Anantasak  Wareesri',
            designation: 'Junior Graphic Designer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Ananyaporn Borvorndetchanakul,HR Generalist.png'),
            name: 'Ananyaporn Borvorndetchanakul',
            designation: 'HR Generalist'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Andres  Javier Vallejo Marquez,Head of Product.png'),
            name: 'Andres  Javier Vallejo Marquez',
            designation: 'Head of Product'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Ankit  V Rai,Growth Specialist.png'),
            name: 'Ankit  V Rai',
            designation: 'Growth Specialist'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Aphida Phetpraphai,Product Specialist .png'),
            name: 'Aphida Phetpraphai',
            designation: 'Product Specialist '
        },
        {
            imgUrl:require('../../assets/images/staff_images/Ashvindren Nair,Growth Manager.png'),
            name: 'Ashvindren Nair',
            designation: 'Growth Manager'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Bualuang Saenjaroenrungrod,Pre-Sale Consultant.png'),
            name: 'Bualuang Saenjaroenrungrod',
            designation: 'Pre-Sale Consultant'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Budsaya Khongwut,Reporting and Analytics manager.png'),
            name: 'Budsaya Khongwut',
            designation: 'Reporting and Analytics manager'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Bussabamintra  Khongpan,Pre-Sale Consultant.png'),
            name: 'Bussabamintra  Khongpan',
            designation: 'Pre-Sale Consultant'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Butsakorn Kuntanapong,Data and Reseach Associate.png'),
            name: 'Butsakorn Kuntanapong',
            designation: 'Data and Reseach Associate'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Chonlatan Thongtan,Senior Graphic Designer.png'),
            name: 'Chonlatan Thongtan',
            designation: 'Senior Graphic Designer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Christopher Martin,Chief Operating Officer.png'),
            name: 'Christopher Martin',
            designation: 'Chief Operating Officer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Daniel Anthony Harvey,Head of Growth.png'),
            name: 'Daniel Anthony Harvey',
            designation: 'Head of Growth'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Daolikhit Songphakdi,HR Administrator.png'),
            name: 'Daolikhit Songphakdi',
            designation: 'HR Administrator'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Decha Osharos,Account Manager.png'),
            name: 'Decha Osharos',
            designation: 'Account Manager'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Denis Ackerknecht,UX UI Designer.png'),
            name: 'Denis Ackerknecht',
            designation: 'UX UI Designer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Devy Jones,Group AP Supervisor..png'),
            name: 'Devy Jones',
            designation: 'Group AP Supervisor'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Doenpen Surapong, Media Buyer.png'),
            name: 'Doenpen Surapong',
            designation: 'Media Buyer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Franco Alaniz,Product Specialist.png'),
            name: 'Franco Alaniz',
            designation: 'Product Specialist'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Grissagorn  Arunutisa,Graphic Designer .png'),
            name: 'Grissagorn  Arunutisa',
            designation: 'Graphic Designer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Hamza Atouani,Head of Account Management.png'),
            name: 'Hamza Atouani',
            designation: 'Head of Account Management'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Hana Piyasomboon,Media Buyer.png'),
            name: 'Hana Piyasomboon',
            designation: 'Media Buyer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Jason Mclellan,Product Specialist .png'),
            name: 'Jason Mclellan',
            designation: 'Product Specialist '
        },
        {
            imgUrl:require('../../assets/images/staff_images/Jebraeel Ahmed,Account Manager.png'),
            name: 'Jebraeel Ahmed',
            designation: 'Account Manager'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Jerry Minoret, Product Specialist .png'),
            name: 'Jerry Minoret',
            designation: 'Product Specialist'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Jon Rice,CEO.png'),
            name: 'Jon Rice',
            designation: 'CEO'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Jyoutee Shahi, Reporting Controller.png'),
            name: 'Jyoutee Shahi',
            designation: 'Reporting Controller'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Kaloyan Veselinov Banev,Senior Technical Support Engineer. .png'),
            name: 'Kaloyan Veselinov Banev',
            designation: 'Senior Technical Support Engineer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Kanokwan Rattanaubon,Reporting Admin.png'),
            name: 'Kanokwan Rattanaubon',
            designation: 'Reporting Admin'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Kirana Wimonchailerk,HR Specialist .png'),
            name: 'Kirana Wimonchailerk',
            designation: 'HR Specialist'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Kitibodee Prajumkhaiy, Motion Graphic designer.png'),
            name: 'Kitibodee Prajumkhaiy',
            designation: 'Motion Graphic designer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Lester Joseph Lubi, AR - Accountant.png'),
            name: 'Lester Joseph Lubi',
            designation: 'AR - Accountant'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Ma. Gerpie Nicole Lubi,Head of Client Service.png'),
            name: 'Ma. Gerpie Nicole Lubi',
            designation: 'Head of Client Service'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Mark Pettigrew, Head of Sales.png'),
            name: 'Mark Pettigrew',
            designation: 'Head of Sales'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Marynold Castillejos Zafra,Project Coordinator.png'),
            name: 'Marynold Castillejos Zafra',
            designation: 'Project Coordinator'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Metawarin  Pornnopawat,Reporting Administrator.png'),
            name: 'Metawarin  Pornnopawat',
            designation: 'Reporting Administrator'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Michael Orbeta Zafra, Partnership manager.png'),
            name: 'Michael Orbeta Zafra',
            designation: 'Partnership manager'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Nattanun Phuakdee,Pre-Sale Consultant.png'),
            name: 'Nattanun Phuakdee',
            designation: 'Pre-Sale Consultant'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Nisar Ahmad Wani,Partnership Manager.png'),
            name: 'Nisar Ahmad Wani',
            designation: 'Partnership Manager'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Noelle Christina  Ala Marfil,Account Manager.png'),
            name: 'Noelle Christina  Ala Marfil',
            designation: 'Account Manager'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Pamela Cunningham,Product Specialist .png'),
            name: '/Pamela Cunningham',
            designation: 'Product Specialist '
        },
        {
            imgUrl:require('../../assets/images/staff_images/Pantira Mepattana,Media Buyer.png'),
            name: 'Pantira Mepattana',
            designation: 'Media Buyer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Parinyaporn Boonyiam,Media Buyer.png'),
            name: 'Parinyaporn Boonyiam',
            designation: 'Media Buyer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Phataravadee Taskumjorn,Pre-Sale Consultant.png'),
            name: 'Phataravadee Taskumjorn',
            designation: 'Pre-Sale Consultant'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Pornthep Anantaphum,Junior Graphic Designer.png'),
            name: 'Pornthep Anantaphum',
            designation: 'Junior Graphic Designer'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Prapussorn Srisai,Client Service Representative.png'),
            name: 'Prapussorn Srisai',
            designation: 'Client Service Representative'
        },
        {
            imgUrl:require('../../assets/images/staff_images/Prathompong Pattaramahasaed,Media Buyer.png'),
            name: 'Prathompong Pattaramahasaed',
            designation: 'Media Buyer'
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