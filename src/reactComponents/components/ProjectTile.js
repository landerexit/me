import { inject, observer } from "mobx-react";
import React from "react";


const ProjectTile = inject("ButtonsStore")(
    observer(({ project, type, element, ButtonsStore }) => {
        function showAnimation() {
            ButtonsStore.setPopupMenu(true, element)
        }
    
        return (
            <section
                className='project-tile'
            >
                <div className="flex flex-align-center flex-justify-center project-tile__cover">
                    <img 
                        src={project.logo}
                        alt={project.name}
                        className='project-tile__logo'
                    />
                </div>
                <div className="project-tile__info">
                    <h3 
                        className='project-tile__name'
                    >
                        {project.name}
                    </h3>
                    <p 
                        className='project-tile__description'
                    >
                        {project.description}
                    </p>                
                    <div className="project-tile__buttons">
                        { type !== 'animation' ?  
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className='primary-button project-tile__button'
                            >
                                Посетить сайт
                            </a>
    
                            :
    
                            <button
                                className='secondary-button project-tile__button'
                                onClick={showAnimation}
                            >
                                Посмотреть
                            </button>
                        }
                    </div>
                </div>
    
            </section>
        )
    })
) 

export default ProjectTile