import React from 'react';
import sqlimg from './assets/sql.jpg';
import python from './assets/python.png';
import flutter from './assets/flutter.png';
import csharp from './assets/csharp.png';
import reactImg from './assets/react.png';
import htmlImg from './assets/html.png';
import aspImg from './assets/aspnetcore.PNG';
import unityImg from './assets/unity.png';
import jsImg from './assets/js.png';

export default function SkillsComponent() {

    const SkillImgs = (props) => {
        return(
            <div className="grid-item">                
                <img src={props.imgSrc} className="main-card" />
                <h6>{props.title}</h6>                
            </div>
        );
    }

    return (
        <div data-aos="fade-right" className="container body-card">
            <h2 className="header-title container main-card">Skills</h2>
            <div className="body-container">
               <div className="grid-container">
                   <SkillImgs imgSrc={sqlimg} title="SQL" />
                   <SkillImgs imgSrc={python} title="Python" />
                   <SkillImgs imgSrc={flutter} title="Flutter" />
                   <SkillImgs imgSrc={reactImg} title="React Js" />
                   <SkillImgs imgSrc={csharp} title="C#" />
                   <SkillImgs imgSrc={htmlImg} title="HTML" />
                   <SkillImgs imgSrc={aspImg} title="Asp Net Core" />
                   <SkillImgs imgSrc={unityImg} title="Unity" />
                   <SkillImgs imgSrc={jsImg} title="JavaScript" />
               </div>
            </div>
        </div>
    );
}