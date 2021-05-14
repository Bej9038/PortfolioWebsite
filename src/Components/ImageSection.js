import React from 'react';
import about from '../Images/v203-tang-07-workspace_2.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>
                    I am
                    <span> Ben Jordan</span>
                </h4>
                <p className="about-text">
                    words
                </p>
                <div className="about-details">
                    <div className="left-section">

                    </div>
                    <div className="right-section">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
