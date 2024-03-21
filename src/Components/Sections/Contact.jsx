import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import mail from "../../assets/mail.png";
import insta from "../../assets/instagram.png";

export default function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="contact" className="container mx-auto py-12 mt-16">
            <div data-aos="fade-up" data-aos-duration="500">
                <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
                <p className="text-lg text-center mx-8 text-gray-400 mb-8">Have any questions or inquiries? We'd love to hear from you!</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Send Us a Message Section */}
                <div className="w-3/4 md:w-1/2 mx-10 py-10 px-2 md:mx-32 md:px-10 md:py-10 bg-[#181d22]  rounded-lg " data-aos="fade-right" data-aos-duration="800">
                    <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                    <form className="justify-center px-3">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-left">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-2 rounded-lg bg-[#262b30] focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-left">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-[#262b30]  focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-left">What can we help you with?</label>
                            <textarea id="message" name="message" rows="4" placeholder="questions/queries" className="w-full px-4 py-2 rounded-lg bg-[#262b30]  focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-[#76ABAE] hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out md:w-40">Send</button>
                    </form>
                </div>

                {/* Contact Information Section */}
                <div className="w-full md:w-1/2 mx-4 md:mx-0">
                    <h3 className="text-2xl font-bold my-10 md:text-left text-center">Contact Information</h3>
                    <ul className="mb-2 text-left">
                        <li className="flex items-center gap-2">
                            <img src={location} alt="location" className="h-8 mr-2" />
                            <span>29 Main St, Lahore, Pakistan</span>
                        </li>
                        <li className="flex items-center mt-10  gap-2">
                            <img src={phone} alt="phone" className="h-8 mr-2" />
                            <span>+923219311113</span>
                        </li>
                        <li className="flex items-center mt-10 gap-2">
                            <img src={mail} alt="mail" className="h-8 mr-2" />
                            <span>explorease@gmail.com</span>
                        </li>
                        <li className="flex items-center mt-10 gap-2">
                            <img src={insta} alt="insta" className="h-8 mr-2" />
                            <span>explorease29</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
