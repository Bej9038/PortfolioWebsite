import React from 'react';

function Title({title, progress}) {
    return (
        <div className="Title">
            <div className="page-bar">
                <div className="page-bar-progress" style={{width: progress}}/>
            </div>
            <h3>
                {title}
                <span>{title}</span>
            </h3>
        </div>
    );
}

export default Title;
