import { useState, useEffect } from "react";
import React from 'react';
import './style.css';

export default function NavigationBar(props) {
    const[prop, setProp] = useState(props);
    function handleNavClick(e){
        prop.onChange(e);
    }

    return (
        <div className="navbar">
            <div className="navContent">
                <div onClick={(e) => handleNavClick("about")} ><h6 value="about">About</h6></div>
                <div onClick={(e) => handleNavClick("work")} ><h6>Work</h6></div>
                <div onClick={(e) => handleNavClick("projects")} ><h6>Projects</h6></div>
                <div onClick={(e) => handleNavClick("skills")} ><h6>Skills</h6></div>
                <div onClick={(e) => handleNavClick("education")} ><h6>Education</h6></div>
            </div>
        </div>
        );
}