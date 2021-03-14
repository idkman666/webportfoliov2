import { useState, useEffect } from "react";
import React from 'react';
import aspImg from './assets/aspnetcore.PNG';
import flutterImg from './assets/flutter.png';
import unityImg from './assets/unity.png';

export default function ProjectComponent() {
    const [aspDes, setAspDes] = useState("For developing web applications, I have mostly used Asp.Net core frame work. I like its' implementation of identity core for authenticantion, and razor pages of displaying pages. I have made 2 web apps using Asp.Net core for serverside processes, and ReactJs for front-end activities.");
    const [flutterDes, setFlutterDes] = useState("I love Flutter. This framework " +
        "is amazing, and I love using this for building mobile apps. " +
        "Flutter + Firebase is a powerful combination of tools to create crossplatform app. " +
        "So far I have completed creating one app for my work, and there is another project I " +
        "am currently working on. No github link available due to security/privacy reasons.");
    const [unityDes, setUnityDes] = useState("I like playing games. That being said, I like making games as well. I picked up Unity back in 2015, and published a game that in total garnered 100 downloads over 5 years. Unfortunately the game has been taken off play-store due to policy issues. Currently I have two simple games on play-store, and I have couple more unity project in mind that I will start working on in the near future.");
    const [selectedCard, setSelectedCard] = useState();
    const [isMainPage, setIsMainPage] = useState(true);

    function handleClick(e) {
        var selected = DesContainer(e);
        setSelectedCard(selected);
        setIsMainPage(false);
    }

    const DesContainer = (cardName) => {
        switch (cardName) {
            case "aspnetcore":
                return (
                    <div>
                        <DemoCard description1="A simple web app made using Asp Net core."
                            description2="Front-End made using React Js."
                            description3="The app uses azure text analytics api for text sentiment analysis." ImgSrc={flutterImg} />
                        <DemoCard description1="Web application created for the purpose of assisting van dispatch for Amazon Logistics."
                            description2="Made use of Cloud Firestore for asynchronous data update."
                            description3="Front-end created using ReactJs." ImgSrc={flutterImg} />
                    </div>
                )
                break;
            case "unity":
                return (
                    <div>
                        <DemoCard ImgSrc={unityImg} description1="Single level game created in using 3d assets in Unity." 
                        description2="Disclaimer: Game is not well optimized. All calculation of translation is done in main thread." />
                        <DemoCard ImgSrc={unityImg} description1="2D game made using Unity and tile-map." 
                        description2="Unlike the game above, this game utilizes multiple threads available in mobile devices."
                        description3="Unity's jobsystem was used for executing codes in worker threads." />
                    </div>
                )
                break;
            case "flutter":
                return(<DemoCard description1="Complementary app created to help with delivery van dispatch at Amazon warehouse." 
                        description2="App uses Firebase Cloud Firestore for data storage and retrieval."
                        description3="Utilizing streambuilder widget, any change in data updates UI automatically." ImgSrc={flutterImg}  />)
                break;
            default:
                break;
        }
    }
    const DemoCard = (props) => {
        return (<div data-aos="fade-up" className="desContainer container main-card">
            <img src={props.ImgSrc} className="workImg main-card" />
            <div className="description">
                <ul>
                    <DesCard description={props.description1} />
                    <DesCard description={props.description2} />
                    <DesCard description={props.description3} />
                    <DesCard description={props.description4} />
                    <DesCard description={props.description5} />
                </ul>
            </div>
        </div>);
    }

    const DesCard = (props) => {
        if (props.description == null) {
            return null;
        }
        return (
            <li>
                <p>{props.description}</p>
            </li>
        );
    }

    const PrjCard = (props) => {
        var val = props.value;
        return (
            <div onClick={() => handleClick(val)} className="prjContainer main-card">
                <img src={props.ImgSrc} className="main-card" />
                <p>{props.des}</p>
            </div>);
    }

    return (
        <div data-aos="fade-right" className="container body-card">
            <h2 className="header-title container main-card">PROJECTS</h2>
            <div className="body-container">
                {isMainPage == true ? <div className="grid-container">
                    <PrjCard ImgSrc={aspImg} des={aspDes} value="aspnetcore" />
                    <PrjCard ImgSrc={flutterImg} des={flutterDes} value="flutter" />
                    <PrjCard ImgSrc={unityImg} des={unityDes} value="unity" />
                </div> :
                    <div>                        
                        <span id="backBtn" onClick={() => setIsMainPage(true)}>&#8672;</span>
                        {
                            selectedCard
                        }
                    </div>
                }
            </div>
        </div>
    );
}