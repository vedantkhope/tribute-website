import React from "react";
import ProfilePic from "../Assets/image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return ( <
        div className = "work-section-wrapper" >
        <
        div className = "work-section-top" >
        <
        p className = "primary-subheading" > Awards < /p> <
        h1 className = "primary-heading" > < /h1> <
        p className = "primary-text" >
        2021 - Padma Shri in the Social Work category <
        /p>  <
        p className = "primary-text" > 2016– Honorary doctorate by the Dr.D.Y.Patil College of Engineering, Pune < /p> <
        p className = "primary-text" > 2016– Social Worker of the Year award from Wockhardt Foundation < /p> <
        p className = "primary-text" > 2014– Ahmadiyya Muslim Peace Prize < /p> <
        p className = "primary-text" > 2013– Mother Teresa Awards
        for Social Justice < /p> <
        p className = "primary-text" > 2013– The National Award
        for Iconic Mother < /p>

        <
        /

        div > <
        div className = "testimonial-section-bottom" >
        <
        img src = { ProfilePic }
        alt = "" / >
        <
        p >
        Sindhu Shrihari Sapkal(14 November 1948– 4 January 2022) <
        /p> <
        div className = "testimonials-stars-container" >
        <
        AiFillStar / >
        <
        AiFillStar / >
        <
        AiFillStar / >
        <
        AiFillStar / >
        <
        AiFillStar / >
        <
        /div> <
        h2 > < /h2> < /
        div > <
        /div>
    );
};

export default Testimonial;