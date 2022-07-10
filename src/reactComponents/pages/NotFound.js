import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-align-center not-found__wrapper PLA">
        <section className="not-found">
            <div className="not-found__text-box">
                <h2 className="not-found__404">404</h2>
                <h3 className="not-found__text">Страницы не существует</h3>
            </div>
            <Link
                to='/'
                className="secondary-button"
            >
                <span>Вернуться в начало</span>
            </Link>
        </section>
        </div>
    )
}

export default NotFound