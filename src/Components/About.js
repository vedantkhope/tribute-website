import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return ( <
        div className = "about-section-container" >
        <
        div className = "about-background-image-container" >
        <
        img src = { AboutBackground }
        alt = "" / >
        <
        /div> <
        div className = "about-section-image-container" >
        <
        img src = { AboutBackgroundImage }
        alt = "" / >
        <
        /div> <
        div className = "about-section-text-container" >
        <
        p className = "primary-subheading" > About < /p> <
        h1 className = "primary-heading" >
        Sindhu Shrihari Sapkal, affectionately called Sindhutai, was an Indian social worker and social activist known particularly
        for her work in raising orphaned children in India.She was awarded the Padma Shri in 2021 in the Social Work category. <
        /h1> <
        p className = "primary-text" >
        Born: 14 November 1948, Wardha Died: 4 January 2022(age 73 years), Pune Children: Arunbhau Sapkal, Mamata Sapkal Parents: Abhiman Sathe Spouse: Shrihari <
        /p> <
        p className = "primary-text" >
        <
        /p> <
        div className = "about-buttons-container" >
        <
        button className = "secondary-button" > Learn More < /button> <
        button className = "watch-video-button" >
        <
        BsFillPlayCircleFill / > Watch Video <
        /button> < /
        div > <
        /div> < /
        div >
    );
};

export default About;