import React from "react";

import TypeAnimation from "../components/TypeAnimation";

import avatar from '../../images/about/avatar.png'

function About() {
    return (
        <section className="about PLA">
            <TypeAnimation text="Обо мне" className="headline"/>
            <div className="flex about__main">
                <section className="flex flex-column about__profile">
                    <img
                        src={avatar}
                        className="about__avatar"
                    />
                    <div className="flex flex-column about__me-box__info">
                        <div className="flex flex-column about__me-box">
                            <h2 className="about__name">Эмиль Каримов</h2>
                            <span className="about__nickname">@landerexit</span>
                            <span className="about__status">Рассмотрю предложения</span>
                        </div>

                        <span className="about__info-line"><span className="about__info-line-index">Дата рождения: </span> 04.03.2002</span>
                        <span className="about__info-line"><span className="about__info-line-index">Местоположение: </span>Россия, Астрахань</span>
                        <span className="about__info-line"><span className="about__info-line-index">Пожелания: </span>Удаленная работа</span>
                        <span className="about__info-line"><span className="about__info-line-index">Telegram: </span>@landerexit</span>
                    </div>
                </section>
                <section className="about__bio">
                    <div className="about__bio-section">
                        <h3 className="about__bio-index">Вкратце</h3>
                        <p className="about__bio-p">
                            Вижу себя на должности Front-end Web-Developer'а
                        </p>
                        <p className="about__bio-p">
                            Владею Python,  JavaScript, TypeScript, React.js, MobX.js, SQL
                        </p>
                        <p className="about__bio-p">
                            Имеется опыт с git, github, npm, webpack, SASS
                        </p>
                        <p className="about__bio-p">
                            Крепкие знания в верстке на чистом CSS (Владею БЭМ,  анимациями,  Адаптивной и Отзывчивой вёрстками)
                        </p>
                        <p className="about__bio-p">
                            Владею английским языком на уровне свободного изучения технической документации, статьей и книг. Видео и аудио контент также не помеха.
                        </p>
                    </div>
                    <div className="about__bio-section">
                        <h3 className="about__bio-index">Профессиональные навыки</h3>
                        <p className="about__bio-p">
                            Python • TypeScript • JavaScript • HTML+CSS •  Адаптивная верстка • React • MobX • Webpack • Sass • Git • SQL • 
                        </p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default About