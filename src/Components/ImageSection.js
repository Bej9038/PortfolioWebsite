import React from 'react';
import resume from "../Downloads/Ben Jordan [June 2024].pdf";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <p className="about-text">
                    <span>I am a graduate of Cornell University working in industry as an AI/ML engineer.</span>
                    <br/><br/>
                    I enjoy learning about applied math, machine learning, and computer systems.
                    I also just like working on large software projects in general.
                    <br/><br/>
                    Outside of work, I like being active, visiting new places, and music.
                    As an undergrad, I was a member of RIT's varsity track and field team. I also completed a minor in Music along with my bachelors.
                </p>
                <a style={{color: "var(--font-color2)"}} href={resume} download>
                    <button className="btn">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;
