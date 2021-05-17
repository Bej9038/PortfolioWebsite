import React from 'react';
import about from '../Images/v203-tang-07-workspace_2.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            {/*<div className="img">*/}
            {/*    <img src={about} alt=""/>*/}
            {/*</div>*/}
            <div className="about-info">
                <p className="about-text">
                    Ben
                </p>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection;
