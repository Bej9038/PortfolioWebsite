import React from 'react';
import Title from "../Components/Title";
import Skills from "../Components/Skills";
import ImageSection from "../Components/ImageSection";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'Ben Jordan'} progress={25}/>
            <ImageSection />
            {/*<Title title={'Skills'} progress={50}/>*/}
            {/*<div className="skills-group">*/}
            {/*    <Skills skill = {'Python'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'PyTorch'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'NumPy'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'C++'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'C'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'CUDA'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'Docker'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'Git'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'Linux'} progress={'100%'}/>*/}
            {/*    <Skills skill = {'LaTeX'} progress={'100%'}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default AboutPage;
