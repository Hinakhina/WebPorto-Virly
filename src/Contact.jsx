import React from 'react'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Contact = () => {
    return (
        <div>
            <Header />
            <section className="py-12 px-5 md:pl-30 md:pr-33">
                <div className="max-w-6xl mx-auto">
                    <div className="relative mb-12 flex justify-center rounded-3xl p-3 md:p-5 bg-gradient-to-b from-[#96B1DE] via-[#7692C4] to-[#6A739C]">
                        <span className="text-white text-2xl md:text-4xl font-bold">
                            Contact Me
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
