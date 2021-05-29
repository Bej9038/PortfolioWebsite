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
                <Skills skill = {'Web Audio API'} progress={'90%'}/>
                <Skills skill = {'HTML'} progress={'90%'}/>
                <Skills skill = {'Git'} progress={'90%'}/>
                <Skills skill = {'JavaScript'} progress={'90%'}/>
                <Skills skill = {'Java'} progress={'80%'}/>
                <Skills skill = {'CSS/SCSS'} progress={'80%'}/>
                <Skills skill = {'Audio Engineering'} progress={'80%'}/>
                <Skills skill = {'C'} progress={'70%'}/>
                <Skills skill = {'SQL'} progress={'70%'}/>
                <Skills skill = {'Python'} progress={'70%'}/>
                <Skills skill = {'PHP'} progress={'60%'}/>
                <Skills skill = {'React'} progress={'60%'}/>
                <Skills skill = {'C++'} progress={'50%'}/>
                <Skills skill = {'JUCE Framework'} progress={'40%'}/>
            </div>
        </div>
    );
}

export default AboutPage;
