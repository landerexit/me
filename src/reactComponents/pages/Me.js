import React from "react";

import TypeAnimation from "../components/TypeAnimation";

function Me() {
    return (
        <section
            className="flex flex-column flex-justify-center me PLA"
        >
            <div className="me__name-box">
                <TypeAnimation text='Здравствуй, я' className='headline'/>
                <h2 className="me__name">Эмиль Каримов</h2>
                <TypeAnimation text="landerexit" delay='.15' className="me__nickname"/>
            </div>
            <h4 className="me__job-post">Front-End Developer</h4>
            <div className="me__background">
                <div className="me__background-arrow"/>
                <div className="me__background-circle me__background-circle-outer"/>
                
                <div className="me__background-circle me__background-circle-inner"/>
            </div>
        </section>
    )
}

export default Me