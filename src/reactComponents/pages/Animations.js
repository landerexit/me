import { inject, observer } from "mobx-react";
import React from "react";

import TypeAnimation from "../components/TypeAnimation";
import ProjectTile from "../components/ProjectTile";

import WindowView from "./animations/WindowView";
import Planet from "./animations/Planet";
import HarryPotter from "./animations/HarryPotter";

import wandLogo from "../../images/animations/wand.svg"
import planetLogo from '../../images/animations/planet.svg'
import windowLogo from '../../images/animations/window.svg'

const Animations = inject()(
    observer(() => {
        const animations = [
    
            {
                name: 'Окно в лето',
                logo: windowLogo,
                element: <WindowView />
            },

            {
                name: 'Избранный',
                logo: wandLogo,
                element: <HarryPotter />
            },
            
            {
                name: 'Терра Инкогнита',
                logo: planetLogo,
                element: <Planet />
            },
    
        ]
    
        return (
            <section className="animations PLA">
                <TypeAnimation text="Анимации" delayChildren='.08' className="headline" />
                <section className="animations__list">
                    { 
                        animations.map(( animation, index ) => <ProjectTile type='animation' element={animations[index].element} project={animation} key={'animation' + index}/>) 
                    }
                </section>
            </section>
        )
    })
) 

export default Animations