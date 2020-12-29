import React from 'react';
import style from './Project.module.css';

type projectPropsType = {
    description: string
    nameProject: string
}

const Project = (props: projectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <img src="" alt=""></img>
                <button>Смотреть</button>
            </div>
            <div>
                <div>{props.nameProject}</div>
                <div>{props.description}</div>
            </div>
            
        </div>
    );
}
export default Project;
