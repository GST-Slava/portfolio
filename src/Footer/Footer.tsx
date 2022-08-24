import React from 'react';
import s from './Footer.module.css';
import sContainer from './../Common/Styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.footerTitle}>YVV</h2>
                <div className={s.footer}>
                    <div className={s.info}>Tel: +(1) 23 -456789</div>
                    <div className={s.info}>e.mail: example@example.com</div>
                    <div className={s.copyright}>Copyright © 2022 GST-Slava All rights reserved.</div>
                </div>

            </div>

        </div>
    );
}