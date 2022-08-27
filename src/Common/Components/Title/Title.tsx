import React from 'react';
import s from './Title.module.scss';

type TitleType = {
    text: string
}

export const Title: React.FC<TitleType> = (props) => {
    return (
        <div className={s.title}>
            <h2>{props.text}</h2>
        </div>
    );
}
