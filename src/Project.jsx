import React from 'react'
import Header from './Header'
import Footer from './Footer'

const projects = [
    {
        title: "Litter Flipper",
        text: "Lorem Ipsum Dolor",
        image: "/images/projects/litter-flipper.jpg",
    },
    {
        title: "Litter Flipper",
        text: "Lorem Ipsum Dolor",
        image: "/images/projects/litter-flipper.jpg",
    },
    {
        title: "Litter Flipper",
        text: "Lorem Ipsum Dolor",
        image: "/images/projects/litter-flipper.jpg",
    },
    {
        title: "Litter Flipper",
        text: "Lorem Ipsum Dolor",
        image: "/images/projects/litter-flipper.jpg",
    },
];

const Project = () => {
    return (
        <div className='bg-[#EFF2F9]  w-screen'>
            <Header />
            <section classname="bg-[#EFF2F9] py-12 w-screen min-h-screen overflow-x-hidden">
                <div className='max-w-6xl mx-auto px-5'>
                    <div classname='relative mb-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden rounded-3xl p-6 md:p-10 bg-[#7692C4]'>
                        <div className='mt-6 md:mt-0 md:ml-8 shrink-0'>
                            <img
                                
                            />
                        </div>
                        <div className='max-w-2xl'>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Project
