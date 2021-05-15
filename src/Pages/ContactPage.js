import React from 'react';
import Title from "../Components/Title";


function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="contact-title">
                <Title title={'Contact'}/>
            </div>
            <div className="map-sect">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505746.051922547!2d-76.557864484513!3d42.514715067193926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d08182e0af88f7%3A0xae52768a56ece74!2sIthaca%2C%20NY!5e0!3m2!1sen!2sus!4v1621088118525!5m2!1sen!2sus"
                    width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"/>
            </div>
            <div className="contact-sect">

            </div>
        </div>
    );
}

export default ContactPage;
