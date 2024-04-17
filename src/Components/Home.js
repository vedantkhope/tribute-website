import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return ( <
        div className = "home-container" >
        <
        Navbar / >
        <
        div className = "home-banner-container" >
        <
        div className = "home-bannerImage-container" >
        <
        img src = { BannerBackground }
        alt = "" / >
        <
        /div> <
        div className = "home-text-section" >
        <
        h1 className = "primary-heading" >
        Sindhutai Sapkal <
        /h1> <
        p className = "primary-text" > “We cannot solve problems by using the same kind of thinking we used when we created them.” <
        /p> < 
        p className = "primary-text" > “If women should wear clothes that cover their entire body, the society will respect them, otherwise women will
        continue to be exploited.” <
        /p> < 
        p className = "primary-text" > “A mother’ s love knows no bounds, and every child should experience that kind of unconditional love.” <
        /p> <
        button className = "secondary-button" >
        About < FiArrowRight / > { " " } <
        /button> < /
        div > <
        div className = "home-image-section" >
        <
        img src = { BannerImage }
        alt = "" / >
        <
        /div> < /
        div > <
        /div>
    );
};

export default Home;