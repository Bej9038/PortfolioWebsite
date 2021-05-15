import React from 'react';

function Skills({skill, progress}) {
    return (
        <div className="Skills">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progressbar">
                            <div className="inner-progress" style={{width: progress}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
