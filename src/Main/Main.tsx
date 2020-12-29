import React from 'react';
import style from './Main.module.css';
import containerStyle from '../Common/ContainerCSS.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={containerStyle.container}>
                <div className={style.text}>
                    <span>Hi There!</span>
                    <h1>I am Serhii Lototskiy</h1>
                    <p>Front-end eveloper</p>
                </div>
                <div className={style.photo}></div>

            </div>
        </div>
    );
}

export default Main;
