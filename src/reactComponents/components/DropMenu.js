import React from "react";
import { Link } from "react-router-dom";

function DropMenu(props) {
    const chapters = [
        {
            name: 'Информация',
            content: [
                {
                    name: "Главная",
                    link: "main",
                },

                {
                    name: "Обо мне",
                    link: "about",
                },

                {
                    name: "Связаться",
                    link: "contact",
                },
            ]
        },

        {
            name: 'Демонстрация',
            content: [ 

                {
                    name: "Проекты",
                    link: "projects",
                },

                {
                    name: "Анимации",
                    link: "animations",
                },
                
            ]
        }
    ]

    return (
        <>
            <div className="flex flex-align-center flex-justify-center drop-menu__wrapper">
                <div 
                    className="drop-menu__mobile__close__zone mobilescreens"
                    onClick={props.toggleDropMenu}
                />
                <section className="flex flex-column flex-justify-center drop-menu">
                    {chapters.map( ( chapter, chapterIndex ) =>
                    <div className="drop-menu__section" key={"chapter" + chapterIndex}>
                        <h2 className="drop-menu__section-name">{chapter.name}</h2>
                        {
                            chapter.content.map( ( line, lineIndex ) => 
                                <div
                                    className="drop-menu__line"
                                    key={"chapter" + lineIndex}
                                >
                                    <Link 
                                        to={line.link}
                                        className="drop-menu__index"
                                    >
                                            {line.name}
                                    </Link>
                                </div>
                            )
                        }
                    </div>)}
                    
                <section className="drop-menu__background">
                    <div className="drop-menu__background__border__wrapper drop-menu__background__border__wrapper__left-big">
                        <div className="flex flex-column drop-menu__background__border__animation drop-menu__background__border__animation__left-big">
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                        </div>
                    </div>
                    
                    <div className="drop-menu__background__border__wrapper drop-menu__background__border__wrapper__left-medium">
                        <div className="flex flex-column drop-menu__background__border__animation drop-menu__background__border__animation__left-medium">
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                        </div>
                    </div>
                    
                    
                    <div className="drop-menu__background__border__wrapper drop-menu__background__border__wrapper__left-small">
                        <div className="flex flex-column drop-menu__background__border__animation drop-menu__background__border__animation__left-small">
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                        </div>
                    </div>
                    <div className="drop-menu__background__border__wrapper drop-menu__background__border__wrapper__right-medium">
                        <div className="flex flex-column drop-menu__background__border__animation drop-menu__background__border__animation__right-medium">
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                        </div>
                    </div>
                    
                    <div className="drop-menu__background__border__wrapper drop-menu__background__border__wrapper__right-big">
                        <div className="flex flex-column drop-menu__background__border__animation drop-menu__background__border__animation__right-big">
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                            <div className="drop-menu__background__border"/>
                        </div>
                    </div>
                    
                    <div className="drop-menu__background__right-border"/>
                </section>
                </section>
            </div>
        </>
    )
}

export default DropMenu