import React from "react";

const Work = () => {
    const workInfoData = [{

            title: "Mother Global Foundation, Pune",

        },
        {

            title: "Abhiman Bal Bhavan, Wardha",

        },
        {

            title: "Gangadharbaba Chhatralaya, Guha Shirdi",

        },
        {

            title: "Vanvasi Gopal Krishna Bahuuddeshiya Mandal Amaravatii",

        },
    ];
    return ( <
        div className = "work-section-wrapper" >
        <
        div className = "work-section-top" >
        <
        p className = "primary-subheading" > Work < /p> <
        h1 className = "primary-heading" > < /h1> <
        p className = "primary-text" >
        She nurtured over 1, 500 orphaned children and through them had a grand family of 382 sons - in -law and 49 daughters - in -law.She has been honoured with more than 700 awards
        for her work.She used award money to buy land to make a home
        for orphaned children. <
        /p> <
        h1 className = "primary-heading" > Organisations < /h1> < /
        div > <
        div className = "work-section-bottom" > {
            workInfoData.map((data) => ( <
                div className = "work-section-info"
                key = { data.title } >
                <
                div className = "info-boxes-img-container" >
                <
                img src = { data.image }
                alt = "" / >
                <
                /div> <
                h2 > { data.title } < /h2> <
                p > { data.text } < /p> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
};

export default Work;