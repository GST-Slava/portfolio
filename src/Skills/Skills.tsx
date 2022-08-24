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
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}/>
                    <Skill title={'JS'} description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <Skill title={'REACT Redux'} description={'"Lorem ipsum dolor sit amet'}/>
                    <Skill title={'CRM Kanban Scrum'} description={'"Lorem ipsum dolor sit amet'}/>
                    <Skill title={'Storybook Postman'} description={'"Lorem ipsum dolor sit amet'}/>
                    <Skill title={'Other Skills'} description={'"Lorem ipsum dolor sit amet'}/>
                </div>
                <div className={s.skills}>

                </div>
            </div>

        </div>
    );
}
