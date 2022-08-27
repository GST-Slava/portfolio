import React from 'react';
import s from './Footer.module.css';
import sContainer from './../Common/Styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>YVV</h2>
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                </div>
                <span className={s.copyright}>Copyright © 2022 GST-Slava All rights reserved</span>
            </div>
        </div>
    );
}