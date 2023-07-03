import React from 'react';
import resume from "../Downloads/Ben Jordan [July 2023 Resume] V2.pdf";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <p className="about-text">
                    <span>Nothing excites me more than seeing a project I've spent months working on come to life.</span>
                    <br/><br/>

                    Software engineering and music are without a doubt my favorite ways to express this passion.
                    At the moment, I'm most interested in machine learning and its applications in audio,
                    but I also enjoy learning about topics such as computer vision, computer systems, and graph theory.
                    <br/><br/>
                    Outside of academics, I love being active, visiting new places, and music.
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
