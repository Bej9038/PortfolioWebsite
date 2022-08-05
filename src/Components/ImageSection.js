import React from 'react';
import resume from "../Downloads/Ben Jordan [August 2022 Resume].pdf";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <p className="about-text">
                    <span>All my life I've had a passion for creating. </span>
                    Nothing excites me more than seeing a project I've spent weeks working on and perfecting come to life.
                    Coding and music production are without a doubt some of my favorite ways to express my
                    creativity. I can spend endless amounts of time working on a program or
                    tweaking a song until it's perfect.
                    <br/><br/>
                    I'm also a member of RIT's varsity Track and Field team and
                    enjoy spending my time working out and being outdoors.
                </p>
                <a style={{color: "var(--font-color2)"}} href={resume} download>
                    <button className="btn">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;
