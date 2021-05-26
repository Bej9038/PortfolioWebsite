import React from 'react';
import Title from "../Components/Title";
import { useForm, ValidationError } from '@formspree/react';

function ContactPage() {
    const [state, handleSubmit] = useForm("mqkwpwoa");
    if (state.succeeded) {
        document.getElementsByClassName('success')[0].style.display = "flex";
        document.getElementById('contact-form').reset();
    }
    return (
        <div className="ContactPage">
            <div className="contact-title">
                <Title title={'Contact'} progress={100}/>
            </div>
            <div className="sections">
                <div className="map-sect">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409184.4457547094!2d-77.01656342625483!3d42.317772110826056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d08182e0af88f7%3A0xae52768a56ece74!2sIthaca%2C%20NY!5e1!3m2!1sen!2sus!4v1621097926772!5m2!1sen!2sus"
                        width="450" height="450" title = "map" style={{border:0}} loading="lazy"/>
                </div>
                <div className="contact-sect">
                    <form autoComplete="off" onSubmit={handleSubmit} action="https://formspree.io/f/mqkwpwoa" method="post" id="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="label">Name</label>
                            <input autoComplete="new-password" type="text" id = "name" className="textio" name = "name" />
                        </div>
                        <input type="hidden" value = 'prayer'/>

                        <div className="form-group">
                            <label htmlFor="email" className="label">Email</label>
                            <input autoComplete="new-password" type="text" id="email" className="textio" name="email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="label">Message</label>
                            <textarea id="message" className="textio" name="message"/>
                        </div>
                        <button className='email-btn' type = "submit">Send</button>
                    </form>
                    <div className="success">Massage Received!</div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
