import React from 'react';
import style from './Footer.module.css';
import containerStyle from "../Common/ContainerCSS.module.css";


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${containerStyle.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Footer</h2>
                <div className={style.footer}></div>
            </div>
        </div>
    );
}
export default Footer;
