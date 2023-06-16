import React from 'react';
import resume from "../Downloads/Ben Jordan [June 2023 Resume] V2.pdf";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <p className="about-text">
                    <span>All my life I've had a passion for creating. </span>
                    <br/>
                    Nothing excites me more than seeing a project I've spent months working on come to life.
                    Software engineering and music production are without a doubt my favorite ways to express this passion.
                    In school, I enjoy learning about CS topics such as machine learning, computer systems, computer vision, graph theory, and more.
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
