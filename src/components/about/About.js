import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import { Commit } from '@mui/icons-material';



export default function About() {
    const firstName = info.firstName.toLowerCase()

    // returns a terminal component with text
    // the text is a template literal that uses the info object imported from the Info.js file

    function aboutMeText() {
        return <>
            <p>
                <span style={{color: info.baseColor}}>
                    {firstName}_{info.lastName.toLowerCase()} $ </span><br></br>
                <span className={Style.green}>
                    npm </span>
                    i {firstName} 

            </p>
            <p>
                <span style={{color: info.baseColor}}>about_{firstName} 
                    <span className={Style.yellow}>
                        (main)
                    </span> 
                    <br></br>
                    <span className={Style.green}>
                        {'>'}_  </span>
                </span>
                {info.bio}
            </p>
        </>;
    }

    // returns a terminal component with text
    // the text is a template literal that uses the info object imported from the Info.js file
    // maps over the proficientWith array in the skills object in the info object and returns a list item for each skill
    // maps over the exposedTo array in the skills object in the info object and returns a list item for each skill

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    // returns a terminal component with text
    // the text is a template literal that uses the info object imported from the Info.js file
    // maps over the hobbies array in the info object and returns a list item for each hobby
    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.yellow}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    // returns a box with three terminal components inside of it
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}