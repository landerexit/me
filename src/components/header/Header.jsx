import React from "react";
import { Link, useLocation } from "react-router-dom";

import './_header.sass'

import logoImg from './img/logo.png'

function Header(props) {
    const location = useLocation().pathname;

    const languageSign = props.language ? "РУС" : "ENG"

    const tabs = 
    [
        {
            path: "/",
            ruText: "Домой",
            enText: "Home"
        }, 
        {
            path: "/about", 
            ruText: "Обо мне",
            enText: "About"
        }, 
        {
            path: "/projects", 
            ruText: "Проекты",
            enText: "Projects"
        },
    ]
    
    return (
        <header className="header flex items-center justify-center">

            <nav className="header__wrapper flex items-center justify-between">
                <Link 
                    className="header__logo"
                    to="/"
                >
                    <img 
                        src={logoImg}
                        alt="" 
                    />
                </Link>

                <div className="header__nav flex align-center justify-center text-second">
                    {
                        tabs.map( (tab, tabKey) =>{
                            return (
                                <Link 
                                    className={
                                        "header__link header__link__" + 
                                        tab.path + 
                                        (location === tab.path ? " header__link__highlight" : "")
                                    }

                                    to={tab.path}
                                    key={tabKey}
                                >
                                    {props.language ? tab.ruText : tab.enText}
                                </Link>
                            )
                        })
                    }
                </div>

                <div className="header__buttons flex items-center">
                    <button 
                        className="header__language"
                        onClick={props.changeLanguage}
                    >
                        {languageSign}
                    </button>                
                    <button
                        className="header__theme"
                        onClick={props.changeTheme}
                    >
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;