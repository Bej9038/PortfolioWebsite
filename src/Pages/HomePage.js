import React from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

function HomePage()
{
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm
                    <span> Ben Jordan.</span>
                </h1>
                <p className="home-sub-text">
                    I'm a 4th year Software and Audio Engineer from Rochester Institute of Technology
                </p>
                <div className="icons">
                    <Link className="icon-link">
                        <FontAwesomeIcon icon = {faGithub} className="icon"/>
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon = {faLinkedin} className="icon"/>
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon = {faSoundcloud} className="icon"/>
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon = {faYoutube} className="icon"/>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default HomePage
