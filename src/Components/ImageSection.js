import React from 'react';
import resume from "../Downloads/Ben Jordan [Feb 2024 MLE].pdf";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <p className="about-text">
                    <span>I am a recent graduate of cornell university working in industry as a machine learning engineer.</span>
                    <br/><br/>
                    I enjoy learning about applied math, machine learning, and computer systems.
                    I also just like working on software projects in general.
                    <br/><br/>
                    Outside of work, I love being active, visiting new places, and music.
                    As an undergrad, I was a member of RIT's varsity track and field team.
                </p>
                <a style={{color: "var(--font-color2)"}} href={resume} download>
                    <button className="btn">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;
