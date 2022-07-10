import React from "react";
import { Link } from "react-router-dom";

import burger from '../../images/header/burger.svg'

function Header(props) {
        return (
            <header className="header flex mobilescreens">
                <Link
                    to='/'
                    className="header__tile header__logo"
                >
                    LANDEREXIT
                </Link>
                <div 
                    className="header__tile header__tile-drop-menu"
                    onClick={props.toggleDropMenu}
                >
                    <img
                        src={burger}
                        alt='drop menu'
                        className="header__drop-menu"
                    />
                </div>
            </header>
        )
}

export default Header