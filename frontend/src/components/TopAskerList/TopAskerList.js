import React from 'react';
import Asker from '../Asker/Asker.js';
import style from './TopAskerList.module.scss'

const TopAskerList = ({ askers }) => {
    return (
        <div className={style["asker-list-container"]}>
            <div className={style["heading"]}>Top Network Askers</div>
            <ul>
                {askers.map((asker, index) => (
                    <li key={index} className={style["asker-list-item"]}>
                        <Asker
                            image={asker.image}
                            name={asker.name}
                            field={asker.field}
                            link={asker.link}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopAskerList;
