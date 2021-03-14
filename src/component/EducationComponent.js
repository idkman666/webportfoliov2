import { useState, useEffect } from "react";
import React from 'react';
import saitImg from './assets/sait.png';
import uofrImg from './assets/uofr.png';
import courseraImg from './assets/coursera.png';

export default function EducationComponent() {

    function handleClick(e)
    {
        if(e==="coursera")
        {
            window.open("https://www.coursera.org/professional-certificates/ai-engineer", "_blank"); 
        }else if(e==="sait")
        {
            window.open("https://www.sait.ca/programs-and-courses/certificates/object-oriented-software-development", "_blank");
        }else if(e==="uofr")
        {
            window.open("https://www.uregina.ca/engineering/programs/industrial/index.html", "_blank");
        }
    }

    const EducationCard = (props) => {
        var val = props.value;
        return (
            <div onClick={()=> handleClick(props.value)} className="prjContainer main-card">
                <img src={props.ImgSrc} className="main-card" />
                <h5>{props.title}</h5>
                <ul>
                    <DesListItem description= {props.description1}/>
                    <DesListItem description= {props.description2}/>
                    <DesListItem description= {props.description3}/>
                    <DesListItem description= {props.description4}/>
                </ul>
            </div>);
    }
    const DesListItem = (props) => 
    {
        if (props.description == null) {
            return null;
        }
        return(
            <li><p>{props.description}</p></li>
        );
    }


    return (
        <div data-aos="fade-right" className="container work body-card">
            <h2 className="header-title container main-card">Education</h2>
            <div className="body-container">
               <div className="grid-container">
                    <EducationCard value="coursera" ImgSrc={courseraImg} description1="IBM AI Engineering" 
                    description2="Data science, Machine Learning, AI" 
                    description3="Python Programming, Keras, Pandas" title="Coursera" />
                    <EducationCard value="sait" ImgSrc={saitImg} description1="Object Oriented Software Development (OOSD)" 
                    description2="Web Development, Mobile App development" 
                    description3="C#, Asp Net MVC, Java, Python" title="SAIT" />
                    <EducationCard value="uofr" ImgSrc={uofrImg} description1="Industrial Systems Engineering" 
                    description2="Computer Aided Engineering, Process Modeling" 
                    description3="Process engineering, operations management, manufacturing" title="University Of Regina" />
               </div>
            </div>

        </div>
    );
}