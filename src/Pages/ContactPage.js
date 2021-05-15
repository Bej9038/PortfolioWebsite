import React from 'react';
import Title from "../Components/Title";


function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="contact-title">
                <Title title={'Contact'}/>
            </div>
            <div className="sections">
                <div className="map-sect">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409184.4457547094!2d-77.01656342625483!3d42.317772110826056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d08182e0af88f7%3A0xae52768a56ece74!2sIthaca%2C%20NY!5e1!3m2!1sen!2sus!4v1621097926772!5m2!1sen!2sus"
                        width="600" height="450" title = "map" style={{border:0}} allowFullScreen="false" loading="lazy"/>
                </div>
                <div className="contact-sect">
                    <form action="" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id = "name" name = "name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message" name="message"/>
                        </div>

                        <button type = "submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
