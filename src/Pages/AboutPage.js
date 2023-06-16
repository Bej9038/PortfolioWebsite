import React from 'react';
import Title from "../Components/Title";
import Skills from "../Components/Skills";
import ImageSection from "../Components/ImageSection";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} progress={25}/>
            <ImageSection />
            <Title title={'Skills'} progress={50}/>
            <div className="skills-group">
                <Skills skill = {'C#'} progress={'90%'}/>
                <Skills skill = {'Java'} progress={'90%'}/>
                <Skills skill = {'JavaScript'} progress={'90%'}/>
                <Skills skill = {'C++'} progress={'90%'}/>
                <Skills skill = {'C'} progress={'90%'}/>
                <Skills skill = {'Python'} progress={'80%'}/>
                <Skills skill = {'NumPy'} progress={'80%'}/>
                <Skills skill = {'PyTorch'} progress={'80%'}/>
                <Skills skill = {'Angular'} progress={'70%'}/>
                <Skills skill = {'SQL'} progress={'60%'}/>
            </div>
        </div>
    );
}

export default AboutPage;
