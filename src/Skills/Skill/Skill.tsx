import React from 'react';
import style from './Skill.module.css';

type skillsPropsType = {
    title: string
    description: string
}

const Skill = (props: skillsPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <div>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>

            </div>
        </div>
    );
}
export default Skill;
