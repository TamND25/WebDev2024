import React from 'react';
import styles from './LeftSideBar.module.scss'
import homeIcon from '../../assets/home.png';
import questionIcon from '../../assets/questionIcon.png';
import tagIcon from '../../assets/tag.png';
import companionIcon from '../../assets/companion.png';
import answerIcon from '../../assets/answerIcon.png';
import overflowAiIcon from '../../assets/Overflow-AI.png';


const leftSideBar = ({ content }) => {

    const { channels, img, alt } = content;   
    
    const imgMapping = {
        homeIcon,
        questionIcon,
        tagIcon,
        companionIcon,
        answerIcon,
        overflowAiIcon
    };

    return (
        <div className={styles["leftSideBar"]}>
                {channels.map((channel, index) => (
                    <div key={index}>
                        <div className={styles["channelName"]}>
                            <img src={imgMapping[channel.img]} alt={channel.alt} className={styles["icon"]}/>
                            <span className={styles["channel"]}>{channel.name}</span>
                        </div>

                        {index === 2 && <div className={styles["divide"]}></div>}
                    </div>  
                ))} 

            <div className={styles.team}>
                <div className={styles["bold-text"]}>TEAMS</div>
                <img src={imgMapping[img]} alt={alt}></img>
                <p><span className={styles["bold"]}>Now available on USTH Overflow for Teams!</span> AI features where you work: search, IDE, and chat.</p>
                <button className={styles["orangebtn"]}>Learn more</button>
                <a href="">Explore Teams</a>
            </div>
        </div>
    );
};

export default leftSideBar;