import React from 'react';
import style from './../Projects/Projects.module.css'
import containerStyle from './../Common/ContainerCSS.module.css'
import Project from "./Project/Project";


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project nameProject={'Social Network'} description={'My project from inkubator'}/>
                    <Project nameProject={'Todolist'} description={'Best project'}/>
                </div>
            </div>
        </div>
    );
}


export default Projects;
