import React from "react";
import './index.css';


function Contact() {
    return(
        <>
        <div className="contact-page">
            <div className="contact-page-info col">
                <div className="contact-page-info-left">
                    <div className="contact-page-item col">
                        <div className="row">
                            <i className="fa fa-phone contact-icon"></i>
                            <h4>Call Me</h4>
                        </div>
                        <p>Phone : +251 91 297 8713</p>
                    </div>
                    <hr />
                    <div className="contact-page-item col">
                        <div className="row">
                            <i className="fa-regular fa-envelope contact-icon"></i>
                            <h4>Write To Me</h4>
                        </div>
                        <p>fill out the form and send an email</p>
                        <p>Email : yosefsahle48@gmail.com</p>
                    </div>
                </div>
                <div className="contact-page-right">
                    <form action="" className="col">
                        <div className="contact-page-form-user-info row">
                            <input type="text" placeholder="Your Name"/>
                            <input type="text" placeholder="Your Email"/>
                            <input type="text" placeholder="Your Phone"/>
                        </div>
                        <div className="contact-page-form-user-message">
                            <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
                        </div>
                        <div className="contact-page-form-button">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;