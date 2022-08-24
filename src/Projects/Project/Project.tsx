import React from 'react';
import s from './Project.module.css';

type ProjectTitleType = {
    title: string
    description: string
}

export const Project = (props: ProjectTitleType) => {
    return (
        <div className={s.project}>
            <h3>{props.title}</h3>
            <div className={s.imgContainer}>
                <a className={s.buttonShow} href="/show">Show</a>
            </div>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}
