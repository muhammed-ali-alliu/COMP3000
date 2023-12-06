import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact-Block">
            <h1 className="contact_header">Contact Us</h1>
            <form className="contact_form">
                <div className="form_group">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form_group">
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form_group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
                </div>
                <div className="form_group">
                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="submit_button">Submit</button>
            </form>
        </div>
    );
};

export default Contact;