import React from 'react';
import s from './Contact.module.css';
import sContainer from './../Common/Styles/Container.module.css'


export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
                <h2 className={s.feedbackTitle}>Feedback</h2>
                <form className={s.contactForm} action="text-table">
                    <input placeholder={'Name'} type="text"/>
                    <input placeholder={'+0 234 567 890'} type="number"/>
                    <textarea placeholder={'Into you message'} name="message" id="1"></textarea>
                    <button type={'submit'} className={s.button}>Send</button>
                </form>

            </div>


        </div>
    );
}
