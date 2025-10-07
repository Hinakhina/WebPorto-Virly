import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Contact = () => {
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        fetch(form.action, {
        method: "POST",
        body: data,
        })
        .then(() => {
            setIsSent(true);
            form.reset(); // clear inputs
        })
        .catch(() => alert("Something went wrong. Please try again later."));
    }
      
    return (
        <div>
            <Header />
            <section className="mt-12 py-12 px-5 md:pl-30 md:pr-33">
                <div className="max-w-6xl mx-auto">
                    <div className="relative mb-12 flex justify-center rounded-3xl p-3 md:p-5 bg-gradient-to-b from-[#96B1DE] via-[#7692C4] to-[#6A739C]">
                        <span className="text-white text-2xl md:text-4xl font-bold">
                            Contact Me
                        </span>
                    </div>

                    <form
                    action="https://formsubmit.co/virly.k.arista@gmail.com"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    >
                    {/* Hidden config */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" className="hidden" />

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                        name="name"
                        required
                        className="mt-1 w-full rounded-lg border px-3 py-2"
                        placeholder="Sender's name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 w-full rounded-lg border px-3 py-2"
                        placeholder="example@example.com"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-medium">Subject</label>
                        <input
                        name="_subject"
                        required
                        className="mt-1 w-full rounded-lg border px-3 py-2"
                        placeholder="Subject of your message"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium">Message</label>
                        <textarea
                        name="message"
                        required
                        rows="5"
                        className="mt-1 w-full rounded-lg border px-3 py-2"
                        placeholder="Write your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-lg bg-[#6A739C] text-white px-5 py-5 font-2xl font-bold hover:opacity-80 w-full"
                    >
                        Send Message
                    </button>
                    </form>

                    {/* ✅ Popup after send */}
                    {isSent && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-sm">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Thank you for sending!
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Your message will be read shortly.
                        </p>
                        <button
                            onClick={() => setIsSent(false)}
                            className="mt-4 bg-[#6A739C] text-white px-4 py-2 rounded-lg hover:opacity-80"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    )}

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
