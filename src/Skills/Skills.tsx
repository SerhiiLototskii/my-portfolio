import React from 'react';
import style from './Skills.module.css';
import containerStyle from '../Common/ContainerCSS.module.css';
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. "}/>
                    <Skill title={"Redux"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.  , fugit impedit"}/>
                </div>
            </div>
        </div>
    );
}


export default Skills;
