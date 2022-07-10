import React from "react";

import TypeAnimation from "../components/TypeAnimation";

import card from '../../images/contact/card.svg'
import vk from '../../images/contact/vk.svg'
import github from '../../images/contact/github.svg'
import tg from '../../images/contact/tg.svg'
import habr from '../../images/contact/habr.svg'


function Contact() {
    const links = [
        {
            text: "Вконтакте",
            logo: vk,
            link: "https://vk.com/m00nr1v3r" ,
        },

        {
            text: "Github",
            logo: github,
            link: "https://github.com/landerexit",
        },

        {
            text: "Визитка",
            logo: card,
            link: "https://landerexit.github.io/personalCard/",
        },

        {
            text: "Telegram",
            logo: tg,
            link: "https://t.me/landerexit",
        },

        {
            text: "Habr Career",
            logo: habr,
            link: "https://career.habr.com/landerexit",
        },
    ]

    return (
        <section className="contact PLA">
            <TypeAnimation text='Связаться со мной' delayChildren=".03" className='headline'/>

            <div className="contact__links-box">
                { links.map( ( theLink, index ) => {
                    return (
                        <a
                            key={'link' + index}
                            href={theLink.link}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex flex-column flex-align-center contact__link"
                        >
                            <div
                                className="flex flex-column flex-align-center flex-justify-center contact__logo-box"
                            >
                                <img
                                    src={theLink.logo}
                                    alt={theLink.text}
                                    className='contact__logo'
                                />
                            </div>
                            <p className="contact__link-text">
                                {theLink.text}
                            </p>
                        </a>
                    )
                }) }
            </div>

            <p
                className="contact__email"
            >
                {"Почта: "}
                <a
                    href="mailto:landerexit@gmail.com"
                    className="contact__email-link"
                > 
                    landerexit@gmail.com
                </a>
            </p>
        </section>
    )
}

export default Contact