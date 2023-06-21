import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import React from "react";

function PageWrapper() {
    const [ language, setLanguage ] = React.useState(0)

    const [ theme, setTheme ] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : getSystemTheme())

    function getSystemTheme() {
        if (window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 1 : 0
        } else {
            return 0
        }
    }

    React.useEffect(()=>{
        if (theme) {
            document.getElementsByTagName("body")[0].classList.add("dark-theme")
        } else {
            document.getElementsByTagName("body")[0].classList.remove("dark-theme")
        }
    }, [theme])

    function changeLanguage () {
        setLanguage(language ? 0 : 1)
    }

    function changeTheme () {
        setTheme(theme ? 0 : 1)
    }

    return (
        <>
            <Header changeLanguage={changeLanguage} language={language} changeTheme={changeTheme}/>
            <main className="main">
                <Outlet context={language}/>
            </main>
        </>
    );
}

export default PageWrapper;