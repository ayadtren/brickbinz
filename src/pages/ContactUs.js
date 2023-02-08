import React from 'react';
import "./contact.scss"



const ContactUs = () => {
    return (
       <div className="contact-us">
            <h1 className="contact-us__title">Contact Us</h1>
            <h2 className="contact-us__subtitle">Have Questions or Suggestions?</h2>
            <p className="contact-us__text">We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
            <form className="contact-us__form">
                <div className="contact-us__input-container">
                    <label htmlFor="name" className="contact-us__label">Name</label>
                    <input type="text" className="contact-us__input" id="name" placeholder="Enter your name" />
                </div>
                <div className="contact-us__input-container">
                    <label htmlFor="email" className="contact-us__label">Email address</label>
                    <input type="email" className="contact-us__input" id="email" placeholder="Enter your email" />
                </div>
                <div className="contact-us__message-container">
                    <label htmlFor="message" className="contact-us__label">Message</label>
                    <textarea className="contact-us__message" id="message" placeholder="Enter your message" row="4"></textarea>
                </div>
                <button type="submit" className="contact-us__submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;