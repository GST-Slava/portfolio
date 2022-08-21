import React from 'react';
import s from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="/main">MAIN</a>
            <a href="/skills">SKILLS</a>
            <a href="/project">PROJECTS</a>
            <a href="/contact">CONTACT</a>
        </div>
    );
}