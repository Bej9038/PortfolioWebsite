import React from 'react';
import profilePic from "../Images/IMG_0426.JPEG"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="image-content">
                <div className="about-info">
                    <p className="about-text">
                        <span>
                        I am currently an engineer at Amazon Ads on the Brand Lift team (Measurement, Ad Tech, Data Science org).
                        Previously, I worked on computer vision at KLA and at Northrop Grumman's Autonomous Intelligence and Robotics Lab.</span>
                        <br/><br/>
                        The areas within ML that I'm most interested in are flow/diffusion models, reinforcement learning, and ML hardware & frameworks.
                        <br/><br/>
                        In my free time, I'm working on Entropy Audio, a project which aims to redefine how composers design sound.
                    </p>
                </div>
                <div className="about-img-wrapper">
                    <img
                        src={profilePic}
                        alt="Benjamin Jordan headshot"
                        className="about-img"
                    />
                </div>
            </div>
            {/*<a className="download-link" style={{color: "var(--font-color2)"}} href={resume} download>*/}
            {/*    <button className="btn">Download CV</button>*/}
            {/*</a>*/}
        </div>
    )
}

export default ImageSection;
