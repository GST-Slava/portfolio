import React from 'react';
import s from './Project.module.css';

type ProjectTitleType = {
    title: string
    description: string
}

export const Project = (props: ProjectTitleType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}
