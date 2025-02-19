import React, { useEffect, useState} from 'react';
import Asker from '../Asker/Asker.js';
import style from './TopAskerList.module.scss' 

const TopAskerList = () => {
    const [askers, setAskers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/askers")
        .then((response) => response.json())
        .then((data) => setAskers(data))
        .catch((error) => console.error("Error fetching data: ", error));
    }, []);

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
