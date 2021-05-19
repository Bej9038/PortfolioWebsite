import React from 'react';

function Title({title, progress}) {
    let a = "title25 .9s ease forwards";
    if(progress === 50)
    {
        a = "title50 .9s ease forwards";
    }
    else if(progress === 75)
    {
        a = "title75 .9s ease forwards"
    }
    else if(progress === 100)
    {
        a = "title100 .9s ease forwards"
    }


    return (
        <div className="Title">
            <div className="page-bar">
                <div className="page-bar-progress" style={{animation: a}}/>
            </div>
            <h3>
                {title}
                <span>{title}</span>
            </h3>
        </div>
    );
}

export default Title;
