import React from 'react';
import style from './Asker.module.scss';

const Asker = ({ name, field, image, link }) => {
    return (
        <div className={style["asker-item"]}>
            <img src={image} alt={name} className={style["asker-image"]} />
            <div className={style["asker-details"]}>
                <a href={link} className={style["asker-link"]}>
                    <div className={style["asker-name"]}>{name}</div>
                </a>
                <div className={style["asker-field"]}>{field}</div>
            </div>
        </div>
    );
};

export default Asker;
