// src/components/ContactPage.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const onInputChangeHandler = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const { name, email, phone } = formData;

        if (name && email && phone.length === 10) {
            if (window.confirm('Please check the data once again before submission. If cross checked, please press "OK"')) {
                const scriptURL = "https://script.google.com/macros/s/AKfycbw-NQkz3wuleRTTZWV003BbsGM76uVUbZhd6Ts4_NUoU2ZaHWdW0Mx38cCGgUcbbCU/exec";
                try {
                    const form = new FormData();
                    for (const key in formData) {
                        form.append(key, formData[key]);
                    }
                    const response = await fetch(scriptURL, { method: "POST", body: form });
                    if (response.ok) {
                        // alert("Congratulations! You will receive a call from us.");
                        setFormData({
                            name: '',
                            email: '',
                            subject: '',
                            phone: '',
                            message: ''
                        });

                        // Redirect to WhatsApp
                        const whatsappMessage = `*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
                        const whatsappURL = `https://api.whatsapp.com/send?phone=917303012394&text=${whatsappMessage}`;
                        window.open(whatsappURL, '_blank');
                    } else {
                        console.error("Error!", response.statusText);
                    }
                } catch (error) {
                    console.error("Error!", error.message);
                }
            } else {
                document.getElementById("snd").innerHTML = "Resubmit!";
            }
        }
    };

    return (
        <section className="py-16 min-h-screen">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 p-4">
                        <div className="contact-info bg-[#171717] p-8 text-center mb-4">
                            <div className="contact-info-icon mb-4">
                                <FontAwesomeIcon icon={faMapMarked} className="text-4xl text-[#ED1C24]" />
                            </div>
                            <div className="contact-info-text">
                                <h2 className="text-white text-2xl font-semibold mb-2">Address</h2>
                                <span className="text-gray-400 block">01 Jp Colony, Near St.Paul School, Raisen Road Anand Nagar Bhopal, Madhya Pradesh, Pin code - 462022</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="contact-info bg-[#171717] p-8 text-center mb-4">
                            <div className="contact-info-icon mb-4">
                                <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-[#ED1C24]" />
                            </div>
                            <div className="contact-info-text">
                                <h2 className="text-white text-2xl font-semibold mb-2">E-mail</h2>
                                <span className="text-gray-400 block">sachin@mpfilms.co.in</span>
                                <span className="text-gray-400 block">official.mpfilms@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="contact-info bg-[#171717] p-8 text-center mb-4">
                            <div className="contact-info-icon mb-4">
                                <FontAwesomeIcon icon={faPhone} className="text-4xl text-[#ED1C24]" />
                            </div>
                            <div className="contact-info-text">
                                <h2 className="text-white text-2xl font-semibold mb-2">Phone</h2>
                                <span className="text-gray-400 block">(+91) 730-301-2394</span>
                                <span className="text-gray-400 block">(+91) 799-993-5339</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-2/3 p-4">
                        <div className="contact-page-form">
                            <h2 className="text-blue-900 text-2xl font-bold mb-4">Get in Touch</h2>
                            <form onSubmit={submitHandler} className="bg-white p-6 rounded shadow">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <input onChange={onInputChangeHandler} type="text" placeholder="Your Name" name="name" value={formData.name} required className="w-full p-3 bg-gray-100 border border-gray-200 rounded" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <input onChange={onInputChangeHandler} type="email" placeholder="E-mail" name="email" value={formData.email} required className="w-full p-3 bg-gray-100 border border-gray-200 rounded" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <input onChange={onInputChangeHandler} type="text" placeholder="Phone Number" name="phone" value={formData.phone} required className="w-full p-3 bg-gray-100 border border-gray-200 rounded" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <input onChange={onInputChangeHandler} type="text" placeholder="Subject" name="subject" value={formData.subject} required className="w-full p-3 bg-gray-100 border border-gray-200 rounded" />
                                    </div>
                                    <div className="w-full px-2 mb-4">
                                        <textarea onChange={onInputChangeHandler} placeholder="Write Your Message" name="message" value={formData.message} required className="w-full p-3 bg-gray-100 border border-gray-200 rounded h-28"></textarea>
                                    </div>
                                    <div className="w-full px-2 text-center">
                                        <input type="submit" value="Send Now" className="bg-transparent border text-black border-black font-semibold py-3 px-6 rounded hover:border-0 hover:text-white hover:bg-[#ED1C24] transition duration-300" />
                                    </div>
                                </div>
                            </form>
                            <div id="snd"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="contact-page-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1149625.7361135922!2d77.17579539433915!3d23.52920018749559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42695e6222fb%3A0xb4c2e1e420e4387a!2sMadhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1654693849845!5m2!1sen!2sus"
                                width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
