import { useOutletContext } from "react-router-dom";

import './_home.sass'

function Home() {
    const language = useOutletContext();

    const me = language ?
    {
        name: "Каримов Эмиль",
        activity: "Я Front End разработчик"
    }
        :
    {
        name: "Karimov Emil",
        activity: "I am Front End Developer"
    }

    return (
        <>
            <h1>{me.name}</h1>
            <p>{me.activity}</p>
        </>
    );
}

export default Home;