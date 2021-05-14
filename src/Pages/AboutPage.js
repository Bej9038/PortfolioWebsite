import React from 'react';
import Title from "../Components/Title";
import Skills from "../Components/Skills";
import ImageSection from "../Components/ImageSection";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'Skills'} span={'Skills'} />
            <Skills skill = {'JavaScript'} progress={'70%'}/>
        </div>
    );
}

export default AboutPage;
