import React from 'react';
import s from './Project.module.scss';

type ProjectTitleType = {
    title: string
    description: string
    style: React.CSSProperties
}

export const Project: React.FC<ProjectTitleType> = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a className={s.readMoreBtn} href="/show">Read more</a>
            </div>
            <div className={s.projectInfo}>
                <h4 className={s.projectTitle}>{props.title}</h4>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
}


