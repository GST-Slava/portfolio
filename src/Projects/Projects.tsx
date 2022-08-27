import React from 'react';
import s from './Projects.module.scss';
import sContainer from './../Common/Styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../Common/Components/Title/Title';
import todoImage from './../Assets/Image/ToDoLost.jpg'
import socialImage from './../Assets/Image/SocialNetwork.jpeg'



export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`
    };

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={s.projects}>
                    <Project style={todolist} title={'ToDoList'} description={'Description TodoList'}/>
                    <Project style={social} title={'SocialNetwork'}
                             description={'Description SocialNetwork Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum '}/>
                </div>
            </div>

        </div>
    );
}