import React from 'react';
import s from './Projects.module.css';
import sContainer from './../Common/Styles/Container.module.css'
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>MY PROJECTS</h2>
                <div className={s.projects}>
                    <Project title={'ToDoList'} description={'Description TodoList'}/>
                    <Project title={'SocialNetwork'} description={'Description SocialNetwork'}/>
                    <Project title={'Counter'} description={'Description Counter'}/>
                </div>
            </div>

        </div>
    );
}