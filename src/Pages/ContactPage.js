import React from 'react';
import Title from "../Components/Title";

function ContactPage() {
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

                    <form autoComplete="off" action="" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="label">Name</label>
                            <input type="text" id = "name" onFocus={event =>
                            {
                                for(let i = 0; i < 2; i++)
                                {
                                    event.target.autoComplete = "off";
                                }
                            }} className="textio" name = "name" />
                        </div>
                        <input type="hidden" value = 'prayer'/>

                        <div className="form-group">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="text" id="email" onFocus={event =>
                            {
                                for(let i = 0; i < 2; i++)
                                {
                                    event.target.autoComplete = "off";
                                }
                            }} className="textio" name="email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="label">Message</label>
                            <input type="text" id="message" onFocus={event =>
                            {
                                for(let i = 0; i < 2; i++)
                                {
                                    event.target.autoComplete = "off";
                                }
                            }} className="textio" name="message"/>
                        </div>
                        <button type = "submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
