import React from 'react';
import style from './Contacts.module.css';
import containerStyle from "../Common/ContainerCSS.module.css";


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${containerStyle.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}></div>
                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                    <button>Отправить</button>
                </form>
            </div>
        </div>
    );
}
export default Contacts;
