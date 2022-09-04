import React from 'react';
import s from './Main.module.scss';
import sContainer from './../Common/Styles/Container.module.css'
import mainPhoto from './../Assets/Image/mainPhoto.jpg'

const photo = {
    backgroundImage: `url(${mainPhoto})`
};


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.greetings}>
                    <span> Hi World</span>
                    <h1>I am Slava Yakovchuk</h1>
                    <p>Frontend Developer</p>
                </div>
                <div style={photo} className={s.photo}></div>
            </div>
        </div>
    );
}
