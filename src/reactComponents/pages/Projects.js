import { observer, inject } from 'mobx-react';
import React from 'react';
import TypeAnimation from '../components/TypeAnimation';

import ProjectTile from '../components/ProjectTile';

import lanftLogo from '../../images/projects/lanft/logo.svg'

import meLogo from '../../images/projects/me/logo.svg'

import cardLogo from '../../images/projects/personalCard/logo.svg'

const Projects = inject()(
    observer( () => {
        const projectsList = [

            {
                name: 'Me',
                description: 'Личный сайт',
                logo: meLogo,
                link: 'https://landerexit.github.io/me',
            },
            
            {
                name: 'LAN | NFT',
                description: 'Демонстрационный NFT-магазин',
                logo: lanftLogo,
                link: 'https://landerexit.github.io/lanft',
            },

            {
                name: 'Personal Card',
                description: 'Визитная карточка',
                logo: cardLogo,
                link: 'https://landerexit.github.io/personalCard',
            },
        ]

        return (
            <section className='projects PLA'>
                <TypeAnimation text="Мои проекты" delayChildren=".05" className="headline"/>
                <div 
                    className='projects__items-grid'
                >
                    {projectsList.map( (project, index) => <ProjectTile project={project} key={'project' + index}/>)}
                </div>
            </section>
        )
    })
) 

export default Projects