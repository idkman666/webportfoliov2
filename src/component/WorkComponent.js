import { useState, useEffect } from "react";
import React from 'react';
import RESimg from './assets/RES.png';
import AmazonImg from './assets/AmazonImg.jpg';

export default function WorkComponent() {
    const [resDes, setResDes] = useState("As a part of an agile team, worked in Asp.Net MVC " +
        "framework to build functional features using C# for " +
        "WellMan NextGen web application." +
        " Wrote code and tested functionality of " +
        "new features being added to the application." +
        "Improved buggy features.");
    const [amzDes, setAmzDes] = useState("Responsible for checking in trailers that arrive at the station. Also responsible for keeping track of outgoing loads and arranging pickup from 3rd pary if need be.");
    const [amzHighlight, setAmzHighLight] = useState("Created a web application and complementary mobile app to help with morning delevery van dispatch.");


    const WorkExpCard = (props) => {
        return (<div>
            <h6 id="imgTitle">{props.title}</h6>
            <div className="desContainer container main-card">
                <img src={props.ImgSrc} className="workImg" />
                <div className="workDescripiton">
                    <h4>{props.position}</h4>
                    <DesCard description={props.description} stack={props.stack} highlight={props.highlight} date={props.date}/>
                </div>
            </div>

        </div>);
    }

    const DesCard = (props) => {
        if (props.highlight !== null) {
            return (
                <ul>
                    <li><p>{props.description}</p></li>
                    <li><p>{props.date}</p></li>
                    <ul>
                        <li><h6>Highlight:</h6></li>
                        <li>
                            <p>{props.highlight}</p>
                        </li>
                        <li>
                            <a><p>Link</p></a>
                        </li>
                    </ul>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li>
                        <p>{props.description}</p>
                    </li>
                    <li>
                        <p>{props.date}</p>
                    </li>
                    <li>
                        <p>{props.stack}</p>
                    </li>
                </ul>
            );
        }
    }


    return (
        <div data-aos="fade-right" className="container work body-card">
            <h2 className="header-title container main-card">Work Experience</h2>
            <div className="body-container">
                <WorkExpCard ImgSrc={RESimg} 
                title="Resource Energy Solutions" description={resDes} position="Junior Software Developer" 
                stack="C#, SQL, Asp .Net MVC" date="Sept 2019 - Dec 2019"
                 highlight={null}/>
                <WorkExpCard ImgSrc={AmazonImg} title="Amazon" 
                position="Yard Marshall" description={amzDes} date="Sept 2020 - Present"
                highlight={amzHighlight} />
            </div>

        </div>
    );
}