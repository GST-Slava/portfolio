import React from 'react';
import s from './Skills.module.css';
import sContainer from './../Common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML CSS'}
                           description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}/>
                    <Skill title={'JS'} description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <Skill title={'REACT'} description={'"Lorem ipsum dolor sit amet'}/>
                </div>
            </div>

        </div>
    );
}
