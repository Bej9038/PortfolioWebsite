import React from 'react';
import resume from "../Downloads/Ben Jordan [September 2022 Resume] V3.pdf";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <p className="about-text">
                    <span>All my life I've had a passion for creating. </span>
                    Nothing excites me more than seeing a project I've spent months working on and perfecting come to life.
                    Programming and music production are without a doubt some of my favorite ways to express my
                    creativity. I'm also fond of CS topics such as computer architecture, real-world applications of graphs,
                    machine learning, and programming languages. Learning about and applying CS knowledge is extremely
                    fulfilling for me.
                    <br/><br/>
                    Outside of academics, I'm a member of RIT's varsity track and field team and
                    like to spend my time being active and enjoying the outdoors.
                </p>
                <a style={{color: "var(--font-color2)"}} href={resume} download>
                    <button className="btn">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;
