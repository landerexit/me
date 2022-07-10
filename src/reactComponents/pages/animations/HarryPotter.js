import React from "react"

import crossImg from '../../../images/animations/potter/cross.svg'

function HarryPotter() {
    const parts = [
        {
            class: "stone",
            name: "Гарри Поттер и Философский Камень",
            description: "В Хогвартской школе чародейства и волшебства Гарри попадает в водоворот невероятных приключений. Он изучает квиддич – спорт высшего пилотажа, играет в захватывающую игру живыми шахматными фигурами, встречается с Темным Волшебником, который хочет его уничтожить. Одиннадцатилетний мальчик-сирота Гарри Поттер живет в семье своей тетки и даже не подозревает, что он - настоящий волшебник. Но однажды прилетает сова с письмом для него, и жизнь Гарри Поттера изменяется навсегда. Он узнает, что зачислен в Школу Чародейства и Волшебства, выясняет правду о загадочной смерти своих родителей, а в результате ему удается раскрыть секрет философского камня.",
        },

        {
            class: "room",
            name: "Гарри Поттер и Тайная Комната",
            description: 'Это вторая книга о приключениях Гарри Поттера. Он снова вступает в отчаянную схватку со злом. На этот раз враг его так силен, что надежды на победу почти нет. В Школе чародейства и волшебства "Хогвартс" происходят тревожные события. Кто-то нападает на учеников школы, и преподаватели подозревают, что это таинственное чудовище, которое скрывается в легендарной Тайной комнате. Гарри Поттер и его друзья разгадывают загадку Тайной комнаты, и теперь Гарри снова предстоит сразиться с лордом Волан-де-Мортом. Сумеет ли он победить на этот раз.',
        },
        
        {
            class: "prisoner",
            name: "Гарри Поттер и Узник Азкабана",
            description: "В Хогвартс пробрался убийца, на счету которого множество жизней и людей, и волшебников. Для охраны школы приглашены зловещие стражи тюрьмы Азкабан – дементоры. Гарри и его друзья очень скоро выясняют, почему все волшебники боятся дементоров, а сам Гарри решает найти убийцу.",
        },
        
        {
            class: "fire",
            name: "Гарри Поттер и Кубок Огня",
            description: 'Гарри Поттеру предстоит четвертый год обучения в Школе чародейства и волшебства "Хогвартс". Новые заклинания, новые зелья, новые учителя, новые предметы. . .Все это знакомо, и Гарри с нетерпением ожидает начала учебного года. Но на школу внезапно обрушивается потрясающая новость: в этом году в Хогвартсе будет проходить Турнир Трех Волшебников, и, конечно же, каждый хочет принять в нем участие.',
        },
        
        {
            class: "order",
            name: "Гарри Поттер и Орден Феникса",
            description: "Гарри Поттер с нетерпением ждёт окончания каникул и начала пятого учебного года в Хогвартсе. Юный волшебник как никогда страдает от одиночества, а насмешки и придирки Дурслей стали совсем невыносимыми. К тому же он уверен, Что Волан–де–Морт восстановил силы и скоро начнёт действовать. Вас снова ждут опасные и захватывающие приключения, жестокая борьба, верные друзья и волшебный мир Гарри Поттера.",
        },
        
        {
            class: "prince",
            name: "Гарри Поттер и Принц-Полукровка",
            description: "Министерство магии терпит поражение за поражением в битвах с Волан-де-Мортом. Даже маглы страдают от второй войны - каждый день происходят катастрофы, причины которых никому не ведомы. Но и на войне жизнь продолжается. Гарри, Рон и Гермиона, как и все шестнадцатилетние, учатся, ходят на вечеринки и влюбляются. Однако опасность всё ближе. Несмотря на все усилия Дамблдора по защите школы, в Хогвартсе происходят очень странные события. Омут памяти на этот раз откроет Гарри самую большую тайну Темного Лорда, и ради того, чтобы победить, Гарри вынужден пожертвовать самым дорогим... Какую сторону в этой войне примет загадочный Принц-полукровка...",
        },
        
        {
            class: "death",
            name: "Гарри Поттер и Дары Смерти",
            description: "Гарри Поттера ждёт самое страшное испытание в жизни - смертельная схватка с Волан-де-Мортом. Ждать помощи не от кого - Гарри одинок как никогда. Друзья и враги Гарри предстают в совершенно неожиданном свете. Граница между Добром и Злом становится всё призрачнее… В седьмой, финальной книге Дж. К. Ролинг раскрывает все магические тайны.",
        },
    ]

    function setHoverPotter(event) {
        const otherPotters = document.getElementsByClassName("potter__section")
        const thePotterId = event.target.dataset.potterId

        Array.prototype.map.call(otherPotters, ( potterSection ) => {
            if (potterSection.dataset.potterId !== thePotterId) {
                potterSection.classList.add('potter__hidden')
            } else {
                potterSection.classList.add('potter__chosen')
            }
        })
    }

    function unHoverPotter(event) {
        const otherPotters = document.getElementsByClassName("potter__section")
        const thePotterId = event.target.dataset.potterId

        Array.prototype.map.call(otherPotters, ( potterSection ) => {
            if (potterSection.dataset.potterId !== thePotterId) {
                potterSection.classList.remove('potter__hidden')
            } else {
                potterSection.classList.remove('potter__chosen')
            }
        })
    }

    function setChoicePotter(event) {
        const otherPotters = document.getElementsByClassName("potter__section")
        const thePotterId = event.target.dataset.potterId

        Array.prototype.map.call(otherPotters, ( potterSection ) => {
            if (potterSection.dataset.potterId !== thePotterId) {
                potterSection.classList.add('potter__otherElem')
                potterSection.classList.remove('potter__hidden')
            } else {
                potterSection.classList.add('potter__clickElem')
                potterSection.classList.remove('potter__chosen')
            }
        })
    }

    function unChoicePotter(event) {
        event.stopPropagation()
        const otherPotters = document.getElementsByClassName("potter__section")
        const thePotterId = event.target.dataset.potterId

        Array.prototype.map.call(otherPotters, ( potterSection ) => {
            if (potterSection.dataset.potterId !== thePotterId) {
                potterSection.classList.remove('potter__otherElem')
            } else {
                potterSection.classList.remove('potter__clickElem')
            }
        })
    }

    return (
        <section className="flex flex-align-center flex-justify-center potter">
            {
                parts.map(( part, index ) => {
                    return (
                        <section
                            className={"potter__section potter__section__" + part.class}
                            onMouseEnter={setHoverPotter}
                            onMouseLeave={unHoverPotter}
                            onClick={setChoicePotter}
                            data-potter-id={index}
                            key={"potter" + index}
                        >
                            <div className="potter__section__background__wrapper">
                                <div className="potter__section__background"/>
                            </div>
                            <img 
                                className="potter__section__close"
                                onClick={unChoicePotter}
                                onMouseEnter={event =>  event.preventDefault()}
                                src={crossImg}
                                data-potter-id={index}
                            />
                            <div className="potter__info">
                                <h2 className="potter__name">{part.name}</h2>
                                <p className="potter__description">{part.description}</p>
                            </div>
                            <span className="potter__num">
                                {index + 1}
                            </span>
                        </section>
                    )
                })
            }
        </section>
    )
}

export default HarryPotter