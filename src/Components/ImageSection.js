import React from 'react';
import resume from "../Resume/Ben Jordan's Resume.pdf";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <p className="about-text">
                    <span>All my life I've had a passion for creating. </span>
                    Nothing excites me more than seeing a project I've spent many hours perfecting and testing come to life.
                    Coding, Web Design, and Music Production are without a doubt some of my favorite ways to express my
                    creativity. Whether necessary or not, I can spend endless amounts of time working on a program or
                    tweaking a song until it's perfect.
                    <br/><br/>
                    Along with software and audio engineering, I'm a member of RIT's varsity Track and Field team and
                    enjoy spending my time workingout and being outdoors.
                </p>
                <a style={{color: "var(--font-color2)"}} href={resume} download>
                    <button className="btn">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;
