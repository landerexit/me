import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">

            <nav className="header__wrapper flex align-center justify-between">
                <img 
                    className="header__logo"
                    src=""
                    alt="" 
                />

                <ul className="flex align-center justify-center">
                    <li>
                        <Link to="/"/>
                    </li>
                    <li>
                        <Link to="about"/>
                    </li>
                    <li>
                        <Link to="animations"/>
                    </li>
                </ul>

                <div className="header__buttons">
                    <button className="header__language">

                    </button>
                    <button className="header__theme">
                        <img
                            className="header__theme-img"
                            src=""
                            alt="" 
                        />
                    </button>
                    <div className="header__languages">

                    </div>
                    <div className="header__">

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;