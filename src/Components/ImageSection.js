import React from 'react';
import resume from "../Downloads/Benjamin_Jordan_Resume_2025.pdf";
import profilePic from "../Images/IMG_0426.JPEG"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="image-content">
                <div className="about-info">
                    <p className="about-text">
                        <span>I am a graduate of Cornell & RIT currently working as an engineer at Amazon.</span>
                        <br/><br/>
                        In my current job, I work on large scale software systems with project focus on complex spark ETL jobs and ML ops.
                        <br/><br/>
                        I also have domain experience in machine learning from my masters as well as from my previous role and internship working as an MLE.
                        <br/><br/>
                        Outside of work, I like to work on my project, EntropyAudio, that aims to redefine how we create sound for music composition.
                        I also love trying new food, cool architecture, and keeping up with the latest trends in machine learning and machine learning systems.
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
            <a className="download-link" style={{color: "var(--font-color2)"}} href={resume} download>
                <button className="btn">Download CV</button>
            </a>
        </div>
    )
}

export default ImageSection;
